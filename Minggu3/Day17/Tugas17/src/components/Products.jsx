import { Link } from "react-router-dom";

export default function Products() {
  const product = [
    { id: 1, nama: "PlayStation 5" },
    { id: 2, nama: "Xbox Series X" },
    { id: 3, nama: "Nintendo Switch" },
    { id: 4, nama: "Steam Deck" }
  ];

  return (
    <div className="products-container">

      <h2>Daftar Produk</h2>

      <div className="products-grid">

        {product.map((item) => (
          <div className="product-card" key={item.id}>
            <h3>{item.nama}</h3>
            <p>ID Produk: <strong>{item.id}</strong></p>
            <Link to={`/products/${item.id}`} className="detail-link">
              Lihat Detail
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
