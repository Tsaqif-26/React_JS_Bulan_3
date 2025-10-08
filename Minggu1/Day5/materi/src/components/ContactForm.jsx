
function ContactForm({formData,setFormData}) {

    const handleChange = (e) => {
        const {name,value} = e.target;
    setFormData(prevFormdata => ({
        ...prevFormdata,
        [name]: value
    }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${formData.firstName} , Sudah di submit`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Kontak</h1>

        <div>
            <label>Nama depan: </label>
            <input type="text" 
                   name="firstName" 
                   value={formData.firstName} 
                   onChange={handleChange}/>
        </div>

        <div>
            <label>Nama belakang: </label>
            <input type="text" 
                   name="lastName"
                   value={formData.lastName}
                   onChange={handleChange}/>
        </div>

        <div>
            <label>Email: </label>
            <input type="email" 
                   name="email" 
                   value={formData.email}
                   onChange={handleChange}/>
        </div>

        <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm
