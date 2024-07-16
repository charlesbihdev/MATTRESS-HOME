'use client'

import React from 'react'
import { useFetch } from '@/hooks/fetch' // Adjust the import path as per your project structure
import Loader from '@/components/Loader'
import OrderSummary from './OrderSummary'

const FetchProduct = ({ id, size }) => {
    const { data, error } = useFetch().fetchProductByIdAndSize(id, size)

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <Loader className="my-12" />
    }

    return <OrderSummary product={data.product} /> // Assuming `data` contains `{ product: {...} }`
}

export default FetchProduct
