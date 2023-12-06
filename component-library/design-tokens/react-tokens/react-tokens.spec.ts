import { reactTokens } from './react-tokens';

it('renders with the correct text', () => {
  expect(reactTokens()).toBe('hello world');
});
