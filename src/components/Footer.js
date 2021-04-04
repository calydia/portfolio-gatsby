import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.footerBg};
  border-top: 10px solid ${({ theme }) => theme.footerBorder};
  ul {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 2em;
  }
  .some-icon {
    background-position: center;
    display: block;
    height: 50px;
    text-indent: -9999px;
    transition: background-size 0.1s;
    width: 50px;
    &:focus {
      outline: 2px dotted ${({ theme }) => theme.text};
      outline-offset: 0;
    }
  }

  .github-link {
    background: ${({ theme }) => theme.footerGitHub};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    &:hover {
      background-size: 34px 34px;
      transition: background-size 0.1s;
    }
  }
  .gitlab-link {
    background: ${({ theme }) => theme.footerGitLab};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 45px 45px;
    &:hover {
      background-size: 49px 49px;
      transition: background-size 0.1s;
    }
  }

  .linkedin-link {
    background: ${({ theme }) => theme.footerLinkedIn};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    &:hover {
      background-size: 34px 34px;
      transition: background-size 0.1s;
    }
  }
`;

const Footer = () => {

  return (
    <FooterStyles>
      <div className="footer-links">
        <ul>
          <li>
            <a className="github-link some-icon" href="https://github.com/calydia" rel="noopener noreferrer">Visit my page on GitHub</a>
          </li>
          <li>
            <a className="gitlab-link some-icon" href="https://gitlab.com/Calydia" rel="noopener noreferrer">Visit my page on GitLab</a>
          </li>
          <li>
            <a className="linkedin-link some-icon" href="https://www.linkedin.com/in/sanna-makinen" rel="noopener noreferrer">Visit my profile on LinkedIn</a>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
};

export default Footer;
