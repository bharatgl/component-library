import type { ReactNode } from 'react';

export type CheckboxProps = {
  children?: ReactNode;
};

export function Checkbox({ children }: CheckboxProps) {
  return (
    <div>
      {children}
    </div>
  );
}
