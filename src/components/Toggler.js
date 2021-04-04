import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.mainLink};
  padding: 1em 1.5em;
  position: absolute;
  right: 0;
  z-index: 2;
  &:hover {
    cursor: pointer;
    outline: 1px solid ${({ theme }) => theme.linkColor};
  }
  &:focus {
    outline: 2px dotted ${({ theme }) => theme.linkColor};
    outline-offset: 5px;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme} className={theme}
        aria-label={ (theme === "light") ? "Switch to dark mode" : "Switch to light mode"}
        title={ (theme === "light") ? "Switch to dark mode" : "Switch to light mode"}
      >
        { (theme === "light") ? <Brightness2Icon aria-hidden="true" /> : <WbSunnyIcon aria-hidden="true" />}
      </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
