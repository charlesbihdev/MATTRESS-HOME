import useSWR from 'swr'
import axios from '@/lib/axios'

const fetcher = url => axios.get(url).then(res => res.data)

export const useFetch = query => {
    // Fetch all products
    const {
        data: products,
        error: productsError,
        mutate: mutateProducts,
    } = useSWR(
        query ? `/api/products/search/${query}` : '/api/products',
        fetcher,
        {
            refreshInterval: 50000, // 30 seconds
            revalidateOnFocus: false, // don't refetch on tab switch
            revalidateIfStale: false, // don't auto refetch stale data
            revalidateOnReconnect: false,
        },
    )

    const fetchWithAllPrices = () => {
        const { data, error } = useSWR('/api/products/sizes', fetcher, {
            refreshInterval: 50000, // 30 seconds
        })
        return { data, error }
    }

    // Fetch a particular product by ID
    const fetchProductById = id => {
        const { data, error } = useSWR(
            id ? `/api/products/${id}` : null,
            fetcher,
            {
                refreshInterval: 50000, // 30 seconds
            },
        )
        return { data, error }
    }

    const fetchProductWithLimit = limit => {
        const { data, error } = useSWR(
            limit ? `/api/products/limit/${limit}` : null,
            fetcher,
        )
        return { data, error }
    }

    // Fetch a product by ID and size
    const fetchProductByIdAndSize = (id, sizeId) => {
        const { data, error } = useSWR(
            id && sizeId ? `/api/products/${id}/size/${sizeId}` : null,
            fetcher,
        )
        return { data, error }
    }

    // Fetch all payments
    const fetchPayments = () => {
        const { data, error } = useSWR(`/api/payments/`, fetcher)
        return { data, error }
    }

    return {
        products,
        productsError,
        mutateProducts,
        fetchProductById,
        fetchProductWithLimit,
        fetchWithAllPrices,
        fetchProductByIdAndSize,
        fetchPayments,
    }
}
