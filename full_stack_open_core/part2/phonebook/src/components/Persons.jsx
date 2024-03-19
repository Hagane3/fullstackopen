export const Persons = ({persons, filterValue}) => {
    return (
        persons.filter(el => el.name.toLowerCase().includes(filterValue.toLowerCase())).map(person => <p key={person.id}>{person.name} {person.number}</p>)
    )
}