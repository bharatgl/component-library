import { baseTokens } from '@bharatgl/component-library.design-tokens.base-tokens';
import type { BaseTokensProps } from '@bharatgl/component-library.design-tokens.base-tokens';

export interface ReactTokensProps extends BaseTokensProps {
  spacing: string;
  fontSize: string;
  borderWidth: string;
}

export const reactTokens: ReactTokensProps = {
  ...baseTokens,
  spacing: '15px',
  fontSize: ' 15px',
  borderWidth: '2px',
  borderStyle: 'dotted',
};
