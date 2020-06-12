import * as React from 'react';

export interface GreetingProps {
  name?: string;
}

export const Greeting: React.FunctionComponent<GreetingProps> = ({ name = 'Bob' }: GreetingProps) => {
  return <div className="osg-greeting">Hello there, {name}!</div>;
};
