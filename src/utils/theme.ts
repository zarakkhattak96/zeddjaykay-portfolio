export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME = "dark";

export function getStoredTheme(): string {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function setStoredTheme(theme: string): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error(error);
  }
}

export function initializeTheme(): void {
  try {
    const theme = getStoredTheme();
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
  }
}

export function getCurrentTheme(): string {
  return document.documentElement.getAttribute("data-theme") || DEFAULT_THEME;
}

export function setTheme(theme: string): void {
  document.documentElement.setAttribute("data-theme", theme);
  setStoredTheme(theme);
}

export function toggleTheme(): string {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  return newTheme;
}
