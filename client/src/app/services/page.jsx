import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ServicesMain from './ServicesMain'

const page = () => {
    return (
        <>
            <Navbar />
            <main className="mt-[110px]">
                <ServicesMain />
            </main>
            <Footer />
        </>
    )
}

export default page
