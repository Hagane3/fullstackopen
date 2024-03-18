import { useState } from 'react'

const Button = ({name, handler}) => {
    return (
        <button onClick={handler}>{name}</button>
    )
}

const Heading = ({name}) => {
    return (
        <h2>{name}</h2>
    )
}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]


    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

    const anecdoteWithTheMostVotesIndex = votes.indexOf(Math.max(...votes));

    console.log(anecdoteWithTheMostVotesIndex)
    const generateRandomNumber = (length) => {
        return Math.floor(Math.random()*length)
    }

    const handleVoteUp = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;

        setVotes(newVotes)

    }

    return (
        <div>
            <Heading name="Anecdote of the day"/>
            <p>{anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <Button name="vote" handler={handleVoteUp}/>
            <Button name='next anecdote' handler={() => setSelected(generateRandomNumber(anecdotes.length))}/>

            <Heading name="Anecdote with the most votes"/>
            <p>{anecdotes[anecdoteWithTheMostVotesIndex]}</p>
            <p>Has {votes[anecdoteWithTheMostVotesIndex]} votes</p>
        </div>
    )
}

export default App