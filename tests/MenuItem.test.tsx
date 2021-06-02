/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import MenuItem from '../components/MenuItem';

describe('MenuItem', () => {
  it('should render without crashing', () => {
    render(<MenuItem to="/" label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
