import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='relative p-4 flex justify-between items-center'>
        <img className='z-20' src={ logo } alt="" />
        <nav className='absolute top-0 left-0 w-full min-h-screen py-6 z-10 bg-bgColor'>
            <ul className='flex flex-col items-center justifycenter uppercase mt-20'>
                <li className='w-full text-center font-medium text-lg py-5 border-b-2 border-t-2 border-slate-700'>
                    <a className='' href="#">Home</a>
                </li>
                <li className='w-full text-center font-medium text-lg py-5 border-b-2 border-slate-700'>
                    <a href="#">Pages</a>
                </li>
                <li className='w-full text-center font-medium text-lg py-5 border-b-2 border-slate-700'>
                    <a href="#">Portfolio</a>
                </li>
                <li className='w-full text-center font-medium text-lg py-5 border-b-2 border-slate-700'>
                    <a href="#">blog</a>
                </li>
                <li className='w-full text-center font-medium text-lg py-5 border-b-2 border-slate-700'>
                    <a href="#">shop</a>
                </li>
            </ul>
        </nav>
        <button className='z-20'>
        <ion-icon size="large" name="apps-outline"></ion-icon>
        </button>
    </header>
  )
}

export default Header