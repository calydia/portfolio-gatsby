import React from "react";
import ThemeContext from '../context/ThemeContext';
import Header from "../components/header";

export default ({ children }) => {

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? 'dark' : 'light'}>
          <Header />
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
