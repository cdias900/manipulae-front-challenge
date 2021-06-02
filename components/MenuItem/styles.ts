import styled from 'styled-components';

export const MenuLink = styled.a`
  text-decoration: none;
  min-width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2C3A47;

  :hover {
    color: red;
  }

  @media (max-width: 750px) {
    min-width: 150px;
  }

  @media (max-width: 500px) {
    min-width: 100px;
  }
`;
