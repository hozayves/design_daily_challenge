import { useState } from 'react'
import './App.css'
import productImage from './assets/product.png'

function App() {

  return (
    <section className='max-w-[55.4375rem] min-w-fit rounded-[0.9375rem] bg-white shadow-cardShadow'>
      <div>
        <img src={ productImage } alt="" />
      </div>
      <div>
        <span>Free shipping</span>
        <h1>Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
        <div>
          <span>1.599,-</span>
          <span>799,-</span>
          <p>The offer is valid until April 3 or as long as stock lasts!</p>
        </div>
        <button>Add to cart</button>
        <div>
          <div>.</div>
          <label>50+pcs.in stock.</label>
        </div>
        <div>
          <button>
          <ion-icon name="cart-outline"></ion-icon>
            <span>Add to cart</span>
          </button>
          <button>
          <ion-icon name="heart-outline"></ion-icon>
            <span>Add to wishlist</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
