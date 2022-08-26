import React, { useEffect, useRef, useState } from "react";
import { LocalKey } from "../../common/types";

import "./style.scss";

const DarkMode = () => {
  const toggleSwitch = useRef(null);
  const [isDark, setIsDark] = useState(
    localStorage.getItem(LocalKey.THEME) === "dark"
  );
  useEffect(() => {
    const theme = localStorage.getItem(LocalKey.THEME);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(LocalKey.THEME, "dark");
      setIsDark(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(LocalKey.THEME, "light");
      setIsDark(false);
    }
  };
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          ref={toggleSwitch}
          type="checkbox"
          id="checkbox"
          defaultChecked={isDark}
          onChange={switchTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;
