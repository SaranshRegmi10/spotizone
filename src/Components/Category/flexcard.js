import React from 'react'
import { Link } from 'react-router-dom'

const Flexcard = ({cards=[]}) => {
  return (
    <div>
       <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            {
              cards.map((card) => {
                return (
                  <Link to={`/categories/${card}`} class="p-4 sm:w-1/4 w-1/2 border-2 border-gray-500 cursor-pointer">
                    <h4 class="title-font font-medium sm:text-xl text-lg text-gray-900 uppercase ">{card}</h4>
                    {/* <p class="leading-relaxed">Users</p> */}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section >
    </div>
  )
}

export default Flexcard
