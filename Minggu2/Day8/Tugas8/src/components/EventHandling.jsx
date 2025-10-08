
export default function ButtonClicker() {

    const handleClick = () => {
        alert("Udah Di Klik")
    };

    const handleMouseEnter = () => {
        console.log('Ini Masuk');
    };

    const handleMouseLeave = () => {
        console.log('Ini Keluar');
    };

    return (
        <div style={{
             height: "100vh",             
            display: "flex",               
            flexDirection: "column",       
            justifyContent: "center",      
            alignItems: "center",
        }}>
              <h2>Ini Event Handling</h2>

              <button onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>
                Klik!
              </button>
        </div>
    );
}