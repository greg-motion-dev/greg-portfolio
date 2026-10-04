// Runs in <head> while the browser is still parsing the HTML, before anything is painted.
// It sets data-theme on <html> from the saved choice (or the OS setting if there isn't one),
// so dark-mode visitors never see a white flash while React loads.
// It has to be plain ES5 in a string: it runs before any of our bundled JavaScript exists.
const script = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
