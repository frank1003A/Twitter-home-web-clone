import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "dark" | "light";

// Define the type for the context
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

// Define the provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Retrieve the theme value from localStorage or use a default value
    const storedTheme = localStorage.getItem("theme");
    return (storedTheme as Theme) || "light";
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    // Save the theme value to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeInit = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeInit}>
      <div
        className="base-wrapper"
        data-theme={theme}
        suppressHydrationWarning={true}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
