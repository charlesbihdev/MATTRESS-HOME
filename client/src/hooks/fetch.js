import useSWR from 'swr'
import axios from '@/lib/axios'

const fetcher = url => axios.get(url).then(res => res.data)

export const useFetch = () => {
    // Fetch all products
    const {
        data: products,
        error: productsError,
        mutate: mutateProducts,
    } = useSWR('/api/products', fetcher)

    const fetchWithAllPrices = () => {
        const { data, error } = useSWR('/api/products/sizes', fetcher)
        return { data, error }
    }

    // Fetch a particular product by ID
    const fetchProductById = id => {
        const { data, error } = useSWR(
            id ? `/api/products/${id}` : null,
            fetcher,
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

    return {
        products,
        productsError,
        mutateProducts,
        fetchProductById,
        fetchProductWithLimit,
        fetchWithAllPrices,
        fetchProductByIdAndSize,
    }
}
