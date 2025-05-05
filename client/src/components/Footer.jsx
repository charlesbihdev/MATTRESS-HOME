import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="z-10 footer bg-[#f40000] flex flex-col md:flex-row gap-10 md:gap-0 py-8 text-white justify-evenly px-8">
                <ul className="w-full md:w-1/3 px-10 list-square ml-4 md:ml-0">
                    <h1 className="font-bold text-xl mb-6">Quick Links</h1>
                    <hr className="mb-2" />
                    <li>
                        <Link href="/shop">View Products</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/return-exchange-policy">
                            Return & Exchange policy
                        </Link>
                    </li>
                </ul>

                <ul className="w-full md:w-1/3 px-10 list-none ml-4 md:ml-0">
                    <h1 className="font-bold text-xl mb-6">
                        Follow Mattress Home
                    </h1>
                    <hr className="mb-2" />
                    <div className="w-full flex mt-3 justify-between lg:pl-4 lg:pr-20">
                        <li className="w-8 lg:w-10">
                            <Link
                                href="https://facebook.com/mattresshome"
                                target="_blank">
                                <FontAwesomeIcon
                                    className="hover:text-yellow-300"
                                    icon={faFacebook}
                                    style={{ fontSize: '24px' }}
                                />
                            </Link>
                        </li>
                        <li className="w-8 lg:w-10">
                            <Link
                                href="https://twitter.com/mattresshome"
                                target="_blank">
                                <FontAwesomeIcon
                                    className="hover:text-yellow-300"
                                    icon={faTwitter}
                                    style={{ fontSize: '24px' }}
                                />
                            </Link>
                        </li>
                        <li className="w-8 lg:w-10">
                            <Link
                                href="https://instagram.com/mattresshome"
                                target="_blank">
                                <FontAwesomeIcon
                                    className="hover:text-yellow-300"
                                    icon={faInstagram}
                                    style={{ fontSize: '24px' }}
                                />
                            </Link>
                        </li>
                        <li className="w-8 lg:w-10">
                            <Link
                                href="https://linkedin.com/company/mattresshome"
                                target="_blank">
                                <FontAwesomeIcon
                                    className="hover:text-yellow-300"
                                    icon={faLinkedin}
                                    style={{ fontSize: '24px' }}
                                />
                            </Link>
                        </li>
                    </div>
                </ul>

                <ul className="w-full md:w-1/3 px-10">
                    <h1 className="font-bold text-xl mb-6 text-justify">
                        About Us
                    </h1>
                    <hr className="mb-2" />
                    <p>
                        Mattress Home is dedicated to providing quality and
                        affordable mattresses for your best rest. Our mission is
                        to ensure that everyone can enjoy a good night's sleep
                        with our wide range of products. Speak to our Mattress
                        Experts or Sleep Advisors.
                    </p>
                </ul>
            </div>

            <footer className="bg-gray-700 border-white border-2 border-x-0 font-bold text-white text-center py-5">
                <p className="mx-2">
                    &copy; 2024 MATTRESS HOME Developed By{' '}
                    <Link
                        href="https://linktr.ee/charlesbihdev"
                        className="text-blue-500"
                        target="_blank">
                        CHARLES OWUSU BIH
                    </Link>
                </p>
            </footer>
        </>
    )
}

export default Footer
