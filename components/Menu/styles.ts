import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  width: 100%;
  z-index: 1000;
  margin-top: -70px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 750px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;
