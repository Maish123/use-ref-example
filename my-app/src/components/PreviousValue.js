import React, { useEffect,useState,useRef } from "react";

function PreviousValue(){ // to persist previous values of state by persisting the previous value in each re render
    const [name, setName]= useState('')
    const previousName=useRef('')

    // this component shows the persistent nature of the values passed by the ueRef() hook

    useEffect(()=>{
        previousName.current = name;
    },[name]);

    function handleChange(e){
        setName(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleChange}/>
            <div>My name is {name} and my previous name is {previousName.current}</div>
        </div>
    )


}

export default PreviousValue;