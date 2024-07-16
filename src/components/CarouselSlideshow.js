'use client'

import { Carousel } from 'flowbite-react'

export default function CarouselSlideshow() {
    return (
        <div className="!h-60 w-full sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                    src="/carousel_images/slide1.jpg"
                    alt="mattress slider 1"
                />

                <img
                    src="/carousel_images/slide3.jpg"
                    alt="mattress slider 3"
                />

                <img
                    src="/carousel_images/slide2.jpg"
                    alt="mattress slider 2"
                />
                <img
                    src="/carousel_images/slide4.jpg"
                    alt="mattress slider 4"
                />
            </Carousel>
        </div>
    )
}
