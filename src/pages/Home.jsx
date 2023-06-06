import React, { useEffect, useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Products from '../components/products'
import { useLoaderData } from 'react-router-dom';


function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data])
  return (
    <div>
      <HeroBanner />
      <Products products = {products}/>
    </div>
  )
}

export default Home