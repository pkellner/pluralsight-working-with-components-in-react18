import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  


  return (
    <header>
      <h2>To-do List</h2>
      <span className="nav-item">
        <input
          type="checkbox"
          checked={darkTheme === true}
          className="theme-toggle-checkbox"
          autoComplete="off"
          id="toggleThemeId"
          defaultChecked={false}
          onClick={() => {
            toggleTheme();
          }}
        />
        <label htmlFor="toggleThemeId" className="theme-toggle-checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </span>
    </header>
  );
};

export default Header;
