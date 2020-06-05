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
      {theme => (
        <div className="header-wrapper">
          <header className="main-header">
            <a href="#main-skip" class="skip-link">
              Skip to main content
            </a>
            <Link className="home-main" to="/">
              Sanna Mäkinen
            </Link>
            <ul className={toggle ? "main-menu show" : "main-menu"}>
              {data.site.siteMetadata.menuLinks.map(item => {
                return (
                  <li className="main-menu-item" key={item.id}>
                    <Link to={item.link} activeClassName="menu-active">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              className={toggle ? "menu-toggle show" : "menu-toggle"}
              id="mobile-menu"
              onClick={toggleMenu}
            >
              {toggle ? "Close" : "Menu"}
            </button>
            <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? <span>Dark mode</span> : <span>Light mode</span>}
            </button>
          </header>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
