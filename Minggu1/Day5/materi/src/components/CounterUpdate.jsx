import { useState } from "react";

function CounterUpdate({counter, setCounter}) {
    

    return (
        <>
      <div style={{display:"flex" , flexDirection:"row" , gap:"10px"}}>
        <button onClick={() => {
          setCounter(prev => prev - 1)
        }}>-</button>

        <input type="text" 
        value={counter} 
        onChange={(event) => {
          setCounter(event.target.value)
          }} />

      <button onClick={() => {
        setCounter(prev => prev+ 1)
        }}>+</button>

      </div>
      </>
)}

export default CounterUpdate