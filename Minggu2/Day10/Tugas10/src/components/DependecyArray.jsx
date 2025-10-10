import { useEffect, useState } from "react";

export default function UserProfile({userId}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    },[userId] )

    if(loading) return <h3>Loading...</h3>
    if(!user) return <h3>Not Found.</h3>

    return (
        <div >
            <h2>Dependecy Array</h2>
            <h2>Profile User</h2>
            <h3>Nama : {user.name}</h3>
            <h3>Email : {user.email}</h3>

        </div>
    )
}