import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Head from './components/Head'
import {Footer} from './components/Head'
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from "./Home.jsx";
import  About  from './About.jsx';
import  Contact  from './Contact.jsx';


function App() { 
        // const [count, setCount] = useState(0)

  return (
     <>
     <BrowserRouter>
     
        <Nav/>
        <Head/>
     <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       {/* <h1>Form</h1>
        <form onSubmit={onsubmit}>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <textarea placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <br/>
            <button type='submit'></button>
        </form>
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
      </div>  */}
    </>
    );
}

export default App
