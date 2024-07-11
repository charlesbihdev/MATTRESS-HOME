'use client'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import { useAuth } from '@/hooks/auth'

const OrderSummary = ({ product }) => {
    // const { addPayment } = useAuth()

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [formData, setFormData] = useState({
        region: 'Greater Accra',
        city: '',
        email: '',
        phone: '',
        address: '',
        name: '',
    })

    const deliveryFee = 100
    const price = product.price * 100
    const reference = new Date().getTime().toString()

    const config = {
        reference: reference,
        email: formData.email,
        currency: 'GHS',
        amount: price,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    }

    const handlePaystackSuccessAction = response => {
        alert('Payment complete! Reference: ' + response.status)
    }

    const handlePaystackCloseAction = () => {
        console.log('Payment dialog closed')
    }

    const componentProps = {
        ...config,
        text: 'Proceed to Payment',
        onSuccess: handlePaystackSuccessAction,
        onClose: handlePaystackCloseAction,
    }

    const handleChange = e => {
        const { id, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Add any additional form validation if necessary
        if (
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.city ||
            !formData.name
        ) {
            alert('Please fill out all required fields.')
            return
        }
        // If all validation passes, the Paystack button will handle payment submission
    }

    return (
        <section className="bg-white py-8 px-4 antialiased dark:bg-gray-900 md:py-16">
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Delivery Details
                            </h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="Kofi Owusu"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Your email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="name@gmail.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="region"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Region*
                                    </label>
                                    <select
                                        id="region"
                                        value={formData.region}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                                        <option value="Greater Accra">
                                            Greater Accra
                                        </option>
                                        <option value="Ashanti">Ashanti</option>
                                        <option value="Central">Central</option>
                                        <option value="Western">Western</option>
                                        <option value="Eastern">Eastern</option>
                                        <option value="Northern">
                                            Northern
                                        </option>
                                        <option value="Upper East">
                                            Upper East
                                        </option>
                                        <option value="Upper West">
                                            Upper West
                                        </option>
                                        <option value="Volta">Volta</option>
                                        <option value="Bono">Bono</option>
                                        <option value="Bono East">
                                            Bono East
                                        </option>
                                        <option value="Ahafo">Ahafo</option>
                                        <option value="Western North">
                                            Western North
                                        </option>
                                        <option value="Oti">Oti</option>
                                        <option value="North East">
                                            North East
                                        </option>
                                        <option value="Savannah">
                                            Savannah
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="city"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        City*
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Kumasi"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Address*
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Asokwa main street, close to JW Church"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Phone Number*
                                    </label>
                                    <div className="flex items-center">
                                        <button
                                            id="dropdown-phone-button-3"
                                            className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                            type="button">
                                            <svg
                                                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="#006B3F"
                                                />
                                                <rect
                                                    width="24"
                                                    height="16"
                                                    fill="#FCDD09"
                                                    y="8"
                                                />
                                                <rect
                                                    width="24"
                                                    height="8"
                                                    fill="#D52B1E"
                                                    y="16"
                                                />
                                                <polygon
                                                    fill="#000"
                                                    points="12,9 13.9,14 9,11.8 15,11.8 10.1,14"
                                                />
                                            </svg>
                                            +233
                                        </button>
                                        <input
                                            type="text"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-e-lg border border-l-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="244 85 6789"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="flow-root">
                            <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Product Name
                                    </dt>
                                    <dd className="text-xl font-bold text-yellow-400 dark:text-white">
                                        {`${product.name} , ${product.size}`}
                                    </dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Subtotal
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                                        GHS {product.price}
                                    </dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Savings
                                    </dt>
                                    <dd className="text-base font-medium text-green-500">
                                        GHS 0
                                    </dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Delivery
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                                        GHS {deliveryFee}
                                    </dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Tax
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                                        GHS 0
                                    </dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                                        GHS {product.price + deliveryFee}
                                    </dd>
                                </dl>

                                <PaystackButton
                                    {...componentProps}
                                    className="flex w-full items-center justify-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 my-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default OrderSummary
