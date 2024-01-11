import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productcard from '../Product-id'
import Category from '../Category'

const CategoryProducts = () => {
    const {name} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchproducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
          const data = await response.json()
          console.log(data)
          setProduct(data);
        }
        fetchproducts()
      }, [name])

      if(!product.length>0) return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  return (
    <div>
      <Category/>
      <Productcard products={product}/>
    </div>
  )
}

export default CategoryProducts
