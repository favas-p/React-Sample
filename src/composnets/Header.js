import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='app-header'>
            <span className='header-title'>tro. official</span>
            <div className='header-item'>
                <span>Home </span>
                <span>Usage </span>
                <span>Settings </span>
                <span>Logout </span>
            </div>
        </div>
    )
}
