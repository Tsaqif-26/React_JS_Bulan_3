import { useEffect, useState} from "react"

export default function ManipulasiJson() {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if(!res.ok) throw new Error("Gagal mengambil data")
                return res.json()
        })

        .then((data) => {
            const limitUser = data.slice(0,5)
            setUser(limitUser)
        })

        .catch((err) => {
            setError('Ada error: ' + err.message)
        })

        .finally(() => {
            setLoading(false)
        })
    },[])

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2 style={{color: 'red'}}>{error}</h2>

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
            
            <h2>Manipulasi JSON</h2>

            {user.map((user) => (
                <div>
                <h3>nama: {user.name}</h3>
                <h3>email: {user.email}</h3>
                </div>
            ))}
        </div>
    )
}