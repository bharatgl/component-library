import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  headingFontSize,
  textFontSize,
} from '@bharatgl/component-library.design.styles.sizes.size-definition';
import { primaryPalette } from '@bharatgl/component-library.design.styles.colors.primary-color-palette';
import { bookFont } from '@bharatgl/component-library.design.styles.fonts.book';
import {
  ThemeProvider as BaseTheme,
  ThemeProps as BaseThemeProps,
} from '@bharatgl/component-library.base-ui.theme-provider';

export type ThemeProps = {} & BaseThemeProps;

export const Theme = ({ children, className, ...rest }: ThemeProps) => {
  return (
    <BaseTheme
      {...rest}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        primaryPalette,
        className
      )}
    >
      {children}
    </BaseTheme>
  );
};
