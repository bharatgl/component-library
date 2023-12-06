import React from 'react';
import { render } from '@testing-library/react';
import { BasicColorsByLetter } from './colors-by-letter.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicColorsByLetter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});