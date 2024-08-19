import { useContext, createContext, useState } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a provider!");
  }

  return context;
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button
        style={{
          padding: "5px",
          border: "2px solid white",
          borderRadius: "8px",
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </header>
  );
};
