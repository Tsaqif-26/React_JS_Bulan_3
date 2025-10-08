import React, { useState }from "react";

export default function Validationform() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError("Email Tidak Sesuai")
            return false
        } else {
            setEmailError('')
            return true
        }
    }

    const validatePassword = (password) => {
        if (password.length < 8) {
            setPasswordError("Password Kurang Panjang")
            return false
        } else {
            setPasswordError('')
            return true
        }
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        validateEmail(newEmail)
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        validatePassword(newPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
  

    const emailValid = validateEmail(email)
    const passwordValid = validatePassword(password)

    if (emailValid && passwordValid) {
        alert("Pendaftaran Berhasil")
        console.log({email,password});
    } else {
        alert("Pendaftaran Gagal")
    }
  }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Validation</h2>
            <div>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleEmailChange}/>
                </label>
                {emailError && <p style={{color: 'red'}}>{emailError}</p>}
            </div>

            <div>
                <label>Password: 
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                {passwordError && <p style={{color:'red'}}>{passwordError}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}