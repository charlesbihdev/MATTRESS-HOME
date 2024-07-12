import Link from 'next/link'
import React from 'react'

const WhatsAppLinkButton = ({ product, size, productPrice }) => {
    const phoneNumber = '+233244281122'
    const prodcutName = product.name
    const productSize = product.sizes[size - 1].name
    const Price = productPrice

    const message = `Hello, I want to buy ${prodcutName}. I have selected the size ${productSize} and the total price is GH₵${Price}.`

    const encodedMessage = encodeURIComponent(message)

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(phoneNumber)}&text=${encodedMessage}&type=phone_number&app_absent=0`

    return (
        <>
            <a target="_blank" href={whatsappUrl}>
                <button className="relative flex items-center justify-center w-full px-5 py-2.5 text-white bg-yellow-400 border border-transparent rounded-lg shadow-sm hover:bg-yellow-500">
                    <span className="absolute left-0 flex items-center pl-3">
                        <svg
                            className="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m5-6h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V4a2 2 0 012-2z"
                            />
                        </svg>
                    </span>
                    Buy Now
                </button>
            </a>
        </>
    )
}

export default WhatsAppLinkButton
