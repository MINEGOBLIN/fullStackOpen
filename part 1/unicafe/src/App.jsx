import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div><h1>give feedback</h1></div>
      <div>
        buttons here...
      </div>
      <div><h1>statistics</h1></div>
      <div>
        statistics here...
      </div>
    </div>
  )
}

export default App