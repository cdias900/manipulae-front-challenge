import { FC } from 'react';

import MenuItem from '../MenuItem';

import { Container } from './styles';

const Menu: FC = () => (
  <Container>
    <MenuItem to="/" label="Página Inicial" />
    <MenuItem to="/favorites" label="Favoritos" />
  </Container>
);

export default Menu;
