import productsData from '../data/products.json'

const ProductDetails = ({productId, onAddToCart}) => {
  const product = productsData.find(item => item.id === productId)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button type="button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails
