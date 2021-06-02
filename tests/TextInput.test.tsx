/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import TextInput from '../components/TextInput';

describe('TextInput', () => {
  it('should render without crashing', () => {
    render(<TextInput clear={() => {}} onChange={() => {}} value="" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
  });
});
