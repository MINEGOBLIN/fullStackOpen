const App = () => {
  const friends = [
    { name: 'Peter', age: 4},
    { name: 'Deez', age: 100},
  ]
  const labels = [ 'Polo', 'Nautica' ]

  return (
    <>
      <h1>Greetings {friends[0].name} and {friends[1].name}</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{labels[0]} {labels[1]}</p>
      <p>{labels}</p>
    </>
  )
}

export default App