import React from 'react'
import Hero from '../Hero'
import Features from '../Features'
import { useEffect, useState } from 'react'
import Productcard from '../Product-id'
import Category from "../Category/index"

const Home = () => {
  const [products, setProduct] = useState([])
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8")
      const data = await response.json()
      console.log(data)
      setProduct(data);
    }
    fetchproducts()
  }, [])

  return (
    <div>
      <Hero />
      <Category/>
      <h2 class="text-xs text-green-500 tracking-widest font-bold title-font mb-1">Products</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">New Arrivals</h1>
      {
        products.length > 0 ?
          <Productcard products={products} />
          :
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      <Features />

    </div>
  )
}

export default Home
