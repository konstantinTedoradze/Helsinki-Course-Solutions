import React from "react";

const PersonForm = ({buttonColor,newName,setNewName,newNumber,setNewNumber,onSubmitCliked}) => {
  return (
    <div>
      <form onSubmit={onSubmitCliked}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="name"
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            type="tel"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="123-458-6758"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div>
          <button type="submit" style={{backgroundColor: buttonColor}}>add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
