import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ItemsList from '../../sections/ItemsList'
import FloatingButton from '@/components/FloatingButton'
import items from '../../data/ProductData'

const fetchCategory = [
    { id: 1, name: 'Royal Foam' },
    { id: 2, name: 'Latex Foam' },
    { id: 3, name: 'Ashfoam' },
    { id: 4, name: 'Foreign Brand' },
]

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[160px] sm:!mt-[170px] lg:!mt-[190px]">
                <ItemsList items={items} fetchCategory={fetchCategory} />
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
