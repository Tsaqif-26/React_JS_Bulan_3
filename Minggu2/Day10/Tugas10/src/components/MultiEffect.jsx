import { useEffect, useState } from "react";

export default function MultiEffect() {
    
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Page: ${count}`
    }, [count])

    useEffect(() => {
        console.log(`Name: ${name}`);
    }, [name])

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

            <h2>Multiple Effect</h2>
            
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Tambah</button>
            <br />
            
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
            <h3>Name: {name}</h3>

        </div>
    )
}