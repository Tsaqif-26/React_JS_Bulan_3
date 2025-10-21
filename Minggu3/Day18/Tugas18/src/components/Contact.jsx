import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Pesan terkirim!")
        navigate('/')
    }

    return (
       <div className="contact-container">
      <h2>Halaman Kontak</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama Anda" required />
        <br />
        <textarea placeholder="Pesan Anda..." required></textarea>
        <br />
        <button type="submit">Kirim Pesan</button>
      </form>
    </div>
    )
}