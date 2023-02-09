import React, { useState } from 'react'
import './App.css';




function Counter() {
    const [count, setCount] = useState(0)
const [text,setText] = useState({count})
    const handleCount = (prevCount)=>{
        setCount((prevCount)=>prevCount + 1)
        setCount((prevCount)=>prevCount + 1)
        //setCount(count+1)
        }
   
   

  return (
    <div className ="new">
<button  onClick={handleCount}>counter:{count}</button>
<button  > {count} </button>


    </div>


  )
}

export default Counter