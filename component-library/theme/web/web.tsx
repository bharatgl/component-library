import type { ReactNode } from 'react';
import { createTheme } from '@teambit/base-react.theme.theme-provider';

import { reactTokens } from '@bharatgl/component-library.design-tokens.react-tokens';
import type { ReactTokensProps } from '@bharatgl/component-library.design-tokens.react-tokens';

const theme = createTheme<ReactTokensProps>({
  theme: reactTokens,
});

const { useTheme, ThemeProvider } = theme;

export { useTheme, ThemeProvider };
