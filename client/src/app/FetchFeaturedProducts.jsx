'use client'
import React from 'react'
import { useFetch } from '@/hooks/fetch'
import FeaturedProducts from './FeaturedProducts'

const FetchFeaturedProducts = ({ number }) => {
    const { data, error } = useFetch().fetchProductWithLimit(number)

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <div className="text-center my-20"> Loading...</div>
    }

    // console.log(data.products)

    return <FeaturedProducts products={data.products} />
}

export default FetchFeaturedProducts
