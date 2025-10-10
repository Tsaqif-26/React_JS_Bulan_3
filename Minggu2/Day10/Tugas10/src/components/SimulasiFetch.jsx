import { useEffect, useState } from "react";

export default function SimulasiFetch() {

    const [data, setData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setData({name: 'qyo' , email: 'qyo@gmail.com'})
        
        },2000)
    },[])

    if(!data) return <h3>Loading...</h3>

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
            <h2>Data</h2>
            <h3>Nama: {data.name}</h3>
            <h3>Email: {data.email}</h3>
        </div>
    )
}