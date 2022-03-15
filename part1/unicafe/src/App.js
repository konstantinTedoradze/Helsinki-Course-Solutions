import React, {useState} from "react";
import Statistics from './components/Statistics';
import ButtonComponent from './components/ButtonComponent';

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = good + neutral + bad
  let average = allClicks === 0 ? 0 : (good - bad) / allClicks;


  return (
    <div>
      <h1>Give feedback</h1>
      <ButtonComponent onHandleClick={() => setGood(good + 1)} text='good' />
      <ButtonComponent onHandleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <ButtonComponent onHandleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average}/>
      
    </div>
  )
}

export default App;
