import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import SleepTrialPolicyPage from './SleepTrialPolicyPage'

const page = () => {
    return (
        <>
            <Navbar />
            <main className="mt-[110px]">
                <SleepTrialPolicyPage />
            </main>
            <Footer />
        </>
    )
}

export default page
