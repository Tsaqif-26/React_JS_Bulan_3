import { useCallback, useState } from "react"

const ChildButton = (({onClick}) => {
    console.log("ChildButton di-render ulang")

    return <button onClick={onClick}>Tambah(Child)</button>
})

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    console.log("Induk Di-render ulang");
    
    // Dengan useCallback
    // const handleIncrement = useCallback(() => {
    //     setCount((c) => c + 1)
    // },[])

    // Tanpa useCallback
     const handleIncrement = () => setCount((c) => c + 1)

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

            <h2>Optimisasi dengan useCallback</h2>

            <p>Count: {count}</p>

            <ChildButton onClick={handleIncrement}/> <hr />

            <input type="text" value={text} placeholder="Tulis..." onChange={(e) => setText(e.target.value)} />
        </div>
    )
} 