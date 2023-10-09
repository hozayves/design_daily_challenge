import React from 'react';
import submitArrow from './assets/icon-arrow.svg'
import './App.css'

function App() {

  return (
    <section className='min-h-screen w-full bg-lightGrey flex justify-center items-center px-3 font-Poppins sm:px-20 sm:py-4'>
      <div className='bg-white w-full px-6 py-14 rounded-3xl rounded-br-[4rem] flex flex-col gap-20 sm:py-5 sm:w-[75%] sm:gap-10 md:w-[420px] lg:w-[450px] lg:py-14 lg:gap-20'>
        <form className='flex flex-col gap-4 sm:gap-2 lg:gap-4'>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-1 w-[30%]'>
              <label className='uppercase font-semibold text-smokeyGrey text-sm tracking-widest sm:text-xs lg:text-base' htmlFor="day">day</label>
              <input className='rounded-lg px-[13px] py-5 uppercase font-bold text-3xl border border-lightGrey outline-none placeholder-smokeyGrey text-offBlack sm:px-[10px] sm:py-2 lg:px-[13px] lg:py-3 focus:border focus:border-purplePrimary transition-all duration-500' type="number" id='day' name='day' placeholder='dd' />
            </div>
            <div className='flex flex-col gap-1 w-[30%]'>
              <label className='uppercase font-semibold text-smokeyGrey text-sm tracking-widest sm:text-xs lg:text-base' htmlFor="day">month</label>
              <input className='rounded-lg px-[13px] py-5 uppercase font-bold text-3xl border border-lightGrey outline-none placeholder-smokeyGrey text-offBlack sm:px-[10px] sm:py-2 lg:px-[13px] lg:py-3 focus:border focus:border-purplePrimary transition-all duration-500' type="number" id='month' name='month' placeholder='dd' />
            </div>
            <div className='flex flex-col gap-1 w-[30%]'>
              <label className='uppercase font-semibold text-smokeyGrey text-sm tracking-widest sm:text-xs lg:text-base' htmlFor="day">year</label>
              <input className='rounded-lg px-[13px] py-5 uppercase font-bold text-3xl border border-lightGrey outline-none placeholder-smokeyGrey text-offBlack sm:px-[10px] sm:py-2 lg:px-[13px] lg:py-3 focus:border focus:border-purplePrimary transition-all duration-500' type="number" id='year' name='year' placeholder='dd' />
            </div>
          </div>
          <div className='w-full h-[1px] bg-smokeyGrey mt-7 relative'>
            <button className='p-4 bg-purplePrimary -top-6 left-[40%] absolute rounded-full sm:p-2 lg:p-4 sm:right-0 sm:left-auto lg:-top-7 hover:bg-offBlack transition-all duration-500'>
              <img className='w-[30px] h-[30px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px]' src={submitArrow} alt="" />
            </button>
          </div>
        </form>
        <div>
          <h1 className='font-extrabold italic text-5xl text-offBlack flex gap-1'><span className='text-purplePrimary'>38</span>years</h1>
          <h1 className='font-extrabold italic text-5xl text-offBlack flex gap-1'><span className='text-purplePrimary'>3</span>months</h1>
          <h1 className='italic font-extrabold text-5xl text-offBlack flex gap-1'><span className='text-purplePrimary'>26</span>days</h1>
        </div>
      </div>
    </section>
  )
}

export default App
