
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang kamu cari tidak tersedia atau sudah dihapus.</p>

      <Link to="/" className="back-home-btn">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
