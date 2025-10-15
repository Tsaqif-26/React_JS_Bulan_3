import { useCart } from "./CartContext";

export default function ProductList() {

    const {addCart} = useCart()

    const products = [
        {id: 1, name: 'Kaos', price: 100000},
        {id: 2, name: 'Celana', price: 60000},
        {id: 3, name: 'Tas', price: 150000}
    ]

    return(
        <div>
            <h2>Product List</h2>

            {products.map((p) => (
                <div key={p.id} style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
          <h4>{p.name}</h4>
          <p>Harga: Rp{p.price}</p>

          <button onClick={() => addCart(p)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}