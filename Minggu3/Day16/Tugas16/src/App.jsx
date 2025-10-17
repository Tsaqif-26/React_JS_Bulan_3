import './App.css'
import { useState } from 'react'
import HeavyList from './components/HeavyList'
import MemoDemo from './components/MemoDemo'
import UseCallbackDemo from './components/UseCallbackDemo'
import UseMemoDemo from './components/UseMemoDemo'
import { UsePageLazyLoad } from './components/UsePageLazyLoad'

function App() {

  const {setPage, PageComponent} = UsePageLazyLoad()

  const [count, setCount] = useState(100)
  const [text, setText] = useState("")
  console.log("Web Di-render Ulang");
  
  return (
   <>
      <MemoDemo/> <br />

      <UseMemoDemo/> <br />

      <UseCallbackDemo/>

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
        <h2>Code Splitting dan Lazy Loading</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
        {PageComponent}
      </div>

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

        <h1>Performance Profiling Demo</h1>

        <div>
          <button onClick={() => setCount((c) => c + 100)}>Tambah Item</button>
          <button onClick={() => setCount(100)}>Reset</button>

        </div>
        <input type="text" placeholder='Ketik...' value={text} onChange={(e) => setText(e.target.value)} />

        <HeavyList count={count}/>
      </div>
   </>
  )
}

export default App
