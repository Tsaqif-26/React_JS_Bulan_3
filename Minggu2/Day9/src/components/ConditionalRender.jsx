
export default function ConditionalRender() {

    const isLoggedIn = false;
    const newMessages = 7;

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
           <h2>Conditional Rendering </h2>

           <h3>{isLoggedIn ? "Haloo" : "Silahkan Login"}</h3>

           {newMessages > 0 && (
            <h3>Baca {newMessages} Pesan Ini!</h3>
           )}
        </div>
    )
}