import styled from 'styled-components';

const Breadcrumb = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li::before {
    content: "/";
    margin: 0 0.5em;
  }

  li:first-child::before {
    content: "";
    display: none;
    margin-left: 0;
    visibility: hidden;
  }
`;

export default Breadcrumb;
