import styles from './Button.module.css'

function Button({type,children}){
    const buttonType = `${styles.button} ${type === "primary" ? styles.primary : ""}`

    return(
        <button className={buttonType}>
            {children}
        </button>
    )
}

export default Button