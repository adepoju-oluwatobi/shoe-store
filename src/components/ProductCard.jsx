import React from 'react'
import products from './products'

function ProductCard({product}) {
    console.log(product)
  return (
    <div className='group'>
        <div className='w-full h-full cursor-pointer overflow-hidden'>
            <img 
            className='w-full h-96 object-cover group-hover:scale-110 duration-500'
            src={product.image} alt="product image" />
        </div>
        <div className=''>
            <div>
                <h2 className='text-base font-bold'>
                    {product.title}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default ProductCard