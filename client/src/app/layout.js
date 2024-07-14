import { Nunito } from 'next/font/google'
import '@/app/global.css'
import Head from 'next/head'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className="antialiased bg-[#f0eeee]">
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}

export const metadata = {
    title: {
        template: '%s | Mattress Home',
        default: 'Mattress Home',
    },
}

export default RootLayout
