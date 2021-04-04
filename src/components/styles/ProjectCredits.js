import styled from 'styled-components';

const ProjectCredits = styled.div`
  background-color: ${({ theme }) => theme.creditBg};
  bottom: 0;
  padding: 0.5em 0.8em;
  position: absolute;
  right: 0;
  p {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    margin: 0;
    a {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
      &:hover {
        color: ${({ theme }) => theme.buttonHover};
        outline: 2px solid ${({ theme }) => theme.buttonHover};
        outline-offset: 2px;
        text-decoration: none;
      }
      &:focus {
        color: ${({ theme }) => theme.buttonHover};
        outline: 2px dotted ${({ theme }) => theme.buttonHover};
        outline-offset: 3px;
        text-decoration: none;
      }
    }
  }
`;

export default ProjectCredits;
