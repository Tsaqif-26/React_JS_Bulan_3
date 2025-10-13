
export default function TemperatureInput({temperature, onTemperatureChange, scale}) {

    const scaleNames = {
        c: 'celsius',
        f: 'fahrenhait'
    } 
    return (
        <fieldset>
            <legend>Isi Suhu {scaleNames[scale]}</legend>

            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
        </fieldset>
    )
}