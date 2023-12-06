import type { ReactNode } from 'react';

export type ColorsByLetterProps = {
  children?: ReactNode;
};

export function ColorsByLetter({ children }: ColorsByLetterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
