import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import SimpleForm from "./components/SimpleForm";
import NotFound from "./components/pages/NotFound";
import UserCard from "./components/UseCard";

export default function App() {
  return (
    <div className="app-container">
      <div className="app-inner">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/form">Form</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/profile" element={<UserCardFromContext />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </div>
    </div>
  );
}

import { useUser } from "./components/context/UserContext";
function UserCardFromContext() {
  const { user } = useUser();
  if (!user) return <p>Tidak ada user yang login.</p>;
  return <UserCard name={user.name} age={user.age} email={user.email} />

}
