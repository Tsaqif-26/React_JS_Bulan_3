import { useEffect, useState} from "react"

export default function FetchAbort() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

       fetch('https://jsonplaceholder.typicode.com/users/1', {signal})
            .then((res) => {
                if(!res.ok) throw new Error("Gagal ");
                return res.json()
            })
            .then((data) =>setUser(data))
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log('Fetch dibatalkan');
                } else {
                    setError('Ada error: ' + err.message)
                }
            })
            .finally(() => setLoading(false))

            return () => controller.abort()
        },[])    

        if(loading) return <h2>Loading...</h2>
        if(error) return <h2 style={{color: 'red'}}>{error}</h2>
        if(!user) return <h2>User Gaada</h2>

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

                <h2>Fetch Abort</h2>
                <h3>nama: {user.name}</h3>
                <h3>email: {user.email}</h3>
            </div>
        )
}