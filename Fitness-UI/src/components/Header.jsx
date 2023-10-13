import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
        <img src={ logo } alt="" />
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header