import React from 'react'
import ochi from '../assets/ochi-logo.png'

function Navbar() {
    return (
        <div className='fixed z-[999] w-full flex justify-between px-20 items-center font-[neueMontreal-v1] text-[1.01rem] bg-gray-500/10 backdrop-blur-[0.4vw]'>
            <div className='w-18 h-18'>
                <img
                    className='w-full h-full object-cover'
                    src={ochi} alt="image" />
            </div>
            <div className='flex gap-x-7 text-white outline-none'>
                {["Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) =>(
                    <a key={index} className={`font-light ${index === 4 && `ml-38`}`}>
                        {item}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar