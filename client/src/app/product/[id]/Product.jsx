'use client'

import Image from 'next/image'
import BackArrow from '@/components/BackArrow'
import { useState, useEffect } from 'react'
import WhatsAppLinkButton from './WhatsAppLinkButton'

export default function Product({ product }) {
    const [chosenSize, setChosenSize] = useState(3)
    const [productPrice, setProductPrice] = useState(
        parseFloat(product.sizes[0].pivot.price) +
            parseFloat(process.env.NEXT_PUBLIC_ADDED_PROFIT || '100'),
    )
    const [activeImage, setActiveImage] = useState(
        process.env.NEXT_PUBLIC_BACKEND_URL +
            '/' +
            product.pictures[0].image_path,
    )

    // const product = items.find(item => item.id === Number(id))

    const handleSizeChange = id => {
        setChosenSize(id)
    }

    const handleImageChange = id => {
        // console.log(id)
        setActiveImage(
            process.env.NEXT_PUBLIC_BACKEND_URL +
                '/' +
                product.pictures[id].image_path,
        )
    }

    useEffect(() => {
        setProductPrice(
            parseFloat(product.sizes[chosenSize - 1].pivot.price) +
                parseFloat(process.env.NEXT_PUBLIC_ADDED_PROFIT || '100'),
        )
    }, [chosenSize])

    const getCategoryName = category => {
        switch (category) {
            case 1:
                return 'Royal Foam'
            case 2:
                return 'Latex Foam'
            case 3:
                return 'Ashfoam'
            case 5:
                return 'Mattress Home Special'
            default:
                return 'Foreign Brands'
        }
    }

    const getCategoryLabelColor = category => {
        switch (category) {
            case 1:
                return 'bg-[#7e00a9]'
            case 2:
                return 'bg-red-500'
            case 3:
                return 'bg-[#f6d00c] !text-black'
            case 5:
                return 'bg-blue-500 !text-white'
            default:
                return 'bg-black text-white'
        }
    }
    // console.log(product)

    return (
        <div className="my-7 pt-2 mx-5 font-sans bg-[honeydew]">
            <BackArrow />

            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid bg-white items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-4 rounded-lg">
                    <div className=" lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="p-2 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <Image
                                src={activeImage}
                                alt={product.name}
                                className="w-full rounded object-cover mx-auto"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {product.pictures.map((picture, index) => {
                                // console.log(picture)
                                return (
                                    <div
                                        onClick={() => handleImageChange(index)}
                                        key={picture.id}
                                        className="w-24 h-20 flex items-center justify-center rounded-lg p-1 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${picture.image_path}`}
                                            alt={product.name}
                                            className="w-full h-full"
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
                        <div className="sm:flex justify-between mt-2 sm:mt-0">
                            <div className="flex space-x-2 mt-4">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`w-5 ${index < product.stars ? 'fill-blue-600' : 'fill-[#CED5D8]'} `}
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                ))}

                                {/* <svg
                                    className="w-5 fill-[#CED5D8]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg> */}
                            </div>

                            <h4
                                className={`${getCategoryLabelColor(product.category_id)} text-white px-3 py-1 mt-5 font-mono text-lg rounded-lg text-center w-1/2 sm:w-auto`}>
                                {getCategoryName(product.category_id)}
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className="text-gray-800 text-3xl font-bold">
                                GH₵ {productPrice}
                            </p>
                            <p className="text-gray-400 text-base">
                                <strike>
                                    GH₵ {Math.round(productPrice + 113)}
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
                                <div className="flex flex-wrap items-center mt-2">
                                    {product.sizes.map(size => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    handleSizeChange(size.id)
                                                }}
                                                key={size.id}
                                                className={`bg-gray-300 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 my-1 ${chosenSize == size.id ? '!bg-blue-400' : ''}`}>
                                                {size.name}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-10">
                            <WhatsAppLinkButton
                                size={chosenSize}
                                product={product}
                                productPrice={productPrice}
                            />
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
