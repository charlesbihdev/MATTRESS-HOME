import Image from 'next/image'
import React from 'react'

const ServicesMain = () => {
    return (
        <section className="bg-white py-12 sm:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm font-semibold mb-3">
                        Mattress Experts & Sleep Advisors
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        At Mattress Home, we are committed to offering top-notch
                        solutions for your sleep needs. From buying a new
                        mattress to restoring your old one, we've got you
                        covered.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Service Information */}
                    <div className="space-y-10">
                        {/* Service Cards */}
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg border border-yellow-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-yellow-400 text-white p-2 rounded-full mr-3 inline-flex items-center justify-center w-8 h-8">
                                    1
                                </span>
                                Walk in Re-covering Polyester Fabric
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Single Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 180
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Medium Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 200
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Full Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 550
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Queen Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 650
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                                    <h3 className="font-medium text-gray-700">
                                        King Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 750
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg border border-yellow-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-yellow-400 text-white p-2 rounded-full mr-3 inline-flex items-center justify-center w-8 h-8">
                                    2
                                </span>
                                Foam Repair & Renovation
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Single Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 350
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Medium Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 380
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Full Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 750
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-medium text-gray-700">
                                        Queen Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 950
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                                    <h3 className="font-medium text-gray-700">
                                        King Size
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900">
                                        GH₵ 1050
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://wa.link/v5skus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 rounded-lg bg-yellow-500 px-6 py-4 text-center text-lg font-semibold text-white shadow-md hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a
                                href="/about"
                                className="flex-1 rounded-lg border-2 border-gray-300 px-6 py-4 text-center text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                Learn More{' '}
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative order-first lg:order-last mb-8 lg:mb-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl blur opacity-20"></div>
                        <div className="relative">
                            <Image
                                src="/images/helpdesk.png"
                                alt="Mattress Home service experts"
                                className="w-full rounded-2xl shadow-xl"
                                width={1200}
                                height={800}
                                priority
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                                <p className="font-semibold text-gray-900">
                                    Our Mattress Experts or Sleep Advisors are
                                    ready to assist you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesMain
