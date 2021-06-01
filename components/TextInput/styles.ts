import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 50px;

  svg {
    position: absolute;
    top: 50%;
    right: 3%;
    cursor: pointer;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 350px;
  padding: 8px 40px 8px 8px;
`;
