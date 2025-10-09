
export default function ProductList() {

    const products = [
        {id: 1, name:"Hot Wheels", price: 5},
        {id: 2, name:"Nerf" , price: 12},
        {id: 3, name:"Action Figure", price: 25}
    ]

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
            <h2>Rendering List</h2>

        <ul>
            {products.map((products) => (
                <li key={products.id}>{products.name}: ${products.price}</li>
            ))}
        </ul>

        </div>
    )
}