import { useState,useEffect } from 'react'
import React from 'react'
import Category from '../Category'
import Productcard from '../Product-id'

const MyProduct = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchcategory = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories")
      const data = await response.json()
      console.log(data)
      setCategories(data);
    }
    fetchcategory()
  }, [])
  if ((categories).length>0) return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  return (
    <div>
      <Category card={categories}/>
      <Productcard/>
    </div>
  )
}

export default MyProduct