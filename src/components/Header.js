import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, Link, graphql } from 'gatsby';


const HeaderStyles = styled.div`
padding: 5em 0 2em 0;
position: relative;
text-align: center;
@media only screen and (min-width: 500px) {
  padding: 2em 0;
}
`;

const LogoLink = styled.a`
color: ${({ theme }) => theme.mainLink};
display: inline-block;
position: relative;
text-align: center;
text-shadow: ${({ theme }) => theme.headerTextShadow};
z-index: 2;
&:hover {
  color: ${({ theme }) => theme.linkColor};
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.linkColor};
  outline-offset: 15px;
  text-decoration: none;
}
&:focus {
  color: ${({ theme }) => theme.mainLink};
  outline: 2px dotted ${({ theme }) => theme.linkColor};
  outline-offset: 15px;
}

.blog-me {
  display: block;
  font-family: 'Rock Salt', cursive;
  font-size: 1.875rem;
  line-height: 1;
}
.blog-name {
  display: block;
  font-family: 'Rock Salt', cursive;
  font-size: 1.125rem;
  line-height: 1;
  margin-top: 0.5em;
}
`;

const NavigationStyles = styled.nav`
ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 2em;
  padding: 0;
  position: relative;
  z-index: 2;
}
li {
  margin: 0.8em;
}
a {
  color: ${({ theme }) => theme.mainLink};
  font-size: 1.3rem;
  padding: 0.2em;
  text-shadow: ${({ theme }) => theme.headerTextShadow};
}
a.active {
  color: ${({ theme }) => theme.linkColor};
  text-decoration: underline;
}
a:hover {
  color: ${({ theme }) => theme.linkColor};
  text-decoration: underline;
}
a:focus {
  color: ${({ theme }) => theme.mainLink};
  outline: 2px dotted ${({ theme }) => theme.linkColor};
  outline-offset: 5px;
  text-decoration: underline;
}
`;

const Header = () => {

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
    <HeaderStyles>
        <LogoLink href="/">
          <span className="blog-me">Sanna Mäkinen</span>
          <span className="blog-name">Portfolio</span>
        </LogoLink>
      <NavigationStyles aria-label="main-navigation">
        <ul className="main-menu">
          {data.site.siteMetadata.menuLinks.map((item) => {
            return (
              <li className="main-menu-item" key={item.id}>
                <Link
                  to={item.link}
                  activeClassName="active"
                  partiallyActive={ item.id === 'menu-1' ? false : true }
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </NavigationStyles>
    </HeaderStyles>
  );
}

export default Header;
