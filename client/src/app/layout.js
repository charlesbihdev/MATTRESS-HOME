import { Nunito } from 'next/font/google'
import '@/app/global.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased bg-[#f0eeee]">
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Matress HOme',
}

export default RootLayout
