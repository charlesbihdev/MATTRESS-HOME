'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import NavbarLinks from './NavbarLinks'

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
                            scroll={false}
                            className="flex-shrink-0"
                            prefetch={false}>
                            <FlagIcon className="h-14 w-36" />
                            <span className="sr-only">Logo</span>
                        </Link>
                    </div>
                    <Suspense>
                        <SearchInput />
                    </Suspense>

                    <div className="flex gap-6 md:h-14 md:w-36">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="tel:+233548715098">
                            <img
                                src="/svg/phone-white.svg"
                                className="w-8 h-8 mt-4"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-full">
                <div className="text-lg ml-10 flex justify-center items-baseline space-x-8 !mx-auto">
                    <NavbarLinks />
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="absolute px-2 pb-3 space-y-1 pt-2 z-10 bg-[#f40000] w-full">
                        <NavbarLinks />
                    </div>
                </div>
            )}
        </header>
    )
}

const SearchInput = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const searchQuery = searchParams.get('query')
    const [query, setQuery] = useState(searchQuery ? searchQuery : '')

    // const inputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        if (query.trim() !== '') {
            router.push(`/shop?query=${encodeURIComponent(query)}`, {
                scroll: false,
            })
        }
    }

    useEffect(() => {
        if (pathname == '/shop') {
            router.push(`/shop?query=${encodeURIComponent(query)}`, {
                scroll: false,
            })
        }
    }, [query])

    return (
        <div className="order-1 sm:order-none pt-2 mx-auto mb-4 relative text-gray-600">
            <form onSubmit={handleSubmit}>
                <input
                    className="border-2 border-gray-300 bg-[#f8f8f8] h-10 w-80 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    name="search"
                    placeholder="Search"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4">
                    <svg
                        className="text-gray-800 h-6 w-7 fill-current"
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
            </form>
        </div>
    )
}

function FlagIcon(props) {
    return (
        <img src="/wsports.jpg" {...props} xmlns="http://www.w3.org/2000/svg" />
    )
}

export default Navbar
