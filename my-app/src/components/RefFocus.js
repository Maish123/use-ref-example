import React, { useState,useRef } from "react";

// this component is used to focus our attention on the particular DOM element, which is the input field when button is pressed



function RefFocus(){
    const[name,setName] = useState('')
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus()
    }

    function handleChange(e){
        setName(e.target.value)
    }

    return(
        <div>
        <input ref={inputRef} value={name} onChange={handleChange}/>
        <div>My name is {name}</div>
        <button className="button" onClick={focus} >FOCUS</button>
        </div>
    )
}

export default RefFocus;