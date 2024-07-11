import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ContactForm from './ContactForm'
import FloatingButton from '@/components/FloatingButton'

const page = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-[160px]">
                <ContactForm />
            </main>
            <FloatingButton />
            <Footer />
        </div>
    )
}

export default page
