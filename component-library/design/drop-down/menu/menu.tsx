import React from 'react';
import classNames from 'classnames';
import {
  Containee,
  ContaineeProps,
} from '@bharatgl/component-library.base-ui.surfaces.abs-container.containee';

import styles from './menu.module.scss';

export type MenuProps = {} & ContaineeProps;

export function Menu({ children, className, ...rest }: MenuProps) {
  return (
    <Containee {...rest} className={classNames(styles.menu, className)}>
      {children}
    </Containee>
  );
}
