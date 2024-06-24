'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Pagination } from 'flowbite-react'

// Define category colors and names
const getCategoryLabelColor = category => {
    switch (category) {
        case 1:
            return 'bg-[#7e00a9]'
        case 2:
            return 'bg-red-500'
        case 3:
            return 'bg-[#f6d00c]'
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

const ItemList = ({ items, fetchCategory }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const [filterList, setFilterList] = useState(() => {
        const filters = searchParams.get('filters')
        return filters ? filters.split(',').map(Number) : []
    })

    const [page, setPage] = useState(() => {
        const pageParam = searchParams.get('page')
        return pageParam ? Number(pageParam) : 1
    })

    const perPage = 6

    const [filteredItems, setFilteredItems] = useState(items)

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

    // Effect to filter items based on filterList changes and handle pagination
    useEffect(() => {
        let itemsToDisplay = items
        if (filterList.length > 0) {
            itemsToDisplay = items.filter(item =>
                filterList.includes(item.category),
            )
        }
        setFilteredItems(itemsToDisplay)
    }, [filterList, items])

    // Calculate the total pages and the items to display for the current page
    const start = (page - 1) * perPage
    const end = start + perPage
    const itemsToShow = filteredItems.slice(start, end)
    const totalPages = Math.ceil(filteredItems.length / perPage)

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
                                ? 'bg-black text-white'
                                : 'bg-white'
                        } `}>
                        {category.name}
                    </div>
                ))}
            </div>

            {/* Render filtered items */}
            <div
                id="items"
                className="flex gap-3 flex-wrap justify-around mx-4 sm:mx-12">
                {itemsToShow.map(item => (
                    <Link
                        href={item.link}
                        key={item.id}
                        className="block transform transition-transform duration-300 hover:scale-105">
                        <div
                            className="relative card bg-white shadow-md rounded-lg overflow-hidden mb-6 lg:mb-4 w-[320px] lg:w-[260px]"
                            style={{ minHeight: '420px' }}>
                            <div
                                className={`absolute top-0 right-0 text-white text-sm font-bold px-2 py-1 rounded-bl ${getCategoryLabelColor(
                                    item.category,
                                )}`}>
                                {getCategoryName(item.category)}
                            </div>
                            <img
                                className="w-full h-48 object-cover"
                                src={item.imageSrc}
                                alt="Card image cap"
                            />
                            <hr className="m-0" />
                            <div className="card-body p-4">
                                <h4 className="font-bold text-black text-lg mb-2">
                                    {item.name}
                                </h4>
                                <h4 className="font-bold text-red-500 text-lg mb-2">
                                    GH₵ {item.price}
                                </h4>
                                <p className="text-gray-700 text-sm mb-4">
                                    {item.description}
                                </p>
                                <button
                                    href={item.link}
                                    className="inline-block px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-800">
                                    View Product
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination
                className="block mx-3 my-8 mx-auto"
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
