import React, { useEffect, useState } from 'react'
import Flexcard from './flexcard'

const Category = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchcategory = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      console.log(data)
      setCategories(data);
    }
    fetchcategory()
  }, [])

  if (categories.length === 0) {
    return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }
  return (
    <div>
       <Flexcard cards={categories}/>
    </div >
  )
}

export default Category
