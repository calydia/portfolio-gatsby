import { createGlobalStyle} from "styled-components";

export const lightTheme = {
  text: "#333333",
  body: "white",
  bodyFallBack: "white",
  headerGradient: 'linear-gradient(to right, #E6CAFC 0%, #BBC9F7 50%, #E6CAFC 100%)',
  headerTextShadow: 'none',
  mainLink: 'black',
  linkColor: '#54007b',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: '#BBC9F7',
  footerBg: '#BBC9F7',
  footerBorder: '#18399A',
  footerLogo: 'url(/sm-logo-darkblue.png)',
  footerLink: '#033573',
  footerLinkHover: '#54007b',
  writerBg: '#BBC9F7',
  postText: '#333333',
  postLinkHover: '#54007b',
  postLink: '#033573',
  skipColor: '#54007b',
  skipBg: 'white',
  codeBg: '#E6E6E6',
  codeBorder: '#333333',
  boxColor: 'rgba(187, 201, 247, 1)',
  buttonColor: '#204ACB',
  buttonHover: '#46037e',
  buttonText: 'white',
  creditBg: 'rgba(255,255,255,0.85)',
  galleryBg: '#DFE7FC',
  galleryBorder: '#BBC9F7',
  techBg: '#DFE7FC',
  footerGitHub: 'url("/logos/black/github.svg")',
  footerGitLab: 'url("/logos/black/gitlab.svg")',
  footerLinkedIn: 'url("/logos/black/linkedin.svg")',
  someTwitter: 'url("/logos/black/twitter.svg")',
  someInstagram: 'url("/logos/black/instagram.svg")',
  someDevTo: 'url("/logos/black/dev.svg")',
}
export const darkTheme = {
  text: 'white',
  body: 'linear-gradient(270deg, #010017, #01000f)',
  bodyFallBack: '#010017',
  headerGradient: 'linear-gradient(to right, #35035E 0%, #18399A 50%, #35035E 100%)',
  headerTextShadow: '4px 4px 6px rgba(0, 0, 0, 0.46)',
  mainLink: 'white',
  linkColor: '#ade5f8',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: '#18032B',
  footerBg: '#18032B',
  footerBorder: '#18399A',
  footerLogo: 'url(/sm-logo-lightblue.png)',
  footerLink: '#ade5f8',
  footerLinkHover: 'wheat',
  writerBg: '#18032B',
  postText: '#CFCFCF',
  postLink: '#ade5f8',
  postLinkHover: 'wheat',
  skipColor: 'white',
  skipBg: 'black',
  codeBg: '#03002E',
  codeBorder: '#CFCFCF',
  boxColor: 'rgba(24, 3, 43, 1)',
  buttonColor: '#ade5f8',
  buttonHover: 'wheat',
  buttonText: '#333333',
  creditBg: 'rgba(0,0,0,0.85)',
  galleryBg: '#070038',
  galleryBorder: '#18399A',
  techBg: 'white',
  footerGitHub: 'url("/logos/white/github.svg")',
  footerGitLab: 'url("/logos/white/gitlab.svg")',
  footerLinkedIn: 'url("/logos/white/linkedin.svg")',
  someTwitter: 'url("/logos/white/twitter.svg")',
  someInstagram: 'url("/logos/white/instagram.svg")',
  someDevTo: 'url("/logos/white/dev.svg")',
}

export const GlobalStyles = createGlobalStyle`
  body.light {
    background: white;
    header {
      background: linear-gradient(to right, #E6CAFC 0%, #BBC9F7 50%, #E6CAFC 100%);
    }
  }
  body.dark {
    background: #010017;
    background: linear-gradient(270deg, #010017, #01000f);
    background-size: 400% 400%;
    header {
      background: linear-gradient(to right, #35035E 0%, #18399A 50%, #35035E 100%);
    }
  }
  html,
  body {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    @media only screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    @media only screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  li {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0.3em 0;
    @media only screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  @-webkit-keyframes BackgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes BackgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes BackgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  body {
    background: ${({ theme }) => theme.bodyFallBack};
    background: ${({ theme }) => theme.body};
    background-size: 400% 400%;
    color: ${({ theme }) => theme.text};
    font-family: 'Average Sans', sans-serif;
    @media screen and (prefers-reduced-motion: no-preference) {
      -webkit-animation: BackgroundAnimation 30s ease infinite;
      -moz-animation: BackgroundAnimation 30s ease infinite;
      animation: BackgroundAnimation 30s ease infinite;
    }
  }
  .visually-hidden {
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }
  header {
    background: ${({ theme }) => theme.headerGradient};
  }
  main {
    a {
      color: ${({ theme }) => theme.postLink};
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.postLink};
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
      &:hover {
        color: ${({ theme }) => theme.postLinkHover};
        text-decoration: none;
      }
      &:focus {
        color: ${({ theme }) => theme.postLinkHover};
        outline: 2px dotted ${({ theme }) => theme.buttonHover};
        outline-offset: 3px;
        text-decoration: none;
      }
    }
  }
`
