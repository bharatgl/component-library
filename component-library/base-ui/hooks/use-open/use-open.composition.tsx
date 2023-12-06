import React from 'react';
import { useOpen } from './use-open';

export const BasicuseOpen = () => {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <>
      <h1>The count is {isOpen.toString().toUpperCase()}</h1>
      <button onClick={toggleOpen}>ToggleButton </button>
    </>
  );
};
