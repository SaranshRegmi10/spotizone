import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productcard from '../Product-id'

const CategoryProducts = () => {
    const {name} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchproducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${name}`)
          const data = await response.json()
          console.log(data)
          setProduct(data);
        }
        fetchproducts()
      }, [name])

      if(product.length>0) return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  return (
    <div>
      <Productcard products={product}/>
    </div>
  )
}

export default CategoryProducts
