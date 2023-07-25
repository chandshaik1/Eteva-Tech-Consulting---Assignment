import {useState} from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [cart, setCart] = useState([])

  const handleItemClick = productId => {
    setSelectedProductId(productId)
  }

  const handleAddToCart = product => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      {selectedProductId ? (
        <ProductDetails
          productId={selectedProductId}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <ProductList onItemClick={handleItemClick} />
      )}

      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
