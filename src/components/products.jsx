import React from 'react'
import ProductCard from './ProductCard'

function products({products}) {
  return (
  <div>
      <div className='px-4 -mb-3 mt-8'>
        <h1 className='heading'>Products</h1>
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