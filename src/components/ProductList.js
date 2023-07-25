import productsData from '../data/products.json'

const ProductList = ({onItemClick}) => (
  <div>
    <h1>Products</h1>
    <ul>
      {productsData.map(product => (
        <li key={product.id} onClick={() => onItemClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default ProductList
