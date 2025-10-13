import './App.css'
import ThemeApp from './components/ComplexState'
import Parent from './components/PropDrilling/parents'
import StateSharing from './components/StateSharing'
import Calculator from './components/Temperature/Calculator'
import CounterWithReducer from './components/UseHookReduce'


function App() {

  const userName = "qyo"

  return (
    <>
      
       <Calculator/> <br />

       <Parent name={userName}/> <br />

       <StateSharing/> <br />

       <CounterWithReducer/> <br />

       <ThemeApp/>
    </>
  )
}

export default App
