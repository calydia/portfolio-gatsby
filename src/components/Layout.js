import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import  {useDarkMode} from '../components/useDarkMode'
import { lightTheme, darkTheme, GlobalStyles } from '../../themeConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toggle from '../components/Toggler';
import Helmet from 'react-helmet';

const SkipLink = styled.a`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;
  &:focus {
    background-color: ${({ theme }) => theme.skipBg};
    color: ${({ theme }) => theme.skipColor};
    display: inline-block;
    height: auto;
    left: 0;
    width: auto;
    position: absolute;
    margin: auto;
    outline: 2px dotted ${({ theme }) => theme.linkColor};
    outline-offset: 5px;
    padding: 0.7em;
    top: 2em;
    z-index: 2;
  }
`;

const MainTheme = styled.main`
  .project--decorative {
    display: flex;
    height: 250px;
    margin: 0 auto;
    max-width: 2000px;
  }
`;

const Layout = ({ children }) => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Average+Sans&family=Rock+Salt&display=swap');
        </style>
      </Helmet>
      <header>
        <GlobalStyles />
        <SkipLink href="#skip-target" id="skip" className="skip-link">Skip to content</SkipLink>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Header />
      </header>
      <MainTheme>
        {children}
      </MainTheme>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
