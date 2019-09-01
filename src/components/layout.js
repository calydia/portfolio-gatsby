import React, { useEffect } from "react";

export default ({ children }) => {
  let themeColor = "light";

  useEffect(() => {
    let storedValue = localStorage.getItem("portfolioTheme");
    console.log(storedValue);
    if (storedValue === "true") {
      console.log("dark");
      themeColor = "dark";
    }
    if (storedValue === "false") {
      console.log("light");
      themeColor = "light";
    }
  }, []);

  return <div className={`layout layout-${themeColor}`}>{children}</div>;
};
