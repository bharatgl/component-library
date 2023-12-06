import React from 'react';
import { Button } from './button';
import { ThemeProvider } from '@bharatgl/component-library.base-ui.theme-provider';

export const BasicButton = () => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Button onClick={() => alert('on click')}>Click</Button>
  </div>
);

export const ThemedButton = () => (
  <ThemeProvider>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => alert('on click')}>Click</Button>
    </div>
  </ThemeProvider>
);
