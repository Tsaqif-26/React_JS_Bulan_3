import { useEffect, useState } from "react";

export default function WindowSize() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {

       const handleResize = () => {
         setWidth(window.innerWidth)
        setHeight(window.innerHeight)
       }
        window.addEventListener('resize', handleResize)

        return () => {window.removeEventListener('resize', handleResize)}


    },[])

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
            
            <h2>CleanUp Function</h2>
            <h3>lebar: {width}</h3>
            <h3>tinggi: {height}</h3>
        </div>
    )
}