import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ContactForm from './ContactForm'

const page = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-[160px]">
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

export default page
