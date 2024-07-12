// src/components/BrandCard.jsx
import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const BrandCard = ({ brand }) => {
    return (
        <div
            className={`sm:w-1/2 w-full lg:flex rounded-lg overflow-hidden border border-grey-light bg-white ${brand.className}`}>
            <div
                className="h-40 sm:h-48 lg:h-auto lg:w-1/2 flex-none bg-cover bg-center"
                style={{ backgroundImage: `url(${brand.imageUrl})` }}
                title={brand.name}></div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between leading-normal">
                <div className="mb-20">
                    <div className="text-black font-bold text-xl my-3">
                        {brand.name}
                    </div>
                    <p className="text-grey-darker text-base">
                        {brand.description}
                    </p>
                </div>
                <div className="flex items-center">
                    <Link
                        scroll={false}
                        href={brand.url}
                        className="px-6 py-2 rounded-xl bg-white hover:bg-gray-600 text-black border !border-gray-600 !active:text-white hover:text-white font-bold">
                        {' '}
                        <Button type="button">Explore Brand</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BrandCard
