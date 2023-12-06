import React from 'react';
import { render } from '@testing-library/react';
import { BasicWeb } from './web.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicWeb />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
