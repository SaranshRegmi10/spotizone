import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const navigation = [
  {
    name:'HOME',
    path: './'
  },
  {
    name:'PRODUCT',
    path: './products'
  },
  {
    name:'ABOUT',
    path: './about'
  },
  {
    name:'CONTACT',
    path: './contact'
  },
  
]
  return (
    <div>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={`./`}  className="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" className='mt-3'></path>
            </svg>
            <span className="ml-3 text-xl ">SPOTIZON</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {
              navigation.map((navigation)=>{
                return <Link to={navigation.path} className="mr-5 text-xl hover:text-gray-900 hover:text-3xl font-bold cursor-pointer">{navigation.name}</Link>
              })
            }
          </nav>
          <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-1 md:mt-0">Go to Cart 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
