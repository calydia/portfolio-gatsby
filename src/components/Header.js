import React, { useState } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import ThemeContext from "../context/ThemeContext";

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

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="header-wrapper">
          <header className="main-header">
            <a href="#main-skip" className="skip-link">
              Skip to main content
            </a>
            <div className="home-main" to="/">
              Sanna Mäkinen
            </div>
            <button
              className={toggle ? "menu-toggle show" : "menu-toggle"}
              id="mobile-menu"
              onClick={toggleMenu}
            >
              {toggle ? "Close" : "Menu"}
            </button>
            <nav className={toggle ? "main-menu show" : "main-menu"}>
              <ul>
                {data.site.siteMetadata.menuLinks.map((item) => {
                  return (
                    <li className="main-menu-item" key={item.id}>
                      <Link to={item.link} activeClassName="menu-active">
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? <span>Dark mode</span> : <span>Light mode</span>}
            </button>
          </header>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
