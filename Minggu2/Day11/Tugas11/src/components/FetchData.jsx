import { useEffect, useState } from "react";

export default function FetchData() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(" https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(i => setData(i))
            .catch(error => console.log('error:', error))
    },[])

    if (!data) return <h2>Loading...</h2>

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
            <h2>Fetch Data</h2>
            <h2>{data.title}</h2>
            <h3>{data.body}</h3>
        </div>
    )
}