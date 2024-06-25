'use client'

import React from 'react'
import Product from './Product'
import { useFetch } from '@/hooks/fetch' // Adjust the import path as per your project structure

const FetchProduct = ({ id }) => {
    const { data, error } = useFetch().fetchProductById(id)

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <div className="text-center my-20"> Loading...</div>
    }

    return <Product product={data.product} /> // Assuming `data` contains `{ product: {...} }`
}

export default FetchProduct
