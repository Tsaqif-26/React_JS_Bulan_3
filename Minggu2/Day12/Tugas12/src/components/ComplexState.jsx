
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

export default function ThemeApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          textAlign: "center",
          minHeight: "100px",
          borderRadius: "12px",
          width: "350px",
          margin: "50px auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          backgroundColor: theme === "light" ? "#fafafa" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          transition: "0.3s",
          padding: "50px",
        }}
      >
        <h2>Context API - Tema {theme.toUpperCase()}</h2>
        <ThemeToggleButton />
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#333" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "20px 0",
      }}
    >
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}


function ThemedBox() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#444",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    >
      <p>Tema aktif: {theme.toUpperCase()}</p>
    </div>
  );
}
