import { useEffect, useState} from "react"
import axios from "axios"


export default function FetchAxios() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Soal 3
    const [error, setError] = useState(null)



    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await axios.get ('https://jsonplaceholder.typicode.com/users/1')
                setUser(response.data)
            } catch (error) {
                setError("Ada yang error.") // Soal 3
                console.log('error: ', error);
            }finally {
                setLoading(false)
            }
        }

        fetchdata()
    },[])

    if(loading) return <h2>Loading...</h2>
    if(!user) return <h2>User Gaada</h2>
    // Soal 3
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

            <h2>Fetch Axios</h2>
            <h3>nama: {user.name}</h3>
            <h3>email: {user.email}</h3>
            <h3>Telepon: {user.phone}</h3>
        </div>
    )
}