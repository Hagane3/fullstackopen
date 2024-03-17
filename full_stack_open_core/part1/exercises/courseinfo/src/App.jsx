
const Header = ({course}) => {
    return <h1>{course}</h1>
}

const Total = ({courses}) => {
    return  <p>Number of exercises {courses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)}</p>
}

const Part = ({partName, exercises}) => {
    return (
        <p>{partName} {exercises}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.allData.map(item => <Part partName={item.name} exercises={item.exercises} />)}
        </div>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const allData = [
        {
            name: part1,
            exercises: exercises1
        },
        {
            name: part2,
            exercises: exercises2
        },
        {
            name: part3,
            exercises: exercises3
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content allData={allData}/>
            <Total courses={[exercises1, exercises2, exercises3]} />
        </div>
    )
}

export default App