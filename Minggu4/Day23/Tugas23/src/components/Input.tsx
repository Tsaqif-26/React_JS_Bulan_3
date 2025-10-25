import React,{ useRef } from "react";

const FokusInput: React.FC = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const fokus = () => {
        inputRef.current?.focus()
    }

    return(
        <div>
            <h2>useRef akses element</h2>

            <input ref={inputRef} placeholder="Tulis apa aja...." />
            <button onClick={fokus}>fokus ke input</button>
        </div>
    )
}

export default FokusInput