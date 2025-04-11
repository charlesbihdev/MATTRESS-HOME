'use client'

import React from 'react'
import Product from './Product'
import { useFetch } from '@/hooks/fetch' // Adjust the import path as per your project structure
import Loader from '@/components/Loader'

const FetchProduct = ({ id }) => {
    const { data, error } = useFetch().fetchProductById(id)

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <Loader />
    }

    return <Product product={data.product} /> // Assuming `data` contains `{ product: {...} }`
}

export default FetchProduct
