import React, { useState, useEffect } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              id
            }
          }
        }
      }
    `
  );
  const [usedTheme, setUsedTheme] = useState(false);

  useEffect(() => {
    let storedValue = localStorage.getItem("portfolioTheme");
    if (storedValue === "true") {
      setUsedTheme(true);
    }
    if (storedValue === "false") {
      setUsedTheme(false);
    }
  }, []);

  const storageSetter = status => {
    if (status === true) {
      localStorage.setItem("portfolioTheme", true);
    } else {
      localStorage.setItem("portfolioTheme", false);
    }
  };

  const handleChange = name => event => {
    setUsedTheme(event.target.checked);
    storageSetter(event.target.checked);
  };

  return (
    <div className="header-wrapper">
      <header>
        <Link className="home-main" to="/">
          Sanna Mäkinen
        </Link>
        <ul className="main-menu">
          {data.site.siteMetadata.menuLinks.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.link} activeStyle={{ color: "red" }}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="theme-toggler">
          Use the dark theme
          <label className="switch">
            <input
              type="checkbox"
              checked={usedTheme}
              onChange={handleChange("themeColor")}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
    </div>
  );
};
