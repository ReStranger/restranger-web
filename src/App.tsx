import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} />
    </>
  );
};

export default App;
