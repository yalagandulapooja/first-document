import React, { useState } from 'react'

const UserData = () => {
    let [name,setName] = useState("Elearn");
    let [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        <h1>{name}</h1>
    <button onClick={()=>setName("Pooja.")}>click here</button>
    </div>
  )
}

export default UserData