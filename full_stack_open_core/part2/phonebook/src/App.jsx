import { useState } from 'react'
import {Filter} from './components/Filter.jsx'
import {PersonForm} from "./components/PersonForm.jsx";
import {Persons} from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const [filter, setFilter] = useState('')

    const setNameHandler = (e) => {
        setNewName(e.target.value)
    }

    const setNumberHandler = (e) => {
        setNumber(e.target.value)
    }

    const setFilterHandler = (e) => {
        setFilter(e.target.value)
    }

    const addPersonHandler = (e) => {
        e.preventDefault();
        if(persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(prevState => [...prevState, {name: newName, number: number, id: persons.length + 1}])
        setNewName('')
        setNumber('')

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} handler={setFilterHandler}/>
            <h2>add a new</h2>
            <PersonForm name={newName} nameHandler={setNameHandler} number={number} numberHandler={setNumberHandler} personHandler={addPersonHandler} />
            <h2>Numbers</h2>
            <Persons persons={persons} filterValue={filter}/>
        </div>
    )
}

export default App