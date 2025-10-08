import { useState } from "react";

export default function Nameform() {

    const [name, setname] = useState('')

    const handleChange = (event) => {
        setname(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Halooo " + name)
        setname('')
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Controlled Component</h2>
        <label>
            username:
            <input type="text" value={name} onChange={handleChange} />
        </label>
            <p>Selamat Datang {name}</p>

            <button type="submit">Submit</button>
        </form>

        </div>
    )
}