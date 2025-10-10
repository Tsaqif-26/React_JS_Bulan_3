import './App.css'
import { useState } from 'react'
import UserProfile from './components/DependecyArray'
import UseEffectHook from './components/UseEffectHook'
import WindowSize from './components/CleanUp'
import MultiEffect from './components/MultiEffect'
import SimulasiFetch from './components/SimulasiFetch'

function App() {

      const [id, setId] = useState(1)

  return (
   <>
      <UseEffectHook/> <br />

      <div style={{
        textAlign: "center",
        marginTop: "60px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>

      <UserProfile userId={id}/>

      <button onClick={() => setId(prevId => prevId + 1)}>
            See more.
      </button>
      </div>

      <WindowSize/>

      <MultiEffect/>

      <SimulasiFetch/>
   </>
  )
}

export default App
