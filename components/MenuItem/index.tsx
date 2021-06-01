import { FC } from 'react';
import Link from 'next/link';

import { MenuLink } from './styles';

interface MenuItemProps {
  to: string;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ to, label }) => (
  <Link href={to} passHref>
    <MenuLink>{label}</MenuLink>
  </Link>
);

export default MenuItem;
