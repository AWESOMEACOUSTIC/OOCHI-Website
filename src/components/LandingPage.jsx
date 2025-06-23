import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure'>
                <div className='masker mt-44 px-20'>
                    {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                        return (
                            <div className='masker'>
                                <div className='w-fit flex items-end '>
                                    {index === 1 && (
                                        <div className='mr-3 w-[8vw] rounded-md h-[5vw] -top-[0.1vw] relative overflow-hidden'>
                                            <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/d9/4e/d3/d94ed353adb3b8445cbe900816ca33b5.jpg" alt="image" />
                                        </div>
                                    )}
                                    <h1 key={index} className='uppercase text-9xl text-[#f4f0f0] leading-[6.221vw] tracking-normal font-[grostesk-semibold-v1]'>
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col bottom-section mt-34 font-[neueMontreal-v1] text-sm'>
                <hr className='border-2 border-[#7a7777]' />
                <div className='flex pt-10 px-20 justify-between items-center'>
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                        return (
                            <span className='text-[#f4f0f0]'>
                                {item}
                            </span>
                        )
                    })}
                    <div className='flex items-center justify-center gap-x-4'>
                        <button
                            className='uppercase tracking-normal font-[neueMontreal-v1] border-2 border-[#7a7777] px-4 py-2 text-center rounded-full text-[#f4f0f0] hover:text-black hover:border-black hover:bg-[#f4f0f0] cursor-pointer font-semibold transition-all duration-75'>
                            Start the project
                        </button>
                        <button className='p-3 flex justify-center items-center rounded-full border-2 border-[#7a7777] hover:text-black hover:border-black hover:bg-[#f4f0f0]'>
                            <span>
                                <FaLongArrowAltUp className='w-[1.2vw] h-[2.5vh] rotate-45 text-[#f4f0f0]' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage