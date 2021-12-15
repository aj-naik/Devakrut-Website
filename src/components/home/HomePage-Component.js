import React from 'react'
import './HomePage.css'

export default function HomePage() {
    return (
        <>
        <div className='background-container'>
        <img className='background' src='/img/homepage/background.svg' alt='backgroundimg' />
        </div>
        
        <div className='main-image'>
            <img className='main' src='/img/homepage/mainimg.svg' alt='mainimg' />
        </div>
        </>
    )

}
