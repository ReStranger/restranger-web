import React from "react";
import { useTheme } from "./utils/themeContext";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return <Header theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
