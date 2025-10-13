import Child from "./Child";

export default function Parent({name}) {

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
            
            <h2>Menerima data dari App</h2>
            <h2>nama: {name}</h2>
            <Child name={name}/>
        </div>
    )
}