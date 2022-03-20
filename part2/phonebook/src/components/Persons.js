import React from 'react';
import Person from './Person';

const Persons = ({newPersonsArray, onButtonClicked}) => {
    return (
        <div>
            {newPersonsArray && newPersonsArray.map(person => <Person key={person.name} person={person} onButtonClicked={() => onButtonClicked(person.id)} />)}
        </div>
    )
}

export default Persons
