import React, { useEffect } from 'react'
import './App.css';
import p1 from './assets/People-1.png'
import p2 from './assets/People-2.png'
import p3 from './assets/People-3.png'
import p4 from './assets/People-4.png'
import n1 from './assets/Nature-1.png'
import n2 from './assets/Nature-2.png'
import n3 from './assets/Nature-3.png'
import n4 from './assets/Nature-4.png'
import hist1 from './assets/History-1.png'
import hist2 from './assets/History-2.png'
import hist3 from './assets/History-3.png'
import hist4 from './assets/History-4.png'

import Frame from './assets/Frame.png'

const popular = ["profile", "new york", "relaxing", "person", "fashion"]

function App() {

  const collections = [
    {id: '1', name: "people", collection: "144", h_1: p1, h_2: p2, h_3: p3, h_4: p4},
    {id: '2', name: "nature", collection: "7k", h_1: n1, h_2: n2, h_3: n3, h_4: n4},
    {id: '3', name: "history", collection: "431", h_1: hist1, h_2: hist2, h_3: hist3, h_4: hist4},
  ]

  return (
    <>
    <section className='min-h-full w-full flex flex-col items-left gap-3 bg-[#EFF0F1] shadow-section lg:rounded-3xl lg:p-12 lg:gap-3 xl:p-7 xl:gap-2'>
      <h1 className='text-heading text-[2rem] leading-normal font-bold font-Merriweather p-4 lg:p-0'>Popular Collections</h1>
      <div className='flex gap-2 items-start flex-wrap p-4 lg:p-0'>
        { popular?.map(item => {
          return <button key={item} className='flex p-[0.625rem] items-start gap-[0.625rem] rounded-lg bg-[#ffffff] capitalize'>{ item }</button>
        })}
      </div>
      <article className='mt-7 flex flex-col items-start gap-12 w-full p-4 sm:items-center md:flex-row md:flex-wrap md:gap-2 md:justify-center lg:justify-center lg:gap-12 lg:p-0'>
        {collections?.map(({id, name, collection, h_1, h_2, h_3, h_4}) => (
          <div key={id} className='flex p-6 w-full flex-col items-start gap-6 rounded-[2rem] 
          bg-[#fff] sm:w-[455px] md:w-[361px] lg:w-[300px] lg:gap-6'>
            <div className='w-full lg:h-[10rem]'>
              <img className='w-full rounded-[1.5rem]' src={ h_1 } alt="" />
            </div>
            <div className='flex gap-6 w-full'>
              <div className='w-[7.4375rem]  h-auto lg:h-auto rounded-3xl'>
                <img className='w-[7.4375rem]  h-[4rem]' src={ h_2} alt="" />
              </div>
              <div className='w-[7.4375rem]  h-auto rounded-3xl lg:h-auto'>
                <img className='w-[7.4375rem]  h-[4rem]' src={ h_3} alt="" />
              </div>
              <div className='w-[7.4375rem] h-auto rounded-3xl md:self-start lg:h-auto'>
                <img className='w-[7.4375rem]  h-[4rem] self-left' src={ h_4} alt="" />
              </div>
            </div>
            <div className='flex w-full items-center gap-4'>
              <h2 className='font-Poppins font-medium text-base flex-[1_0_0] capitalize'>{ name }</h2>
              <div className='flex items-center gap-[0.25rem]'>
                <img className='w-[1.9375rem] h-[1.9375rem]' src={ Frame } alt="" />
                <span className='leading-normal font-Poppins font-medium text-base text-heading'>144</span>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
    <footer className="gap-1 text-2xl  flex md:flex-col  fixed border border-[#d7d7d7] lg:top-[50%] top-5 right-5 bg-[#e7e7e7] shadow-section w-auto justify-center items-center p-1 rounded-xl">
    <a className='flex justify-center items-center p-2 hover:opacity-80' href="https://www.twitter.com/hozayves" target="_blank">
      <ion-icon name="logo-twitter"></ion-icon>
    </a>
    <a className='flex justify-center items-center p-2 hover:opacity-80' href="https://github.com/hozayves/design_daily_challenge/tree/main/popular-collection" target="_blank">
      <ion-icon name="logo-github"></ion-icon>
    </a>
  </footer>
  </>
  )
}

export default App
