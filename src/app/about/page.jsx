import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import AboutMain from './AboutMain'
import FloatingButton from '@/components/FloatingButton'

const page = () => {
    return (
        <>
            <Navbar />
            <AboutMain />
            <FloatingButton />
            <Footer />
        </>
    )
}

export const metadata = {
    title: 'About',
}

export default page
