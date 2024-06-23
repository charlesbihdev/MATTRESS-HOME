'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header
            style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)' }}
            className="bg-[#f40000] text-white fixed top-0 w-full dark:bg-gray-800 transition-colors duration-300 ease-in-out z-50 pt-3 pb-14 md:pb-2 mb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between h-16">
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-800 dark:text-gray-200 rounded-md focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                                aria-hidden="true">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex-shrink-0"
                            prefetch={false}>
                            <FlagIcon className="h-14 w-36" />
                            <span className="sr-only">Logo</span>
                        </Link>
                    </div>

                    <SearchInput />

                    <div className="flex gap-6 md:h-14 md:w-36">
                        {/* <img src="/svg/cart.svg" height={10} width={27} /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="size-8 mx-auto">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>

                        {/* <p className="text-lg font-bold">+233548715098</p> */}
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-full">
                <div className="text-lg ml-10 flex justify-center items-baseline space-x-8 !mx-auto">
                    <NavLink href="/" prefetch={false}>
                        Home
                    </NavLink>
                    <NavLink href="/shop" prefetch={false}>
                        Shop
                    </NavLink>
                    <NavLink href="#" prefetch={false}>
                        About
                    </NavLink>
                    <NavLink href="#" prefetch={false}>
                        Services
                    </NavLink>
                    <NavLink href="#" prefetch={false}>
                        Contact
                    </NavLink>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="absolute px-2 pb-3 space-y-1 pt-2 z-10 bg-[#f40000] w-full">
                        <NavLink href="/" prefetch={false}>
                            Home
                        </NavLink>
                        <NavLink href="/shop" prefetch={false}>
                            Shop
                        </NavLink>
                        <NavLink href="#" prefetch={false}>
                            About
                        </NavLink>

                        <NavLink href="#" prefetch={false}>
                            Services
                        </NavLink>
                        <NavLink href="#" prefetch={false}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}

const NavLink = ({ href, children, prefetch }) => {
    return (
        <Link
            className="text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-lg font-bold block"
            href={href}
            prefetch={prefetch}>
            {children}
        </Link>
    )
}

const SearchInput = () => {
    return (
        <div className="order-1 sm:order-none pt-2 mx-auto mb-4 relative text-gray-600">
            <input
                className="border-2 border-gray-300 bg-[#f8f8f8] h-10 w-80 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
        </div>
    )
}

function FlagIcon(props) {
    return (
        <img src="/wsports.jpg" {...props} xmlns="http://www.w3.org/2000/svg" />
    )
}

export default Navbar
