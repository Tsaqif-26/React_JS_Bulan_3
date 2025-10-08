import ProfileCard from "../components/ProfileCard.jsx"
import Sapa from "../components/Sapa.jsx"
import Login from "../components/Login.jsx"
import List from "../components/List.jsx"

function App(){
  return (
    <div>
    <ProfileCard 
    name = "Asep"
    bio = ""
    skills = {["HTML","CSS","JS"]}/>

    <Sapa/>

    <Login/>

    <List/>
    
    </div>
  )
}


export default App

