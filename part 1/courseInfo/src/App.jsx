const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const partsAndExercises = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]
  console.log(partsAndExercises)

  return (
    <div>
      <Header course={course} />
      <Total total={partsAndExercises[0].exercises + partsAndExercises[1].exercises + partsAndExercises[2].exercises} />
    </div>
  )
}

export default App