import { useMemo, useState } from "react";

export default function UseMemoDemo() {

    const [count, setCount ] = useState(0)
    const [text, setText] = useState("")

    console.log("Render Ulang...")

    const expensiveComputation = (num) => {
        console.log("Melakukan komputasi mahal...")
        let result = 0
        for (let i = 0; i < 100000; i++){
            result += i % 25   }
           
            return result += num    
        }
        
        const calculatedValue = useMemo(() => expensiveComputation(count),[count])

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

            <h2>Optimisasi useMemo</h2>

            <p>Hasil Perhitungan: {calculatedValue}</p>
         <button onClick={() => setCount((c) => c + 1)}>Tambahkan</button>
          <p>Count saat ini: {count}</p>
      <hr />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik teks "
      />

            </div>
        )
    }
    
