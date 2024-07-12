'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import './Pagination.css'
import { useState, useEffect } from 'react'
import { Pagination } from 'flowbite-react'
import { useFetch } from '@/hooks/fetch'
import Image from 'next/image'
import Loader from '@/components/Loader'

// Define category colors and names
const getCategoryLabelColor = category => {
    switch (category) {
        case 1:
            return 'bg-[#7e00a9]'
        case 2:
            return 'bg-red-500'
        case 3:
            return 'bg-[#f6d00c] !text-black'
        default:
            return 'bg-black'
    }
}

const getCategoryName = category => {
    switch (category) {
        case 1:
            return 'Royal Foam'
        case 2:
            return 'Latex Foam'
        case 3:
            return 'Ashfoam'
        default:
            return 'Foreign Brands'
    }
}

const ItemList = ({ fetchCategory }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const searchQuery = searchParams.get('query')

    const { products, productsError } = useFetch(searchQuery)

    const [filteredItems, setFilteredItems] = useState([])
    const [filterList, setFilterList] = useState(() => {
        const filters = searchParams.get('filters')
        return filters ? filters.split(',').map(Number) : []
    })
    const [page, setPage] = useState(() => {
        const pageParam = searchParams.get('page')
        return pageParam ? Number(pageParam) : 1
    })

    useEffect(() => {
        if (products) {
            let itemsToDisplay = products['products']
            if (filterList.length > 0) {
                itemsToDisplay = products['products'].filter(item =>
                    filterList.includes(item.category_id),
                )
            }
            setFilteredItems(itemsToDisplay)
        }
    }, [filterList, products])

    const updateQueryString = (filters, page) => {
        const params = new URLSearchParams(searchParams)
        if (filters.length) {
            params.set('filters', filters.join(','))
        } else {
            params.delete('filters')
        }
        params.set('page', page)
        router.push(`${pathname}?${params.toString()}`, undefined, {
            shallow: true,
            scroll: false,
        })
    }

    // Handle category click event
    const handleCategoryClick = id => {
        const updatedFilterList = filterList.includes(id)
            ? filterList.filter(filter => filter !== id)
            : [...filterList, id]

        setFilterList(updatedFilterList)
        setPage(1) // Reset to first page when filters change
        updateQueryString(updatedFilterList, 1)
    }

    // Handle page change
    const handlePageChange = newPage => {
        setPage(newPage)
        updateQueryString(filterList, newPage)
    }

    // Calculate the total pages and the items to display for the current page
    const perPage = 8
    const start = (page - 1) * perPage
    const end = start + perPage
    const itemsToShow = filteredItems.slice(start, end)
    const totalPages = Math.ceil(filteredItems.length / perPage)

    if (!products) {
        return <Loader />
    }

    return (
        <>
            <h2 className="text-xl text-center mb-5 font-bold">
                Choose a filter:
            </h2>
            {/* Render Filters component */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap mx-3">
                {fetchCategory.map(category => (
                    <div
                        onClick={() => handleCategoryClick(category.id)}
                        key={category.id}
                        className={`border-2 border-[#f6d00c] font-bold px-5 py-1 rounded-lg cursor-pointer min-w-36 text-center ${
                            filterList.includes(category.id)
                                ? getCategoryLabelColor(category.id) +
                                  ' text-white'
                                : 'bg-white'
                        } `}>
                        {category.name}
                    </div>
                ))}
            </div>
            {/* Render filtered items */}
            <div
                id="items"
                className="flex gap-3 flex-wrap justify-center mx-4 sm:mx-12">
                {itemsToShow.map(item => (
                    <Link
                        scroll={false}
                        href={`/product/${item.id}`}
                        key={item.id}
                        className="block transform transition-transform duration-300 hover:scale-105">
                        <div
                            className="relative card bg-white shadow-md rounded-lg overflow-hidden mb-6 lg:mb-4 w-[320px] lg:w-[260px]"
                            style={{ minHeight: '420px' }}>
                            <div
                                className={`absolute top-0 right-0 text-white text-sm font-bold px-2 py-1 rounded-bl ${getCategoryLabelColor(
                                    item.category_id,
                                )}`}>
                                {getCategoryName(item.category_id)}
                            </div>
                            <Image
                                className="w-full h-48 object-cover"
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.pictures[0].image_path}`}
                                alt={item.name}
                                width={200}
                                height={200}
                            />
                            <hr className="m-0" />
                            <div className="card-body p-4">
                                <h4 className="font-bold text-black text-lg mb-2">
                                    {item.name}
                                </h4>
                                <h4 className="font-bold text-red-500 text-lg mb-2">
                                    GH₵{' '}
                                    {`${item.prices[0].price} ${' - '} GH₵ ${item.prices[1].price}`}
                                </h4>
                                <p className="text-gray-700 text-sm mb-4">
                                    {item.description.substr(0, 88)}
                                </p>
                                <button
                                    href={`/product/${item.id}`}
                                    className="inline-block px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-800">
                                    View Product
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination
                id="pagination"
                className="block mb-8 mx-4 md:mx-10"
                currentPage={page}
                layout="pagination"
                nextLabel="Next"
                onPageChange={handlePageChange}
                previousLabel="Previous"
                totalPages={String(totalPages)}
            />
        </>
    )
}

export default ItemList
