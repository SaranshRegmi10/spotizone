import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex shadow-lg my-10'>
                <div className='w-3/4 bg-white px-10 py-10'>
                    <div className='flex justify-center border-b  pb-8'>
                        <h1 className='font-semibold text-2xl'>Shopping cart</h1>
                    </div>
                    <div className='flex mt-10 mb-5'>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Product Details</h3>
                        <h3 className='font-semibold text-gray-600 text-xs text-center uppercase w-1/5'>Quantity</h3>
                        <h3 className='font-semibold text-gray-600 text-xs text-center uppercase w-1/5'>Price</h3>
                        <h3 className='font-semibold text-gray-600 text-xs text-center uppercase w-1/5'>Total</h3>
                    </div>
                    <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                        <div className='flex w-2/5'>
                            <div className='w-20'>
                                <img className="h-24" src='' alt=''></img>
                            </div>
                            <div className='flex flex-col justify-between ml-4 flex-grow'>
                                <span className='font-bold text-sm'>Airpods</span>
                                <span className='text-red-500 text-xs'>APPLE</span>
                                <a href='/' className='font-semibold hover:text-red-500 text-gray-500 text-xs'>Remove</a>
                            </div>
                        </div>
                        <div className='flex justify-center w-1/5'>

                            <svg className='fill-current text-gray-600 w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L18 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input className='mx-2 border text-center w-8' type='text' value="1" />
                            <svg className='fill-current text-gray-600 w-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span className='text=center w-1/5 font-semibold text-sm'>$400.00</span>
                        <span className='text=center w-1/5 font-semibold text-sm'>$400.00</span>
                    </div>
                    <Link to={'/products'} className='flex font-semibold text-green-600 text-sm mt-10'>
                    {/*<i class="fa-regular fa-arrow-left"></i>*/}
                        Continue Shopping
                    </Link>
                </div>

                <div id='summary' className='w-1/4 px-8 py-10'>
                    <h1 className='font-semibold text-2xl border-b pb-8'>Order Summary</h1>
                    <div className='flex justify-between mt-10 mb-5'>
                        <span className='font-semibold text-sm uppercase'>Item 3</span>
                        <span className='font-semibold text-sm '>590$</span>
                    </div>
                    <div>
                        <label className='font-medium inline-block mb-3 text-sm uppercase'>Shipping</label>
                        <select className='block p-2 text-gray-600 w-full text-sm'>
                            <option>Standard Shipping - $10.26</option>
                        </select>
                    </div>
                    <div className='py-10'>
                        <label className='font-semibold inline-block mb-3 text-sm uppercase' for="promo">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>Apply</button>
                    <div>
                        <span>Total Cost</span>
                        <span>$600</span>
                    </div>
                    <button className='bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full'>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default Cart
