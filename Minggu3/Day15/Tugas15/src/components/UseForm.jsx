import { useState } from "react";

export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, values} = e.target
        setValues({...values, [name]: values})
    }

    const validate = () => {
        let tempErrors = {} 
        if (!values.name.trim()) tempErrors.name = "Nama Harus Diisi"
        if (!values.email.trim()) tempErrors.email = "Email Harus Diisi"
        else if (!/\S+@\S+\.\S+/.test(values.email)) tempErrors.email = "Email Tidak Valid"
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
         if (validate()) {
      alert(`Data terkirim!\nNama: ${values.name}\nEmail: ${values.email}`);
      resetForm();
    }
  }

  return {values, errors, handleChange, handleSubmit}
}