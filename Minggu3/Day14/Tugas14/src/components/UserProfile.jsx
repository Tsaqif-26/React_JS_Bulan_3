import { useUserContext } from "./UserContext";

export default function UserProfile() {
    const {user, login, logout, updateUser} = useUserContext()

    return(
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
            
            {user.isLoggedIn ? (
                <div>
                    <h2>Name: {user.name}</h2>
                    <h3>Email: {user.email}</h3>
                    <button onClick={() => updateUser("Guest", "guest@gmail.com")}>Update</button>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <button onClick={login}>Login</button>
                </div>
            )}
        </div>
    )
}