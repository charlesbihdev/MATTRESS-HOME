'use client'

import { Carousel } from 'flowbite-react'

export default function CarouselSlideshow() {
    return (
        <div className="w-full max-w-[20rem] sm:max-w-none sm:h-64 xl:h-80 2xl:h-96 overflow-hidden mx-auto">
            <Carousel draggable={false} indicators={true}>
                <div className="relative h-full w-full">
                    <img
                        src="https://www.americanmattress.com/cdn/shop/collections/AM_-_Shopify_Spring_Into_Savings_1296x.jpg"
                        alt="..."
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://www.americanmattress.com/cdn/shop/collections/50_off_Tempur-Pedic_Floor_Models_1296x.png"
                        alt="..."
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://www.americanmattress.com/cdn/shop/collections/Scott_Living_By_Restonic_Collection_2d7638ec-5b0d-4a71-a282-e049bdc551ff_1296x.jpg"
                        alt="..."
                        className="w-full h-full object-cover"
                    />
                </div>
            </Carousel>
        </div>
    )
}
