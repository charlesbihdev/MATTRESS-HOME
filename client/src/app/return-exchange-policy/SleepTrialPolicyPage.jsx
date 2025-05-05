import React from 'react'

const SleepTrialPolicyPage = () => {
    return (
        <section className="overflow-hidden bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        21 Night Sleep Trial Policy & Mattress Care Tips
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Mattress Home prioritizes your comfort and sleep,
                        ensuring a satisfactory experience with our products.
                        Below are the details of our Sleep Trial Policy and
                        Mattress Care Tips.
                    </p>
                </div>

                <div className="mt-12 space-y-8 text-lg text-gray-600">
                    {/* Sleep Trial Policy */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            21 Night Sleep Trial Policy
                        </h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <strong>Adjustment Period:</strong> 14 nights to
                                adjust to the new mattress.
                            </li>
                            <li>
                                <strong>Return/Exchange:</strong> One exchange
                                or return per purchase within 21 days of
                                delivery.
                            </li>
                            <li>
                                <strong>Fees:</strong> 20% return processing
                                charge and 200 GH₵ delivery fee.
                            </li>
                            <li>
                                <strong>Applicability:</strong> Only for
                                purchased mattresses.
                            </li>
                            <li>
                                <strong>Inspection:</strong> Mattress will be
                                inspected before refund or exchange.
                            </li>
                            <li>
                                <strong>Exclusions:</strong> Damaged, stained,
                                or contaminated mattresses cannot be returned or
                                exchanged, including:
                                <ul className="mt-2 list-disc list-inside">
                                    <li>Ripped fabric</li>
                                    <li>Unsanitary conditions</li>
                                    <li>Stains</li>
                                    <li>Damage caused by the customer</li>
                                    <li>Contamination with insects</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Mattress Care Tips */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Breaking in Your Mattress
                        </h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <strong>Let it breathe:</strong> Allow your new
                                mattress to air out for a few hours before use.
                            </li>
                            <li>
                                <strong>Apply pressure:</strong> Use weight
                                (like a few books) on the mattress to help it
                                settle in.
                            </li>
                            <li>
                                <strong>Be patient:</strong> Give the mattress
                                some time to fully adjust and reach its optimal
                                comfort level.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.link/v5skus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-yellow-400 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                        Contact Our Experts on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SleepTrialPolicyPage
