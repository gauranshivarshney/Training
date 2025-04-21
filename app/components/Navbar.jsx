import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-text'>
                <img src='/n.png' className='image' />
                <h2 className='heading'>Pathwaystosales</h2>
                <div className='list'>
                <a className='text'>Home</a>
                <a className='text'>Services</a>
                <a className='text'>About</a>
                <a className='text'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}
