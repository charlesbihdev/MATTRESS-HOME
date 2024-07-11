'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import FetchProduct from './FetchProduct'

const page = ({ params }) => {
    const searchParames = useSearchParams()
    return (
        <div>
            <Navbar />
            <main className="mt-[120px]">
                <FetchProduct id={params.id} size={searchParames.get('size')} />
            </main>

            <Footer />
        </div>
    )
}

export default page
