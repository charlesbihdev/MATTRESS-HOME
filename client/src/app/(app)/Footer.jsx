import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="footer bg-[#f40000] flex flex-col md:flex-row  gap-10 md:gap-0 py-8 text-white justify-evenly px-8">
                <ul className="w-full md:w-1/3 px-10 list-square ml-4 md:ml-0">
                    <h1 className="font-bold text-xl mb-6">Our Mission</h1>
                    <hr className="mb-2" />
                    <li>Youth Leadership & Decision Making</li>
                    <li className="mt-3">Community Development and SDGs</li>
                    <li className="mt-3">Youth Empowerment and Advocacy</li>
                    <li className="mt-3">
                        Youth Opportunities and International Partnership
                    </li>
                </ul>

                <ul className="w-full md:w-1/3 px-10 list-square ml-4 md:ml-0">
                    <h1 className="font-bold text-xl mb-6">Quick Links</h1>
                    <hr className="mb-2" />
                    <li>
                        <Link href="/blog">Read Our Blog</Link>
                    </li>

                    <li className="mt-3">
                        <Link href="/team">View our team</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/about">Read About Us</Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>

                <ul className="w-full md:w-1/3 px-10">
                    <h1 className="font-bold text-xl mb-6 text-justify">
                        About Us
                    </h1>
                    <hr className="mb-2" />
                    <p>
                        Bekwai Youth Movement was founded not long ago with the
                        vision of making a positive impact in the world. Since
                        our inception, we have been dedicated to our mission of
                        helping those in need.
                    </p>
                </ul>
            </div>

            <footer className="bg-gray-700 border-white border-2 border-x-0 font-bold text-white text-center py-5">
                <p className="mx-2">
                    &copy; 2024 MATTRESS HOME{' '}
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
