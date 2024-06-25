'use client'

import Image from 'next/image'
import items from '@/data/ProductData'
import BackArrow from '@/components/BackArrow'
import sizes from '@/data/SizeData'
import { useState, useEffect } from 'react'

export default function Product({ product }) {
    const [chosenSize, setChosenSize] = useState(1)
    const [productPrice, setProductPrice] = useState(
        product.sizes[0].pivot.price,
    )
    // const product = items.find(item => item.id === Number(id))

    const handleSizeChange = id => {
        setChosenSize(id)
    }

    useEffect(() => {
        console.log(chosenSize)
        setProductPrice(product.sizes[chosenSize - 1].pivot.price)
    }, [chosenSize])
    return (
        <div className="my-7 pt-2 mx-5 font-sans bg-[honeydew]">
            <BackArrow />

            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid bg-white items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className=" lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img
                                src={product.pictures[0].image_path}
                                alt={product.name}
                                className="w-3/4 rounded object-cover mx-auto"
                                width={300}
                                height={200}
                            />
                            <button
                                type="button"
                                className="absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    fill="#ccc"
                                    className="mr-1 hover:fill-[#333]"
                                    viewBox="0 0 64 64">
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {product.pictures.map(picture => {
                                return (
                                    <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                        <img
                                            src={picture.image_path}
                                            alt={product.name}
                                            className="w-full"
                                            width={100}
                                            height={50}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">
                            {product.name}
                        </h2>
                        <div className="flex space-x-2 mt-4">
                            <svg
                                className="w-5 fill-blue-600"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-blue-600"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-blue-600"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-blue-600"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-[#CED5D8]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 className="text-gray-800 text-base">
                                500 Reviews
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className="text-gray-800 text-3xl font-bold">
                                GH₵ {productPrice}
                            </p>
                            <p className="text-gray-400 text-base">
                                <strike>
                                    GH₵ {Math.round(productPrice + 26)}
                                </strike>{' '}
                                <span className="text-sm ml-1">
                                    Tax included
                                </span>
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl mb-2 font-bold text-gray-800">
                                Select Size:
                            </h3>
                            <div className="mb-4">
                                <div className="flex items-center mt-2">
                                    {product.sizes.map(size => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    handleSizeChange(size.id)
                                                }}
                                                key={size.id}
                                                className={`bg-gray-300 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 ${chosenSize == size.id ? '!bg-blue-400' : ''}`}>
                                                {size.name}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-10">
                            <button className="relative flex items-center justify-center w-full px-5 py-2.5 text-white bg-yellow-400 border border-transparent rounded-lg shadow-sm hover:bg-yellow-500">
                                <span className="absolute left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m5-6h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V4a2 2 0 012-2z"
                                        />
                                    </svg>
                                </span>
                                Buy Now
                            </button>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-gray-800">
                                About this product
                            </h3>
                            <p className="text-gray-500 mt-4">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
