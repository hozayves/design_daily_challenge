import { useState } from 'react'
import './App.css'
import productImage from './assets/product.png'

function App() {

  return (
    <section className='max-w-[55.4375rem] min-w-fit min-h-fit rounded-[0.9375rem] bg-white shadow-cardShadow flex-shrink flex flex-col gap-6'>
      <div className='min-h-1/4 p-6'>
        <img className='w-full h-1/4' src={ productImage } alt="" />
      </div>
      <div className='px-6 flex flex-col items-start justify-center gap-3 pb-6'>
        <div className=' w-full flex justify-between items-center'>
          <span className='px-[0.5rem] py-[0.25rem] inline-flex items-start gap-[0.625rem] rounded-[1.25rem] bg-blue text-white leading-normal font-semibold text-sm font-Poppins not-italic'>Free shipping</span>
          <ion-icon size="large" name="heart-outline"></ion-icon>
        </div>
        <h1 className='text-blue font-Poppins text-2xl not-italic font-semibold leading-normal'>Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
        <div className='flex flex-col w-full h-32 relative'>
          <span className='text-blue font-Roboto text-lg not-italic leading-normal line-through absolute top-0'>1.599,-</span>
          <span className='text-blue font-Poppins text-5xl not-italic font-bold leading-normal absolute top-3'>799,-</span>
          <p className='text-blue font-Poppins text-sm not-italic font-normal leading-normal opacity-60 bottom-0 absolute'>The offer is valid until April 3 or as long as stock lasts!</p>
        </div>
        <div className='flex gap-2 mt-5 justify-center items-center'>
          <div className='w-4 h-4 bg-[#00D98B] rounded-full'>.</div>
          <span className='text-[#000] font-Poppins text-sm not-italic font-medium leading-normal'>50+pcs.in stock.</span>
        </div>
        <button className='flex p-4 justify-center items-center gap-[0.625rem] self-stretch rounded-lg bg-[#4788E9] shadow-buttonShadow text-white font-Poppins font-medium text-lg'>Add to cart</button>
      </div>
    </section>
  )
}

export default App
