import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="product-detail">

      <h2>Detail Produk</h2>
      
      <div className="detail-box">
        <h3>Produk #{productId}</h3>
        <p>
          Ini adalah detail untuk produk dengan ID: <strong>{productId}</strong>.
        </p>
        <Link to="/products" className="back-link">← Kembali ke Daftar Produk</Link>
      </div>
    </div>
  );
}
