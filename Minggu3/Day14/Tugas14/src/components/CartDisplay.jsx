import { useCart } from "./CartContext"

export default function CartDisplay() {
  
    const {cart, removeCart, clearCart, total} = useCart()

    return (
        <div>
        <h2>Keranjang</h2>

        {cart.length === 0 ? (
            <p>Keranjang Kosong</p>
        ) : (
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - Rp.{item.price}{""}
                        <button onClick={() => removeCart(item.id)}>Hapus</button>
                    </li>
                ))}
            </ul>
        )}
        <h3>Total: Rp.{total}</h3>
        <button onClick={clearCart}>Kosongkan Keranjang</button>
    </div>)
}