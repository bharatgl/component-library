import React from 'react';
import { render } from '@testing-library/react';
import { BasicTheme } from './theme.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicTheme />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
