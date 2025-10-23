import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useFetch } from "./hooks/UseFetch";
import { Product } from "./ProductList";

export default function ProductDetail() {
  const params = useParams<{ id?: string }>();
  const id = params.id;
  const navigate = useNavigate();


  const { data, loading, error } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!data) return <p>Product not found.</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{data.title}</h2>
      
      <p>{data.description}</p>
      
      <p><strong>Price:</strong> ${data.price}</p>
    </div>
  );
}
