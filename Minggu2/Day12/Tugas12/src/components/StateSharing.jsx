import { useState } from "react";


function InputBox({text, setText}) {
        
        return(
            <div >
                <input type="text" 
                       value={text}
                       placeholder="Tulis Pesan"
                       onChange={(e) => setText(e.target.value)} 
                       style={{
                           padding: "8px",
                        borderRadius: "5px",
                        marginBottom: "10px",
                    }} />
            </div>
        )
    }

    function DisplayBox({text}) {
        return <h2>Pesan: {text || 'Gaada Pesan'}</h2>
    }
    
    export default function StateSharing() {
    
        const [text, setText] = useState("");

        return(
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

            <InputBox text={text} setText={setText}/>
            <DisplayBox text={text}/>
          </div>
        )
}