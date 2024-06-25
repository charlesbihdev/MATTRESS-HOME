import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import ViewProduct from './ViewProduct'

const page = ({ params }) => {
    return (
        <>
            <Navbar />
            <main className="mt-[160px]">
                <ViewProduct id={params.id} />
            </main>
            <Footer />
        </>
    )
}

export default page
