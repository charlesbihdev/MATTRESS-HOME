'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children, prefetch, className }) => {
    return (
        <Link
            className={`text-white hover:text-[#f6d00c] hover:border-b border-[#f6d00c] dark:hover:text-white px-3 py-1 mb-1 rounded-md text-lg font-bold block ${className}`}
            href={href}
            scroll={false}
            prefetch={prefetch}>
            {children}
        </Link>
    )
}

const NavbarLinks = () => {
    const pathname = usePathname()
    const active = '!text-[#f6d00c] border-b-2 border-[#f6d00c] !pb-[1px]'

    return (
        <>
            <NavLink className={pathname == '/' ? active : ''} href="/">
                Home
            </NavLink>
            <NavLink
                className={
                    pathname == '/shop' || pathname.split('/')[1] == 'product'
                        ? active
                        : ''
                }
                href="/shop">
                Shop
            </NavLink>
            <NavLink
                className={pathname == '/services' ? active : ''}
                href="/services">
                Services
            </NavLink>
            <NavLink
                className={pathname == '/about' ? active : ''}
                href="/about">
                About
            </NavLink>

            <NavLink
                className={pathname == '/contact' ? active : ''}
                href="/contact">
                Contact
            </NavLink>
        </>
    )
}

export default NavbarLinks
