const Header = (props) => {
  return (
      <h1>{props.course} {props.test}</h1>
  )
}

const Content = (props) => {
  const { exercises } = props 
  return (
    <div>
      {
        exercises.map((e) => (<Part key={e.part} exercise={e}/>))
      }
    </div>
  )
}

const Part = (props) => {
  const { exercise } = props
  console.log(exercise)
  return (
    <p>{exercise.part} - {exercise.exercises}</p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const partsAndExercises = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
    { part: 'Testing', exercises: 100 },
  ]
  return (
    <div>
      <Header course={course} test='string' />
      <Total test='hello' total={partsAndExercises[0].exercises + partsAndExercises[1].exercises + partsAndExercises[2].exercises} />
      <Content exercises={partsAndExercises}/>
    </div>
  )
}

export default App