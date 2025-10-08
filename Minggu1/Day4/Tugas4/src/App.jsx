import ProfileBox from "./Components/ProfileBox";
import './Components/ClassName.css';
import Button from "./Components/ButtonModel";
import Alert from "./Components/AlertBox";
import Box from "./Components/MediaBox";

function App(){
    return(
        <div>
            <ProfileBox />

            <h1 className="border">
                 Ini Css Menggunakan ClassName
              <p className="par">
                  Ini juga
              </p>
            </h1>

              <h2>Ini Pakai Css Modules</h2>
            <Button type={"primary"} >
                Primary Button
            </Button>

            <Button>
              Default Button
            </Button> 

            <Alert variant={"success"} onClick={() => alert("Success Alert")}>Success Button</Alert>
            <Alert variant={"warning"} onClick={() => alert("Warning Alert")}>Warning Button</Alert>
            <Alert variant={"danger"} onClick={() => alert("Danger Alert")}>Danger Button</Alert>
        
        <Box/>
        </div>
    )
}

export default App