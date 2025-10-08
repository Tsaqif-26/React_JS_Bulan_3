
export default function LinkPreventer() {

    const handleClick = (event) => {
        event.preventDefault();
        console.log("Link di Klik Tapi Tertahan")
        alert("Link di Klik Tapi Tertahan")
    }

    const handleInputChange = (event) => {
        console.log("Input: ", event.target.value);
    }

    return (
        <div>
            <h2>SyntheticEvent</h2>

            <a href="https://www.youtube.com/" onClick={handleClick}>
                Pencet Aja Kalau bisa
            </a>
            <br />

            <input type="text" onChange={handleInputChange} placeholder="Tulis..."/>
        </div>
    )
}