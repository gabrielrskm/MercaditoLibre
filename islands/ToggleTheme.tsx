import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const isDarkMode = signal(false);

const applyTheme = (dark: boolean) => {
  const theme = dark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
};

export default function ToggleTheme() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    isDarkMode.value = isDark;
    applyTheme(isDark);
  }, []);

  return (
    <label className="flex cursor-pointer gap-2">
      <svg width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        checked={isDarkMode.value}
        onChange={toggleTheme}
        className="toggle theme-controller"
      />
      <svg width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );
}