import React from 'react'

export default function About() {
  return (
    <div className='w-full flex flex-col py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl'>
      <div className='Card1 px-20'>
        <p className='w-[82vw] text-zinc-900 text-[3.7vw] font-[grostesk-semibold-v2] leading-[3.89vw]'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline underline-offset-4'>raise funds</span>, <span className='underline underline-offset-4'>sell prod­ucts</span>, <span className='underline underline-offset-4'>ex­plain com­plex ideas</span>, and <span className='underline underline-offset-4'>hire great peo­ple</span>.
        </p>
      </div>
      <hr className='border-[0.01vw] border-[#a1b562] mt-16 w-full' />
      <div className='flex px-20 mt-4'>
        <h1 className='font-[neueMontreal-v1] text-lg'>What you can expect:</h1>
        <div className='flex flex-col pl-140 gap-y-8 '>
          <p className='font-[neueMontreal-v1] text-md w-[17vw] leading-6'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
          </p>
          <p className='font-[neueMontreal-v1] text-md w-[17vw] leading-6'>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className='flex flex-col pt-30 pl-38'>
          <h4 className='font-[neueMontreal-v1] text-md mb-3 -mt-6'>S:</h4>
          {
            ["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
              <p key={index} className='font-[neueMontreal-v1] text-md underline underline-offset-4'>{item}</p>
            ))
          }
        </div>
      </div>
      <hr className='border-[0.01vw] bg-amber-200 border-[#a1b562] mt-16 w-full' />
      <div className='w-full flex justify-between px-20 py-7 items-center'>
          <div className='w-1/2 h-[32vw] flex flex-col gap-y-6'>
            <h1 className='text-[4vw] font-[neueMontreal-v1] font-semibold'>Our approach:</h1>
            <button className='w-[14.4vw] uppercase px-6 py-5 rounded-4xl flex items-center justify-between bg-black'>
              <span className='text-lg text-white font-[neueMontreal-v1]'>Read More</span>
              <div className='bg-white rounded-full w-[0.7vw] h-[0.7vw]'></div>
            </button>
          </div>
          <div className='w-1/2 h-[32vw]'>
            <img  className='w-full h-full object-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />
          </div>
      </div>
    </div>
  )
}
