import React from 'react';
import { render } from '@testing-library/react';
import { BasicColorPalette } from './color-palette.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicColorPalette />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
