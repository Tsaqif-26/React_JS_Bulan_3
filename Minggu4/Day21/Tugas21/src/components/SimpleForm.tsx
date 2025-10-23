import React, { useState } from "react";
import { useUser, User } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SimpleForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();


  type FormState = { name: string; email: string; age: number | "" };

  const [form, setForm] = useState<FormState>({ name: "", email: "", age: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name.trim()) return setError("Nama harus diisi");
    if (!form.email.includes("@")) return setError("Email tidak valid");
    if (form.age === "" || form.age <= 0) return setError("Umur harus > 0");

    setError(null);
    const user: User = { name: form.name.trim(), email: form.email.trim(), age: form.age as number };
    setUser(user);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Form (type-safe)</h2>

      <div >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      </div>

      <div>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      </div>

      <div >
        <input name="age" type="number" value={form.age === "" ? "" : form.age} onChange={handleChange} placeholder="Age" />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button type="submit">Simpan</button>
    </form>
  );
}
