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
        <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
          </button>
      </header>
    </div>
    )}
    </ThemeContext.Consumer>
  );
};
