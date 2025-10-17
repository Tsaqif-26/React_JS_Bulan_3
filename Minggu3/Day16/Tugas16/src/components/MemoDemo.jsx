import React, { useState, memo } from 'react';

const ChildComponent = memo( function ChildComponent({value}) {
    console.log("ChildComponent di-render ulang");

    return (
        <div>
            <h3>Nilai dari parent {value}</h3>

        </div>
    )
})

export default function MemoDemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    console.log("MemoDemo di-render ulang")

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

            <h2>Implementasi React.memo</h2>
      <button onClick={() => setCount(c => c + 1)}>Tambah Count</button>
      <input
        style={{ marginLeft: "10px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik sesuatu..."
      />
      <ChildComponent value={count} />
        </div>
    )
}