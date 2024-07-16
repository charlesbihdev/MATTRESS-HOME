'use client'
import React from 'react'
import { useFetch } from '@/hooks/fetch'
import Loader from '@/components/Loader'

const page = () => {
    const { data, error } = useFetch().fetchPayments()

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return (
            <div className="text-center pt-24">
                <Loader className="" />
            </div>
        )
    }
    const payments = data

    return <div className="pt-20 px-4 sm:px-6">payment</div>
}

export default page
