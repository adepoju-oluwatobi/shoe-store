import React from 'react'

function HeroBanner() {
  return (
    <div className='bg-[url(./assets/hero-banner.png)] container w-[90%] h-[187px] m-auto rounded-2xl'>
        <div>
            <p className='text-white font-bold text-xl w-[15ch]'>MORDERN SHOE STORE</p>
        </div>
        <div>
            <p className='description w-50ch]'>
            Good shoes boost confidence and gives you the boldness to step into greatness.
            Get your shoes at the modern shoes store for quality and affordability.
            </p>
        </div>
        <div>
            <button className='primary-btn text-[8px]'>Shop Now</button>
        </div>
    </div>
  )
}

export default HeroBanner