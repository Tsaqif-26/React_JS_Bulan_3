import Greeting from "./components/RenderingIfelse";
import ConditionalRender from "./components/ConditionalRender";
import SwitchStatements from "./components/SwitchStatements";
import ProductList from "./components/RenderingList";
import ProductListEmpty from "./components/HandlingEmptyStates";

export default function App() {

       const product = [
        {id: 1, name:"Kebab", price: 5},
        {id: 2, name:"Burger" , price: 8},
        {id: 3, name:"Pizza", price: 15}
      ]

      const emptyProduct = []
    return (

         <div style={{ textAlign: "center", marginTop: "50px" }}>
          
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

          <h2>Conditional Rendering dengan if/else</h2>
      <Greeting login={true} />
      <Greeting login={false} />

      </div>  <br/>

      <ConditionalRender/> <br />

      <SwitchStatements/> <br />

      <ProductList/> <br />

      <ProductListEmpty product={product}/>
      <ProductListEmpty product={emptyProduct}/>



    </div>
       ) 
}