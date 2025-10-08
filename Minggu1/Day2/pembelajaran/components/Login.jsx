
function log(){
    const login = true
    return(
        <div>
            {login ? (
                <h1>Selamat datang!</h1>
            ) : (
                <h1>Silahkan login</h1>
            )}
        </div>
    )
}

export default log