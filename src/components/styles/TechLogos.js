import styled from 'styled-components';

const TechLogos = styled.li`
  a {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50px auto;
    content: '';
    display: block;
    height: 70px;
    margin: 0.5em 0.7em;
    text-indent: -9999px;
    transition: background-size 0.1s ease-in-out;
    width: 70px;
    &:focus {
      outline: 2px dotted #333;
    }
  }

  &.logo--drupal a {
    background-image: url('../../logos/drupal.svg');
    background-size: 60px auto;
    height: 70px;
    width: 70px;
    &:hover {
      background-size: 65px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--php a {
    background-image: url('/logos/php.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--javascript a {
    background-image: url('/logos/javascript.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--html a {
    background-image: url('/logos/html5.svg');
    background-size: auto 50px;
    &:hover {
      background-size: auto 55px;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--css a {
    background-image: url('/logos/css3.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--sass a,
  &.logo--scss a {
    background-image: url('/logos/sass.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--react a {
    background-image: url('/logos/react.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--graphql a {
    background-image: url('/logos/graphql.svg');
    background-size: auto 50px;
    &:hover {
      background-size: auto 55px;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--gatsby a {
    background-image: url('/logos/gatsby.svg');
    &:hover {
      background-size: 55px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--next a {
    background-image: url('/logos/nextjs.svg');
    background-size: 60px auto;
    height: 70px;
    width: 70px;
    &:hover {
      background-size: 65px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--vscode a {
    background-image: url('/logos/vscode.svg');
    background-size: 40px auto;
    height: 50px;
    width: 50px;
    &:hover {
      background-size: 45px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
  &.logo--git a {
    background-image: url('/logos/git.svg');
    background-size: 40px auto;
    height: 50px;
    width: 50px;
    &:hover {
      background-size: 45px auto;
      transition: background-size 0.1s ease-in-out;
    }
  }
`;

export default TechLogos;
