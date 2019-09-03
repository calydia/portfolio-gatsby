import React from "react";
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

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="header-wrapper">
          <header className="main-header">
            <Link className="home-main" to="/">
              Sanna Mäkinen
            </Link>
            <ul className="main-menu">
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
            <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? <span>Dark mode</span> : <span>Light mode</span>}
            </button>
          </header>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
