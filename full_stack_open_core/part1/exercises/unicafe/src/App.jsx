import { useState } from 'react'

const calcAverage = (good, neutral, bad) => {
    return (good * 1 + bad * -1) / (good + neutral + bad);
}

const sum = (good, neutral, bad) => {
    return good + neutral + bad
}

const percentageOfPositive = (good, neutral, bad) => {
    return (
        <span>{(good / sum(good, neutral, bad)) * 100} %</span>
    )
}

const Heading = ({text}) => {
    return (
        <h2>{text}</h2>
    )
}

const Button = ({name, handler}) => {
    return (
        <button onClick={handler}>{name}</button>
    )
}

const StatisticLine = ({name, value}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    return (
        <table>
        <StatisticLine name="good" value={good}/>
        <StatisticLine name="neutral" value={neutral}/>
        <StatisticLine name="bad" value={bad}/>
        <StatisticLine name="all" value={sum(good, neutral, bad)}/>
        <StatisticLine name="average" value={calcAverage(good, neutral, bad)}/>
        <StatisticLine name="positive" value={percentageOfPositive(good, neutral, bad)}/>
        </table>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Heading text="give feedback"/>
            <div>
                <Button name="good" handler={() => setGood(prevState => prevState + 1)}/>
                <Button name="neutral" handler={() => setNeutral(prevState => prevState + 1)}/>
                <Button name="bad" handler={() => setBad(prevState => prevState + 1)}/>
            </div>
            <Heading text="statistics"/>
            {sum(good, neutral, bad) === 0 ? <span>No feedback given</span> :  <Statistics good={good} neutral={neutral} bad={bad}/>}
        </div>
    )
}

export default App