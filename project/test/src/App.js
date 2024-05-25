import { useState } from 'react';
import './App.css';
import "./Counter"
import Counter from './Counter';
import CounterContext from './CounterContext';
function App() {
  const [counter,setCounter]=useState(0)
  const handleDecrementClick=()=>{
    if(counter<=0){
      setCounter(0);
    }else{
      setCounter((prev)=>(prev-1))
    }
   
  }
  const handleIncreamentClick=()=>{
      setCounter((prev)=>(prev+1))   
  }

  return (
    <>
    <CounterContext.Provider value={{counter,handleIncreamentClick,handleDecrementClick}}>
    <Counter/>
    </CounterContext.Provider>
    </>
  );
}

export default App;
