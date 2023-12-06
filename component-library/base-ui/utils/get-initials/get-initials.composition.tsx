// get-initials.js
import React from 'react';

type GetInitialsProps = {
  children: string;
};

const GetInitials: React.FC<GetInitialsProps> = ({ children }) => {
  // Your component logic here
  return <div>{children}</div>;
};

export { GetInitials };
