import styled from 'styled-components';

import { FiExternalLink } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const Container = styled.div`
  margin: 8px 0;
  padding: 8px 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 5px 10px -2px #CCCCCC;
  box-shadow: 0px 5px 10px -2px #CCCCCC;
  background-color: #FAFAFA;
`;

export const InfoContainer = styled.div`
  position: relative;
  padding: 0 16px;
  width: 350px;
  height: 100%;

  :hover {
    svg {
      opacity: 1;
    }
  }
`;

export const FavoriteIcon = styled(AiFillStar)`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

export const NotFavoriteIcon = styled(AiOutlineStar)`
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

export const ExternalLink = styled(FiExternalLink)`
  position: absolute;
  left: 5%;
  bottom: 0;
`;

export const Title = styled.p`
  font-size: 16px;
  margin: 2px 4px;
`;

export const Artist = styled.p`
  font-size: 13px;
  margin: 2px 4px;
`;

export const Duration = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 13px;
  margin: 2px 4px;
`;
