import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ItemsList from './ItemsList'
import FloatingButton from '@/components/FloatingButton'
import { Suspense } from 'react'

const fetchCategory = [
    { id: 1, name: 'Royal Foam' },
    { id: 2, name: 'Latex Foam' },
    { id: 3, name: 'Ashfoam' },
    { id: 4, name: 'Foreign Brands' },
]

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[160px]">
                <Suspense>
                    <ItemsList fetchCategory={fetchCategory} />
                </Suspense>
            </div>
            <FloatingButton />

            <Footer />
        </>
    )
}
export const metadata = {
    title: 'Shop',
}
export default Shop
