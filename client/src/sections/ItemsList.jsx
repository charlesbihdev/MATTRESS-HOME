'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import items from '../data/ProductData' // Ensure this import path is correct

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

// Static list of categories
const fetchCategory = [
    { id: 1, name: 'Royal Foam' },
    { id: 2, name: 'Latex Foam' },
    { id: 3, name: 'Ashfoam' },
    { id: 4, name: 'Foreign Brand' },
]

const ItemList = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const [filterList, setFilterList] = useState(() => {
        const filters = searchParams.get('filters')
        return filters ? filters.split(',').map(Number) : []
    })
    const [filteredItems, setFilteredItems] = useState(items)

    const updateQueryString = filters => {
        const params = new URLSearchParams(searchParams)
        if (filters.length) {
            params.set('filters', filters.join(','))
        } else {
            params.delete('filters')
        }
        router.replace(`${pathname}?${params.toString()}`, undefined, {
            shallow: true,
        })
    }

    // Handle category click event
    const handleCategoryClick = id => {
        const updatedFilterList = filterList.includes(id)
            ? filterList.filter(filter => filter !== id)
            : [...filterList, id]

        setFilterList(updatedFilterList)
        updateQueryString(updatedFilterList)
    }

    // Effect to filter items based on filterList changes
    useEffect(() => {
        if (filterList.length > 0) {
            const filteredItems = items.filter(item =>
                filterList.includes(item.category),
            )
            setFilteredItems(filteredItems)
        } else {
            // If no filters selected, show all items
            setFilteredItems(items)
        }
    }, [filterList])

    return (
        <>
            <h2 className="text-xl text-center mb-5 font-bold">
                Choose a filter:
            </h2>

            {/* Render Filters component */}
            <div className=" flex justify-center gap-3 mb-8 flex-wrap mx-3">
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
                {filteredItems.map(item => (
                    <Link
                        href={item.link}
                        key={item.id}
                        className="block transform transition-transform duration-300 hover:scale-105">
                        <div
                            className="relative card bg-white shadow-md rounded-lg overflow-hidden mb-6 lg:mb-4 w-[320px] lg:w-[250px]"
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
                                    className=" inline-block px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-800">
                                    View Product
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ItemList
