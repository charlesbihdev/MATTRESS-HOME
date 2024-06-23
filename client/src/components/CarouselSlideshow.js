'use client'

import { Carousel } from 'flowbite-react'

export default function CarouselSlideshow() {
    return (
        <div className="!h-60 w-full sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                    src="https://www.americanmattress.com/cdn/shop/collections/AM_-_Shopify_Spring_Into_Savings_1296x.jpg"
                    alt="..."
                />
                <img
                    src="https://www.americanmattress.com/cdn/shop/collections/50_off_Tempur-Pedic_Floor_Models_1296x.png"
                    alt="..."
                />
                <img
                    src="https://www.americanmattress.com/cdn/shop/collections/Scott_Living_By_Restonic_Collection_2d7638ec-5b0d-4a71-a282-e049bdc551ff_1296x.jpg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    )
}
