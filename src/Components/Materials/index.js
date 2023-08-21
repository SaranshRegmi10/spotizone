import React, { useEffect, useState } from 'react'
import Productcard from '../Product-id'
import Category from '../Category/index'

const MyProduct = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      console.log(data)
      setProduct(data);
    }
    fetchproducts()
  }, [])

  return (
    <div>
      <Category />
      {
        product.length ?
          <Productcard products={product} />
          :
          <div>
          </div>
      }
    </div>
  )
}

export default MyProduct
