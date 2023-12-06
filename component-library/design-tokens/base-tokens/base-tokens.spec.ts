import { baseTokens } from './base-tokens';

it('renders with the correct text', () => {
  expect(baseTokens()).toBe('hello world');
});
