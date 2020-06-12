import * as React from 'react';
import './style.css';

export interface GreetingProps {
  name?: string;
}

export const Greeting = ({ name = 'Bob' }: GreetingProps) => {
  return (
    <div className="osg-greeting">
      Hello there, {name}!
    </div>
  )
}