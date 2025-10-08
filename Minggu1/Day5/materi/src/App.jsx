import { useState } from "react";
import Counter from "./components/Counter"
import UserProfile from "./components/UserProfile"
import ContactForm from "./components/ContactForm"
import ToDoList from "./components/ToDoList"
import CounterUpdate from "./components/CounterUpdate"

export default function App() {

  // const [counter, setCounter] = useState(0);

  // const [formData,setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: ""
  // })

  // const [todos,setTodos] = useState([
  //   {id: 1, text: "Ini Text 1" ,completed: false},
  //   {id: 2, text: "Ini Text 2" , completed: false}
  // ])

  const [counter, setCounter] = useState(0);


  return (
    <>
    <main style={{display:"flex" ,flexDirection:"column" , gap:"10px" , alignItems:"center" , justifyContent:"center" }}>
        {/* <div>
          <h1>Counter Sederhana</h1>
          <p>Hasil Count: {counter}</p>
        <Counter counter = {counter} setCounter = {setCounter}/>
        </div> */}

        {/* <UserProfile/> */}

        {/* <ContactForm formData={formData} setFormData={setFormData}/>
          <div style={{ border: "1px solid black", padding: "12px", borderRadius: "8px", width: "320px" }}>
            <h2>Data</h2>
            <h2>Nama Depan: {formData.firstName}</h2>
            <h2>Nama Belakang: {formData.lastName}</h2>
            <h2>Email: {formData.email}</h2>
          </div> */}

        {/* <div>
          <ToDoList todos={todos} setTodos={setTodos}/>
        </div> */}

          <div>
         <h1>Counter Functional Update</h1>
      <p>Hasil Count: {counter}</p>
      <CounterUpdate counter={counter} setCounter={setCounter} />
      </div>

      </main>
    </>
  )
}