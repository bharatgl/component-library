import React from 'react';
import { render } from '@testing-library/react';
import { LongString } from './ellipsis.composition';

describe('Button', () => {
  it('should render', () => {
    const { getByTestId } = render(<LongString />);
    const rendered = getByTestId('long-string');
    expect(rendered).toBeTruthy();
  });
});
