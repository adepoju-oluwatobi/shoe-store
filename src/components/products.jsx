import React from 'react'
import ProductCard from './ProductCard'

function products({products}) {
  return (
  <div>
      <div className=' bg-black w-fit rounded-lg px-4 text-white flex justify-center items-center gap-4 p-2 -mb-3 mt-4 ml-4'>
       <div className=''>
         <h1 className='heading'>Products</h1>
        </div>

        <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
        </div>
      </div>
      <div className='p-4 w-[100%] h-[100%] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 m-auto'>
       {products.map((item) => (
        <ProductCard key={item._id} product = {item}/>
       ))}
    </div>
  </div>
  )
}

export default products