import { createContext, useState } from "react";

type Theme = "dark" | "light";

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
  const [theme, setTheme] = useState<Theme>("dark");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
