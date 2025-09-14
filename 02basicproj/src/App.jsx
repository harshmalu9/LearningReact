import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const inc = () => setCounter(counter + 1);
  const dec = () => {
    if(counter == 0){
      valueLessThanZero = true
    }
    else setCounter(counter - 1);
  }

  let valueLessThanZero = counter <= 0;

  return (
    <>
      <h1>Increment and decrement</h1>
      <h2>Counter = {counter}</h2>
      <br />
      <button onClick={inc}>Add</button>
      <br />
      <br />
      <button onClick={dec}>Subtract</button>
      <br />
      <br />
      {valueLessThanZero ? "You cannot decrement further" : ""}
    </>
  )
}

export default App
