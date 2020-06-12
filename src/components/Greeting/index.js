import React from 'react';

function Greeting({ name = 'Bob' }) {
  return (
    <div className="osg-greeting">
      Hello there, {name}!
    </div>
  )
}

export default Greeting;