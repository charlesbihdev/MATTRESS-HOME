import Image from 'next/image'
import React from 'react'
const AboutMain = () => {
    return (
        <div className="mt-[110px] py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <Image
                            src="/images/helpdesk1.png"
                            alt="image"
                            loading="lazy"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Mattress Home
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Welcome to Mattress Home, your ultimate sleep
                            partner and solution. We specialize in providing
                            high-quality new mattresses and offer expert
                            restoration services for your old ones. Our mission
                            is to ensure you get the best sleep possible,
                            tailored to your unique needs.
                        </p>
                        <p className="mt-4 text-gray-600">
                            At Mattress Home, we understand that a good night's
                            sleep is essential for a healthy and productive
                            life. That’s why we offer a diverse range of
                            mattresses from top brands such as Royal Foam, Latex
                            Foam, Ashfoam, and various foreign brands. Whether
                            you're looking for a new mattress or need to
                            rejuvenate your existing one, we've got you covered.
                        </p>
                        <p className="mt-4 text-gray-600">
                            We are here to solve your sleep needs. Give us a
                            call or chat with us today to find the perfect
                            mattress that suits you. Experience the difference
                            with Mattress Home, where your comfort and
                            satisfaction are our top priorities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain
