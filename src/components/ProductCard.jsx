import React from 'react'
import products from './products'

function ProductCard({product}) {
    console.log(product)
  return (
    <div className='group text-center rounded-xl shadow shadow-black border-red-500 border-dashed border-2'>
        <div className='w-full  h-[80%] cursor-pointer overflow-hidden m-auto'>
            <img 
            className='w-full h-full object-cover group-hover:scale-110 duration-500 rounded-xl'
            src={product.image} alt="product image" />
        </div>
            <div>
                <h2 className='text-[8px] md:text-sm lg:xl font-bold'>
                    {product.title}
                </h2>
            </div>
            <div>
                <h6>
                    {product.price}
                </h6>
            </div>
    </div>
  )
}

export default ProductCard