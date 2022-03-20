import React from "react";

const Filter = ({filterValue,onfilteredArray}) => {
  return (
    <div>
        <span>Filter shown with </span>
        <input type="text" value={filterValue} onChange={onfilteredArray} />
    </div>
  );
};

export default Filter;
