import { useState } from "react"
import { toCelsius, toFahrenheit, tryConvert } from "./Convertion"
import TemperatureInput from "./LiftingStateUp"

 export default function Calculator() {

    const [temp, setTemp] = useState('')
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (t) => {
        setTemp(t)
        setScale('c')
    }

    const handleFahrenheitChange = (t) => {
        setTemp(t)
        setScale('f')
    }

    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp

    
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
            
            <h2>Lifting State Up</h2>

            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />

            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>

            <h3>Suhu Celsius {celsius}</h3>

            <h3>Suhu Fahrenheit {fahrenheit}</h3>

        </div>

    )

 }