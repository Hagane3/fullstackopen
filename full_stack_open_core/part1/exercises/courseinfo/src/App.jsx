
const Header = ({course}) => {
    return <h1>{course.name}</h1>
}

const Part = ({name, number}) => {
    return (
        <p>{name} {number}</p>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(item => <Part name={item.name} number={item.exercises} />)}
        </div>
    )
}

const Total = ({parts}) => {
    return  <p>Number of exercises {parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises
    }, 0)}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
export default App;