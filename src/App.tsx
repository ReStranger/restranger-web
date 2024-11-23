import React, { useState } from "react";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return <Header theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
