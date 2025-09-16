import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (<>
  <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="App">
      <h2>counter:{count}</h2>
      <button onClick={() => setCount(count+1)}>increment</button>
       <button onClick={() => setCount(count-1)}>decrement</button>
       <button onClick={() => setCount(0)}>reset</button>
       <p>Hi this is pratheek with age 20</p>
      </div>
      </>)
}

export default App
