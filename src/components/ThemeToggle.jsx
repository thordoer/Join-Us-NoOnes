import React from "react";
import "./styles/LoginPage.css";
import SvgSprite from "./SvgSprite.jsx";
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      {/* <SvgSprite /> */}
      <svg width="24" height="24" className="theme-icon">
        <use xlinkHref="#icon-IconLight-f466e4"></use>
      </svg>

      <div className="switch-wrapper">
        <input
          type="checkbox"
          id="theme-switch"
          className="theme-switch"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-switch" className="switch-label">
          <span className="switch-track">
            <span className="switch-thumb"></span>
          </span>
          {/* <svg width="24" height="24" class="tw-text-medium-green"></svg>  */}
        </label>
      </div>

      <svg width="24" height="24" className="theme-icon">
        <use xlinkHref="#icon-IconDark-d0da7f"></use>
      </svg>
    </div>
  );
};

export default ThemeToggle;
