import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const product = [
    { id: 1, nama: "PlayStation 5" },
    { id: 2, nama: "Xbox Series X" },
    { id: 3, nama: "Nintendo Switch" },
    { id: 4, nama: "Steam Deck" }
  ];

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('search') || ''

    const [searchTerm, setSearchTerm] = useState(query)

    const filteredProducts = product.filter((item) => 
      item.nama.toLowerCase().includes(query.toLowerCase())
    )

    const handleSearch = (e) => {
      const value = e.target.value
      setSearchTerm(value)
      setSearchParams(value ? {search: value} : {})
    }

  return (
    <div className="products-container">

      <h2>Daftar Produk</h2>

      <input type="text"
             placeholder="Cari barang..."
             value={searchTerm}
             onChange={handleSearch}
             className="search-box"/>

      <div className="products-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <h3>{item.nama}</h3>
                <p>
                  ID Produk: <strong>{item.id}</strong>
                </p>

                <Link to={`/products/${item.id}`} className="detail-link">
                  Lihat Detail
                </Link>
              </div>
            ))
          ) : (
            <p className="no-result">Produk Tidak Ada</p>
          )}
      </div>
    </div>
  );
}
