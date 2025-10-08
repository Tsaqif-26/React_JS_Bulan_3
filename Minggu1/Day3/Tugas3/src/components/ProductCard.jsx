
function ProductCard({name,price,stock,available}){
    return(
        <div style={{border:'1px solid black',padding:'10px',margin:'10px'}}>
        <h1>Nama product: {name}</h1>
        <p>Harga: Rp.{price}</p>
        <p>Stok: {stock}</p>
        <p style={{color: available ? 'green' : 'red'}}>
            {available ? 'Tersedia' : 'Tidak Tersedia'}
        </p></div>
  )
}

ProductCard.defaultProps = {
    name: "",
    price: 0,
    stock: 0,
    available: false
}

export default ProductCard