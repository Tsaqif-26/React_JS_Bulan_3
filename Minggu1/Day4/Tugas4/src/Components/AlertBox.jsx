
function Alert({variant,children,onClick}){
    
    const original = () => {
        const oriButton = {
            border:'none',
            cursor:'pointer',
            display:'flex',
            flexDirection: 'column'
        }
    
    const variants = {
        success: {color: 'green' , backgroundColor: 'black'},
        warning: {color: 'orange' , backgroundColor: 'black'},
        danger: {color: 'red' , backgroundColor: 'black'} 
    }

        return{
            ...oriButton,
            ...variants[variant]
        }
    }

    return(
        <button style={original()} onClick={onClick}>
            {children}
        </button>
    )
}

export default Alert