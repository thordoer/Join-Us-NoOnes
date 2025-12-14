import React, { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
// import "./styles/theme.css";
import "./components/styles/variables.css";
import "./components/styles/theme.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      // setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}-theme`}>
      <LoginPage theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
