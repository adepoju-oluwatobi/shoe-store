import React from 'react'
import ProductCard from './ProductCard'

function products({products}) {
    console.log(products);
  return (
    <div className='grid grid-cols-2 gap-5 p-7 md:grid-cols-4'>
       {products.map((item) => (
        <ProductCard key={item._id} product = {item}/>
       ))}
    </div>
  )
}

export default products