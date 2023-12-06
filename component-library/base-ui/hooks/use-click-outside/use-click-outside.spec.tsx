import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseClickOutside } from './use-click-outside.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicUseClickOutside />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
