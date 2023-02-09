import React, { useState } from 'react'
import './index.css';
function List() {
    const getItems=()=>{
        console.log("%c getItems called" , "color:blue")
return Array(50).fill()
    }

//initializer
    const[items,setItems]=useState(()=>getItems())
  return (
    <div className = 'card'>
<ul>
{items.map((item,index)=><li>{index+1}</li>)}

</ul>
<button style={{width:"40px"}} onClick = {()=>setItems([...items,0])}>ADD </button>

    </div>
  )
}

export default List