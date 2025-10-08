import { useRef } from "react"

export default function UncontrolledComponent() {

    const nameInputRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Uncontrolled Component " + nameInputRef.current.value)
        nameInputRef.current.value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Uncontrolled Component</h2>
                <label>
                    username:
                    <input type="text" ref={nameInputRef} placeholder="Uncontrolled Component" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}