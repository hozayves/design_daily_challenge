import React from 'react'
import './App.css'

function App() {
  const stores = [
    {id: 1, name: "KStyle", location: "Remera", street: "KG 453 st", houseNumber: "2033", openHours: "9:00", closeHours: '22:00', status: "closed"},
    {id: 2, name: "Berwa Today", location: "Nyamirambo", street: "KG 33 st", houseNumber: "133", openHours: "10:00", closeHours: '23:00', status: "open"},
  ]

  return (
    <section className='bg-[#1C1A39] min-h-screen w-full sm:flex sm:justify-center lg:h-full 2xl:justify-center'>
      <div className='sm:relative sm:bg-grad1 sm:w-[37rem] sm:h-[25.875rem] sm:mt-20 sm:rounded-tr-[6rem] sm:rounded-bl-[6rem] lg:mt-4 lg:w-[34rem] xl:rounded-tr-[3rem] xl:rounded-bl-[3rem] xl:w-[32rem] xl:h-[20rem]'>
        <div className='flex flex-col p-8 items-start gap-10 sm:rounded-[1.125rem] bg-[#121129] text-mainColor font-Mulish w-full sm:w-[500px] sm:absolute sm:top-20 sm:-right-10 lg:w-[400px] xl:top-12'>
          <h1 className='leading-normal font-bold text-2xl'>Closest stores</h1>
          <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col gap-1 w-[40%]'>
              <label htmlFor="postal" className='text-md xl:text-xs'>Postal code</label>
              <input className='border border-borderColor p-4 w-[6rem] flex items-start bg-transparent text-lg outline-none focus-within:border-white rounded xl:w-[8rem]' type="text" id='postal' value="5055" name='postal' />
            </div>
            <div className='flex justify-end gap-1 items-center w-[70%]'>
            <ion-icon size="large" name="location-outline"></ion-icon>
            <span className='text-locationColor leading-normal text-xl font-bold xl:text-lg'>Use my location</span>
            </div>
          </div>
          {stores?.map(({id, name, location, street, houseNumber, openHours, closeHours, status}) => (
            <div className=' w-full flex flex-col justify-start gap-2'>
            <div className='flex justify-between'>
              <h2 className='leading-norma text-lg font-bold'>{ name }</h2>
              <span className={`flex justify-center items-center py-[0.25rem] px-[0.5rem] gap-[0.625rem] rounded-[1.1875rem] ${status === "closed" ? "bg-closeColor" : "bg-openColor"} text-xs uppercase text-white`}>{ status }</span>
            </div>
            <p className='leading-normal text-lg font-normal'>{location} {street}, {houseNumber}</p>
            <div className='flex justify-start items-center gap-3'>
            <ion-icon size="large" name="time-outline"></ion-icon>
            <span className='font-normal text-lg'>9:00 - 21:00</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
