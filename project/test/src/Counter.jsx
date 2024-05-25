import React, { useContext } from 'react'
import "./App.css"
import CounterContext from './CounterContext'
const Counter = () => {
    const {counter,handleDecrementClick,handleIncreamentClick}=useContext(CounterContext);
  return (
    <div><h1>{`Counter:-->${counter}`}</h1>
        <button className='btn' onClick={handleIncreamentClick}>Click to Incement</button>
        <button className='btn1' onClick={handleDecrementClick}>Click to Decrement</button>
        </div>
  )
}

export default Counter