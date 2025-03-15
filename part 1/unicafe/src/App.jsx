import { useState } from 'react'

const Reviews = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <div><h1>give feedback</h1></div>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <div><h1>statistics</h1></div>
        <Reviews good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

/* What I need
- 3 buttons (good, neutral, bad)
- 3 values that record how many good/neutral/bad button clicks are made

*/