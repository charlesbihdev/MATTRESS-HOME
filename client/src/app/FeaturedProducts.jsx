import React from 'react'

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Beoplay M5 Bluetooth Speaker',
            price: '$99.00',
            imageUrl:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png',
            isNew: true,
            rating: 4,
        },
        {
            id: 2,
            name: 'Apple Smart Watch 6 - Special Edition',
            price: '$299.00',
            imageUrl:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
            isNew: false,
            rating: 5,
        },
        {
            id: 3,
            name: 'Beylob 90 Speaker',
            price: '$199.00',
            imageUrl:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
            isNew: false,
            rating: 3,
        },
        {
            id: 3,
            name: 'Beylob 90 Speaker',
            price: '$199.00',
            imageUrl:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
            isNew: true,
            rating: 3,
        },
    ]

    return (
        <div>
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Our featured products
                        </h2>
                        <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                            Take a look at our trending products. Browse through
                            and see what other people are buying
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                        {products.map(product => (
                            <div key={product.id} className="relative group">
                                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                    <img
                                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />
                                </div>
                                {product.isNew && (
                                    <div className="absolute left-3 top-3">
                                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                                            New
                                        </p>
                                    </div>
                                )}
                                <div className="flex items-start justify-between mt-4 space-x-4">
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                            <a href="#" title={product.name}>
                                                {product.name}
                                            </a>
                                        </h3>
                                        <div className="flex items-center mt-2.5 space-x-px">
                                            {Array.from(
                                                { length: 5 },
                                                (_, index) => (
                                                    <svg
                                                        key={index}
                                                        className={`w-3 h-3 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'} sm:w-4 sm:h-4`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts