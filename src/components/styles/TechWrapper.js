import styled from 'styled-components';

const TechWrapper = styled.ul`
  align-items: center;
  background: ${({ theme }) => theme.techBg};
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 2em 0;
  padding: 0;
  @media only screen and (max-width: 768px) {
    flex-flow: row wrap;
  }
`;

export default TechWrapper;
