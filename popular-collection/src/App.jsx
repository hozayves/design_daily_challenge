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
    <section className='min-h-full w-full flex flex-col items-left gap-3 bg-[#EFF0F1] shadow-section'>
      <h1 className='text-heading text-[2rem] leading-normal font-bold font-Merriweather p-4'>Popular Collections</h1>
      <div className='flex gap-2 items-start flex-wrap p-4'>
        { popular?.map(item => {
          return <button key={item} className='flex p-[0.625rem] items-start gap-[0.625rem] rounded-lg bg-[#ffffff] capitalize'>{ item }</button>
        })}
      </div>
      <article className='mt-7 flex flex-col items-start gap-16 w-full p-4'>
        {collections?.map(({id, name, collection, h_1, h_2, h_3, h_4}) => (
          <div key={id} className='flex p-3 w-full flex-col items-start gap-6 rounded-[2rem] bg-[#fff]'>
            <div className='w-full'>
              <img className='w-full h-64 rounded-[1.5rem]' src={ h_1 } alt="" />
            </div>
            <div className='flex gap-4 w-full'>
              <div className='w-[7.4375rem]  h-[6.0625rem] rounded-3xl flex-shrink flex-grow '>
              <img className='w-full h-[6.0625rem]' src={ h_2} alt="" />
              </div>
              <div className='w-[7.4375rem]  h-[6.0625rem] rounded-3xl flex-shrink flex-grow '>
              <img className='w-full h-[6.0625rem]' src={ h_3} alt="" />
              </div>
              <div className='w-[7.4375rem]  h-[6.0625rem] rounded-3xl flex-shrink flex-grow '>
              <img className='w-full h-[6.0625rem]' src={ h_4} alt="" />
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
  )
}

export default App
