'use client'
import React from 'react'
import { useFetch } from '@/hooks/fetch'
import FeaturedProducts from './FeaturedProducts'
import Loader from '@/components/Loader'

const FetchFeaturedProducts = ({ number }) => {
    const { data, error } = useFetch().fetchProductWithLimit(number)

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <Loader />
    }

    // console.log(data.products)

    return <FeaturedProducts products={data.products} />
}

export default FetchFeaturedProducts
