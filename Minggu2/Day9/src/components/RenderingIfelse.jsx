
function UserGreeting() {
    return <h2>Welcome Back, User</h2>
}

function GuestGreeting() {
    return <h2>Hai, Tamu</h2>
}

export default function Greeting(props) {
    const login = props.login
    if (login) {
        return (<UserGreeting/>)
    } else {
        return (<GuestGreeting/>)
    }

}

     