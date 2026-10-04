'use client';

import { useLayoutEffect, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const darkQuery = '(prefers-color-scheme: dark)';

// The saved choice wins; with no saved choice we follow the OS setting.
function getPreferredTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // localStorage can throw (e.g. blocked storage); fall through to the OS setting.
  }
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// The `data-theme` attribute on <html> is the single source of truth. useSyncExternalStore lets
// React read it and re-render whenever it changes, instead of keeping a second copy in useState.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.getAttribute('data-theme');
}

// The server can't know the theme, so it renders as "unknown". React swaps in the real value
// right after hydration, which avoids a hydration mismatch.
function getServerSnapshot() {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useLayoutEffect(() => {
    // In development, React Strict Mode wipes the attribute ThemeScript set, so put it back.
    // In production this is a no-op.
    applyTheme(getPreferredTheme());

    // If the visitor hasn't picked a theme, follow live OS changes (e.g. auto dark mode at sunset).
    const media = window.matchMedia(darkQuery);
    const onOsChange = () => applyTheme(getPreferredTheme());
    media.addEventListener('change', onOsChange);
    return () => media.removeEventListener('change', onOsChange);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not saved, but the theme still switches for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark mode"
      // aria-pressed makes screen readers announce it as a switch that's "on" or "off".
      aria-pressed={theme === null ? undefined : theme === 'dark'}
      className="grid size-9 place-items-center rounded-full border border-black/10 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground dark:border-white/15 dark:hover:bg-white/10"
    >
      {/* Both icons are always rendered and CSS picks one, so the right icon shows before React loads. */}
      {/* Moon in light mode ("switch to dark"); sun in dark mode ("switch to light"). */}
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2 dark:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-4 fill-none stroke-current stroke-2 dark:block">
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        />
      </svg>
    </button>
  );
}
