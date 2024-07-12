import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import FetchProduct from './FetchProduct'
import FloatingButton from '@/components/FloatingButton'

const page = ({ params }) => {
    return (
        <>
            <Navbar />
            <main className="mt-[160px]">
                <FetchProduct id={params.id} />
            </main>
            <FloatingButton />
            <Footer />
        </>
    )
}

export default page
