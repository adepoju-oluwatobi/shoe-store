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
                <h2 className='text-[8px] md:text-sm lg:text-base font-bold'>
                    {product.title}
                </h2>
            </div>
            <div className='flex justify-center gap-2'>
                <h6>
                    {`$${product.price}`}
                </h6>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                </svg>
                </div>
            </div>
    </div>
  )
}

export default ProductCard