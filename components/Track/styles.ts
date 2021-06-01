import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
`;

export const InfoContainer = styled.div`
  position: relative;
  padding: 0 16px;
  width: 350px;
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const Title = styled.p`

`;

export const Artist = styled.p`

`;
