import * as React from 'react';
import style from './Greeting.scss';

export interface GreetingProps {
  name?: string;
}

export const Greeting: React.FunctionComponent<GreetingProps> = ({ name = 'Bob' }: GreetingProps) => {
  return <div className={style.greeting}>Hello there, {name}!</div>;
};
