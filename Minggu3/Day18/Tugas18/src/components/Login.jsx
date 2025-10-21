import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (username.trim() !== "") {
            localStorage.setItem('isLoggedIn', 'true')
            navigate('/dashboard')
        } else {
            alert("Isi username terlebih dahulu!")
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text"
                       placeholder="Username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}/>

                <button type="submit">Masuk</button>
            </form>
        </div>
    )
}