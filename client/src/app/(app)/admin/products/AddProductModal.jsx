'use'
import { useState } from 'react'

const AddProductModal = ({ setShowAddProductModal, showAddProductModal }) => {
    // const [showModal, setShowModal] = useState(true)

    const toggleModal = () => {
        setShowAddProductModal(false)
    }

    return (
        <>
            <div
                id="createProductModal"
                tabIndex="-1"
                aria-hidden="true"
                className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center h-full w-full ${showAddProductModal ? 'flex' : '!hidden'}`}>
                <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Add Product
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleModal}>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected>
                                            Select category
                                        </option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">
                                            Gaming/Console
                                        </option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="brand"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Product brand"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$2999"
                                        required
                                    />
                                </div>
                                <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                                    <div>
                                        <label
                                            htmlFor="weight"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Item weight (kg)
                                        </label>
                                        <input
                                            type="number"
                                            name="weight"
                                            id="weight"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="12"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="length"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Length (cm)
                                        </label>
                                        <input
                                            type="number"
                                            name="length"
                                            id="length"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="105"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="breadth"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Breadth (cm)
                                        </label>
                                        <input
                                            type="number"
                                            name="breadth"
                                            id="breadth"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="15"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="width"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Width (cm)
                                        </label>
                                        <input
                                            type="number"
                                            name="width"
                                            id="width"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="68"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product description here"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="submit"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Add product
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 rounded-lg border border-gray-300 text-sm font-medium px-4 py-2 hover:text-primary-700 focus:outline-none focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    onClick={toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductModal
