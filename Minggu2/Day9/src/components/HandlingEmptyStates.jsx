
export default function ProductListEmpty({product}) {

    return (
        <div style={{
        textAlign: "center",
        marginTop: "60px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>
            <h2>Handling Empty States</h2>

            {product.length > 0 ? (
        <ul>
            {product.map((product) => (
                <li key={product.id}>{product.name}: ${product.price}</li>
            ))}
            
        </ul> ) : (

                <p>Produk Kosong!</p>
            )
    }
        </div>
    )
}