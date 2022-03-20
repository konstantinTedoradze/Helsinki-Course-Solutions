import React from "react";

const Person = ({person,onButtonClicked}) => {
  return (
    <div>
      <span>
        {person.name} {person.number}
      </span>
      <button onClick={onButtonClicked}>Delete</button>
    </div>
  );
};

export default Person;
