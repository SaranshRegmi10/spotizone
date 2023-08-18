import React from 'react'
import { Link } from 'react-router-dom'

const Productcard = ({ products = [] }) => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4 text-left">
                        {
                            products.map((product) => {
                                console.log(product, 'product')
                                const { id,image, category, title, price, } = product
                                return (
                                    <Link to={`/product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 ">
                                        <a href="/" className="block relative h-48 rounded overflow-hidden">
                                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div class="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                            <p className="mt-1 font-md font-semibold">${price}</p>
                                        </div>
                                    </Link>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Productcard
