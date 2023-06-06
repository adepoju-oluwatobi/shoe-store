import React from 'react'

function HeroBanner() {
  return (
   <div className=' w-[100%] h-[100%] px-4 m-auto'>
     <div className='bg-[url(./assets/hero-banner-big.png)] bg-no-repeat bg-cover container w-[100%] h-[100%] m-auto'>
        <div>
            <p className='text-white font-bold text-xl md:text-2xl w-[30ch]'>MORDERN SHOE STORE</p>
        </div>
        <div>
            <p className='description'>
            Good shoes boost confidence and gives you the boldness to step into greatness.
            Get your shoes at the modern shoes store for quality and affordability.
            </p>
        </div>
        <div>
            <button className='primary-btn text-xs md:text-sm'>Shop Now</button>
        </div>
    </div>
   </div>
  )
}

export default HeroBanner