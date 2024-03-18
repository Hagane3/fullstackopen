
const Part = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        </div>
    )
}

const Header = ({title}) => {
    return (
        <h2>{title}</h2>
    )
}

const SumContainer = ({parts}) => {
    return (
        <strong>total of {parts.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.exercises
        }, 0)} exercises</strong>
    )
}

export const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <SumContainer parts={course.parts}/>
        </div>
    )
}