'use client';

import { AnimatePresence, motion } from 'motion/react';
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

// Each icon spins in from one side and out the other while fading, so a quick toggle reads as a
// single turning motion. Motion skips the rotate/scale for visitors with "reduce motion" on
// (MotionProvider sets reducedMotion="user"), leaving just the fade.
const iconMotion = {
  initial: { opacity: 0, rotate: -90, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 90, scale: 0.5 },
  transition: { duration: 0.25, ease: 'easeOut' },
} as const;

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
    </svg>
  );
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
      className="grid size-9 place-items-center rounded-full border border-border hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      {/* Moon in light mode ("switch to dark"); sun in dark mode ("switch to light"). */}
      {theme === null ? (
        // Before React has loaded we don't know the theme yet, so render both icons and let CSS
        // pick one with `dark:`. That way the right icon shows from the very first paint.
        <>
          <span className="dark:hidden">
            <MoonIcon />
          </span>
          <span className="hidden dark:block">
            <SunIcon />
          </span>
        </>
      ) : (
        // Once React knows the theme, AnimatePresence takes over. Changing `key` tells it the old
        // icon is leaving (plays `exit`) and a new one is arriving (plays `initial` → `animate`).
        // `initial={false}` skips the entrance on first mount, so the page load doesn't spin the icon.
        <AnimatePresence initial={false}>
          <motion.span
            key={theme}
            {...iconMotion}
            // Both icons sit in the same grid cell while they cross over, instead of side by side.
            className="col-start-1 row-start-1"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
