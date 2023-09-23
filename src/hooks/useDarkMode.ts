import { useEffect } from "react";
import { useLocalStorage } from "./useStorage";

export default function useDarkMode() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme)").matches;
  const [darkMode, setDarkMode] = useLocalStorage(
    "useDarkMode",
    prefersDarkMode
  );
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
