'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import items from '../data/ProductData' // Assuming this import is correct

// Define category colors and names
const getCategoryLabelColor = category => {
    switch (category) {
        case 1:
            return 'bg-violet-500'
        case 2:
            return 'bg-red-500'
        case 3:
            return 'bg-yellow-400'
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
            return 'Foreign Brand'
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
    const [filterList, setFilterList] = useState([]) // State for selected filters
    const [filteredItems, setFilteredItems] = useState([]) // State for filtered items

    // Handle category click event
    const handleCategoryClick = id => {
        if (filterList.includes(id)) {
            // Remove category from filterList
            const updatedFilter = filterList.filter(filter => filter !== id)
            setFilterList(updatedFilter)
        } else {
            // Add category to filterList
            setFilterList([...filterList, id])
        }
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
            {/* Render Filters component */}
            <div className="overflow-x-auto flex justify-around mb-8">
                {fetchCategory.map(category => (
                    <div
                        onClick={() => handleCategoryClick(category.id)}
                        key={category.id}
                        className={`border border-black px-5 py-2 rounded-lg cursor-pointer ${filterList.includes(category.id) ? 'bg-yellow-400 text-black' : ''} `}>
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
                                className={`absolute top-0 right-0 text-white text-sm font-bold px-2 py-1 rounded-bl ${getCategoryLabelColor(item.category)}`}>
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
                                <Link
                                    href={item.link}
                                    className=" inline-block px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-800">
                                    View Product
                                </Link>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ItemList
