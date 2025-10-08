import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import Comment from "./components/Comment";

function App(){
    const user = {
      name: 'Kiki',
      avatar: "https://th.bing.com/th/id/OIP.JQSmNUGmNLqQ6-LQCumXmAHaHa?w=207&h=207&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3"
    }
  
  return(
  <div>
    <Greeting name="Budi"/>
  

    <ProductCard 
      name='Kue'
      price={2000}
      stock={20}
      available={true}/>

      <ProductCard/>

      <Card>
        <h1>Halo</h1>
        <img src="https://th.bing.com/th/id/OIP.j_DhMcmOherO66mWxysdBwHaHa?w=207&h=207&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" alt=""  style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
        <button>klik</button>
      </Card>

      <Comment
      author={user}
      text={"Halo semuanya, Ini Comment"}
      date={new Date()}/>

  </div>
)
}

export default App