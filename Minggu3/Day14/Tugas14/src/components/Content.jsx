import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <div
      style={{
        backgroundColor: isLight ? "white" : "#222",
        borderRadius: "12px",
        color: isLight ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>Mode: {theme}</h1>
      <button onClick={toggleTheme}>Berubah!</button>

      <div style={{ padding: "2px", border: "1px solid", borderRadius: "8px" }}>
        Card random ({theme})
      </div>

      <p>Teks random ({theme})</p>
    </div>
  );
}

export default Content;