import LoginLinks from '@/app/LoginLinks'
import CarouselSlideshow from '@/components/CarouselSlideshow'
import BrandCard from './BrandCard'
import Footer from './(app)/Footer'
import FeaturedProducts from './FeaturedProducts'
import brandData from '@/data/brandData'

export const metadata = {
    title: 'Mattress Home',
}

const Home = () => {
    return (
        <>
            <main className="m-4 sm:m-12 lg:m-[4.5rem] !mt-[155px] sm:!mt-[170px] lg:!mt-[190px]">
                <CarouselSlideshow />
                <div>
                    <div className="flex flex-col sm:flex-row gap-8 my-6">
                        {brandData.slice(0, 2).map(brand => (
                            <BrandCard key={brand.id} brand={brand} />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 my-6">
                        {brandData.slice(2, 4).map(brand => (
                            <BrandCard key={brand.id} brand={brand} />
                        ))}
                    </div>
                </div>

                <FeaturedProducts />
            </main>
        </>
    )
}

export default Home
