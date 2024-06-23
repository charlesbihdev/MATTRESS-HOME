import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ItemsList from '../../sections/ItemsList'
import FloatingButton from '@/components/FloatingButton'

const fetchCategory = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
]

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[160px] sm:!mt-[170px] lg:!mt-[190px]">
                <ItemsList />
            </div>
            <FloatingButton />

            <Footer />
        </>
    )
}
export const metadata = {
    title: 'Shop | Matress Home',
}
export default Shop
