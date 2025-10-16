import { useState } from "react";

export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    const toggle = () => setValue(prev => !prev)
    
    return [value, toggle]
} 

export default function ToggleFunction() {
    const [isVisible, toggleVisible] = useToggle(false)
    const [isActive, toggleActive] = useToggle(true)

    return(
        <div  style={{
        textAlign: "center",
        marginTop: "60px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>
            
            <h2>Custom Hook</h2>

            <button onClick={toggleVisible}>
                {isVisible ? "Sembunyikan Teks" : "Tampilkan Teks"}
            </button>
            {isVisible && <h3>Halo Semuanya</h3>} <hr />

            <h3>Status: {isActive ? "Aktif" : "Tidak Aktif"}</h3>
            <button onClick={toggleActive}>
                {isActive ? "Aktif" : "Gak Aktif"}
            </button>
        </div>
    )
}