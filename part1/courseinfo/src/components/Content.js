import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
  console.log(parts,'prt')
    return (
      <div>
        {parts.map((part,index) => <Part  key={index} name={part.name} exercises={part.exercises}/>)}
      </div>
    )
  }

export default Content
