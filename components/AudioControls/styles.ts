import styled from 'styled-components';

interface Props {
  playing?: boolean;
}

export const Container = styled.div`
  opacity: ${(props: Props) => (props.playing ? 1 : 0)};
  transition: all 0.2s;

  :hover {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s;
    cursor: pointer;
  }

  svg:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
`;
