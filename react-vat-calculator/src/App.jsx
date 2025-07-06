import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')

  const numericPrice = parseFloat(price) || 0
  const numericDiscount = parseFloat(discount) || 0

  const grossPrice = numericPrice - numericPrice * numericDiscount * 0.01
  const vat = numericDiscount > 0 ? grossPrice * 0.07 : 0

  return (
    <div className="app">
      <h1>VAT Calculator</h1>

      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label>Discount: </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      <div>
        <p>Gross Price = {grossPrice.toFixed(2)}</p>
        <p>VAT = {vat.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default App
