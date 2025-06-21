import React from 'react'
import ochi from '../assets/ochi-logo.png'

function Navbar() {
    return (
        <div className='fixed z-[999] w-full flex justify-between px-20 items-center font-[neueMontreal-v1] text-[1.01rem]'>
            <div className='w-18 h-23'>
                <img
                    className='w-full h-full object-cover'
                    src={ochi} alt="image" />
            </div>
            <div className='flex gap-x-7 text-[#f4f0f0] outline-none'>
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