import React from 'react'
import './App.css'

function App() {
  const stores = [
    {id: 1, name: "KStyle", location: "Remera", street: "KG 453 st", houseNumber: "2033", openHours: "9:00", closeHours: '22:00', status: "closed"},
    {id: 2, name: "Berwa Today", location: "Nyamirambo", street: "KG 33 st", houseNumber: "133", openHours: "10:00", closeHours: '23:00', status: "open"},
    {id: 2, name: "POINT Shangazi store", location: "Gisozi", street: "KG 100 st", houseNumber: "1023", openHours: "8:00", closeHours: '22:00', status: "closed"},
  ]

  return (
    <section className='bg-[#1C1A39] min-h-screen w-full'>
      <div className=''>
        <div className='flex flex-col p-8 items-start gap-10 rounded-[1.125rem] bg-[#121129] text-mainColor font-Mulish'>
          <h1 className='leading-normal font-bold text-2xl'>Closest stores</h1>
          <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col gap-1 w-[40%]'>
              <label htmlFor="postal" className='text-md'>Postal code</label>
              <input className='border border-borderColor p-4 w-[6rem] flex items-start bg-transparent text-lg outline-none focus-within:border-white rounded' type="text" id='postal' value="5055" name='postal' />
            </div>
            <div className='flex justify-end gap-1 items-center w-[70%]'>
            <ion-icon size="large" name="location-outline"></ion-icon>
            <span className='text-locationColor leading-normal text-xl font-bold'>Use my location</span>
            </div>
          </div>
          {stores?.map(({id, name, location, street, houseNumber, openHours, closeHours, status}) => (
            <div className=' w-full flex flex-col justify-start gap-2'>
            <div className='flex justify-between'>
              <h2 className='leading-norma text-lg font-bold'>{ name }</h2>
              <span className={`flex py-[0.25rem] px-[0.5rem] items-start gap-[0.625rem] rounded-[1.1875rem] bg-${status === "closed" ? "closecolor" : "openColor"} text-xs uppercase text-white`}>{ status }</span>
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
