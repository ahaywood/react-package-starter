import React from 'react';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps): JSX.Element => {
  return <div>{name}</div>;
};

export { Icon };
