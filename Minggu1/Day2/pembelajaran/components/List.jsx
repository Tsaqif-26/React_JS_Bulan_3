
function List(){
    const product = [
        {id: 1 , Menu: 'Seblak', price:10000 },
        {id: 2 , Menu: 'Burger', price:15000 },
        {id: 3 , Menu: 'Kebab', price:20000 }
    ]

    return(
        <div>
            <h1>Menu Makanan</h1>
            <ul>
                {product.map((product) => (
                    <li key={product.id}>
                        {product.Menu} = Rp.{product.price}
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default List;