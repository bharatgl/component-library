import React from 'react';
import { DotsLoader } from './dots-loader';
import { ThemeProvider } from '@bharatgl/component-library.base-ui.theme-provider';

export const BasicDotsLoader = () => (
  <ThemeProvider>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DotsLoader />
    </div>
  </ThemeProvider>
);
