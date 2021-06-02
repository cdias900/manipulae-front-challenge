import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  margin-top: 70px;
`;

export const TrackList = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonsContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 16px;

  @media (max-width: 750px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
