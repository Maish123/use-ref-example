import './App.css';
import React,{ useState,useRef, useEffect } from 'react';
import RefFocus from './components/RefFocus';
import PreviousValue from './components/PreviousValue';

//useRef hook when we want to see how many times our screen renders
//it persists trough multiple renders of our component
// ref does not cause component to re update when a certain state changes
//when it updates the current property persists through the multiple renders
//you can store previous values but it won't cause items to re-render
// to store previous value of state

function App() {
  const [name,setName] = useState(' ')
  const renderCount = useRef(0) // returns an object {current: 0}

  function handleChange(e){
    setName(e.target.value)
  }

  useEffect(()=>{
    renderCount.current = renderCount.current + 1 // here we are updating the value by one
  })
  return (
    <div className="App">
      <input value={name} onChange={handleChange}/>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <br/>
      <RefFocus/>
      <br/>
      <PreviousValue/>
    </div>
  );
}

export default App;

