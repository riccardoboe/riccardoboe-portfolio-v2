import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import useLocalStorage from "use-local-storage";
import { HiOutlineSun } from "react-icons/hi";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Navbar />
      <Header />
      <div className="theme-toggle">
        <h1>Change Theme &nbsp; &#8601;</h1>
        <div >
          <HiOutlineSun className="theme-button" onClick={switchTheme}/>
        </div>
      </div>
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
