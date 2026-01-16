"use client";

import * as React from "react";

type ThemeMode = "dark" | "light";

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "theme-mode";

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setModeState] = React.useState<ThemeMode>("dark");
  const [mounted, setMounted] = React.useState(false);

  // Mark as mounted
  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      setModeState(saved);
    }
    setMounted(true);
  }, []);

  // Save preference when it changes
  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }, [mode, mounted]);

  const toggleTheme = React.useCallback(() => {
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setMode = React.useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const value = React.useMemo(
    () => ({ mode, toggleTheme, setMode }),
    [mode, toggleTheme, setMode]
  );

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeContextProvider");
  }
  return context;
}
