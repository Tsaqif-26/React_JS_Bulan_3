import { useState } from "react";

export default function SwitchStatements() {

    const [status, setStatus] = useState("loading")

    let content;
    let color;

    switch (status) {
        case "loading":
        content = <p>Memuat Data...</p>
        color = "aqua"
        break;

        case "success":
        content = <p>Data Berhasil Dimuat</p>
        color = "green"
        break;

        case "error":
        content = <p>Terjadi Kesalahan!</p>
        color = "red"
        break;

        default :
        content = <p>Status Tidak Diketahui</p>
        color = "gray"
        break;        
    }

    return (
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

            <h2>Switch Statements</h2>

        <div style={{backgroundColor:color}}>{content}</div>

        <div>
            <button onClick={() => {setStatus("loading")}}>Loading</button>
            <button onClick={() => {setStatus("success")}}>Error</button>
            <button onClick={() => {setStatus("error")}}>Success</button>
            <button onClick={() => {setStatus("unknown")}}>Unknown</button>
        </div>

        </div>
    )
}