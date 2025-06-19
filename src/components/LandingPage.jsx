import React from 'react'

function LandingPage() {
    return (
        <div className='w-full h-screen bg-[#f1f1f1] pt-1'>
            <div className='textstructure'>
                <div className='masker mt-44 px-20'>
                    {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                        return (
                            <h1 key={index} className='uppercase text-9xl leading-[5.96vw] tracking-normal font-[grostesk-semibold-v1]'>
                                {item}
                            </h1>
                        )})}

                </div>
            </div>
        </div>
    )
}

export default LandingPage