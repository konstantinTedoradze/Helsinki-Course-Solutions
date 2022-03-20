import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phonebooksService from './services/Phonebooks';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterValue,setFilterValue] = useState('');
  const [newMessage,setNewMessage] = useState(null);
  const [isButtonClicked,setIsButtonClicked] = useState(false);
  const [isErrorMessage,setIsErrorMessage] = useState(false);

  useEffect(() => {
    phonebooksService.getAll().then(initialData => setPersons(initialData))
  },[]);

  const newPersonsArray = persons.filter(person => person.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);

  const onSubmitCliked = (event) => {
    event.preventDefault();
    let namesArray = persons.map(person => person.name.toLowerCase());
    let numbersArray = persons.map(person => person.number);
    let isNameUnique = namesArray.indexOf(newName.toLowerCase()) === -1 ? true : false;
    let isNumberUnique = numbersArray.indexOf(newNumber) === -1 ? true : false;
    setIsButtonClicked(true);
    
    if(!isNameUnique){
     if( window.confirm(`${newName} is already added to phonebook, replace the old numnber with a new one?`)){
      let currentPerson = persons.find(person => person.name === newName);
      const changedPerson = { ...currentPerson, number: newNumber };

      console.log(currentPerson,'current person')
      phonebooksService.update(currentPerson.id,changedPerson).then(returnedPersons => 
        setPersons(persons.map(person => person.id !== currentPerson.id ? person : returnedPersons)));
     }    
     setNewName('');
     setNewNumber('');
     setIsButtonClicked(false);
    }else if(!isNumberUnique){
      alert(`Number ${newNumber} is already added to phonebook`);
    }else{
      let newObj = {name: newName,number: newNumber};
      phonebooksService.create(newObj).then(returnedPhoneBook => 
      setPersons(persons.concat(returnedPhoneBook)))
      setNewName('');
      setNewNumber('');
      setIsErrorMessage(false);
      setNewMessage(`Added ${newName}`);
      setTimeout(() => {
        setNewMessage(null);
      },5000);
      setIsButtonClicked(false);
    }    
  }

  const onfilteredArray = (e) => {
    setFilterValue(e.target.value);
  }
  console.log(persons,'persons array');

  const onButtonClicked = (id) => {
    console.log('current person id:', id);
    let person = persons.find(person => person.id === id);

    if (window.confirm(`Do you really want to Delete ${person.name}?`)) {
      phonebooksService.deleteContact(id).then(returnedNote => {
        if(returnedNote){
          setIsErrorMessage(true);
          setNewMessage(`Information of ${person.name} has already been removed from server`);
          setTimeout(() => {
            setNewMessage(null);
          },5000);
        }
        return returnedNote && setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        console.log(error);
        setIsErrorMessage(true);
        setNewMessage(`Added ${newName}`);
        setTimeout(() => {
          setNewMessage(null);
        },5000);
        setIsButtonClicked(false);
        })  
    }
  } 

  let buttonColor = isButtonClicked ? "blue" : "red";
  console.log(isButtonClicked,'button color')
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} isErrorMessage={isErrorMessage} />
      <Filter filterValue={filterValue} onfilteredArray={onfilteredArray} />

      <h3>Add a new</h3>

      <PersonForm newName={newName} buttonColor={buttonColor} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} onSubmitCliked={onSubmitCliked} />

      <h3>Numbers</h3>

      <Persons newPersonsArray={newPersonsArray} onButtonClicked={onButtonClicked}/>
      
    </div>
  )
}

export default App;
