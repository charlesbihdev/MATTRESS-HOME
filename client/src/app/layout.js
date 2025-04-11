import { Nunito } from 'next/font/google'
import '@/app/global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: {
        template: '%s | Mattress Home',
        default: 'Mattress Home',
    },
    manifest: '/site.webmanifest',
    icons: {
        icon: '/favicon-16x16.png',
        icon: '/favicon-32x32.png',
        shortcut: '/shortcut-icon.png',
        apple: '/apple-touch-icon',
    },
}

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

export default RootLayout
