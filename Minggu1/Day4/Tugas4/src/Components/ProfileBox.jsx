
function ProfileBox(){

    const boxStyle = {
        backgroundColor: 'green',
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
    }
    const paraStyle = {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
    }
    return(
        <div style={boxStyle}> 
            <p style={paraStyle}>
                Halooo, Ini Inline Style
            </p>
        </div>
    )
}

export default ProfileBox;