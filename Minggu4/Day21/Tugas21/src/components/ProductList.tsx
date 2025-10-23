import { useFetch } from "./hooks/UseFetch";
import { Link } from "react-router-dom";

export interface Product {
  id: number
  title: string
  price: number
  description?: string
  image?: string
}

function isProductArray(value: unknown): value is Product[] {
  return Array.isArray(value) && value.every(item => typeof (item as any).id === "number" && typeof (item as any).title === "string");
}

export default function ProductList() {
  const { data, loading, error } = useFetch<Product[]>("https://fakestoreapi.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  if (!data || !isProductArray(data)) return <p>Tidak Valid.</p>;

  return (
    <div>
      <h2>Daftar Produk</h2>

      <ul >
        {data.slice(0, 8).map((p) => (
          <li key={p.id}>

            <div >
            
              <div>
                <strong>{p.title}</strong>
            
                <div >${p.price}</div>
            
                <div>
                  <Link to={`/products/${p.id}`}>Lihat detail</Link>
                </div>
            
              </div>
            
            </div>
          </li>
        ))}
      
      </ul>
    </div>
  );
}
