'use client'

import { useState } from 'react'
import DeleteModal from './DeleteModal'
import AddProductModal from './AddProductModal'

const TableComponent = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showAddProductModal, setShowAddProductModal] = useState(false)

    const handleClick = setState => {
        setState(true)
    }

    const handleCloseModal = setState => {
        setState(false)
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <button
                        type="button"
                        onClick={() => {
                            handleClick(setShowAddProductModal)
                        }}
                        className="py-2 px-3 ml-4 mt-3 flex items-center text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            className="mr-1"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Add
                    </button>

                    {/* <button className="bg-black text-black">Add product</button> */}

                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="checkbox-all"
                                    className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="p-4">
                            Product
                        </th>
                        <th scope="col" className="p-4">
                            Category
                        </th>
                        <th scope="col" className="p-4">
                            Stock
                        </th>
                        <th scope="col" className="p-4">
                            Sales/Day
                        </th>
                        <th scope="col" className="p-4">
                            Sales/Month
                        </th>
                        <th scope="col" className="p-4">
                            Rating
                        </th>
                        <th scope="col" className="p-4">
                            Sales
                        </th>
                        <th scope="col" className="p-4">
                            Revenue
                        </th>
                        <th scope="col" className="p-4">
                            Last Update
                        </th>
                        <th scope="col" className="p-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onClick={event => event.stopPropagation()}
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="checkbox-table-search-1"
                                    className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center mr-3">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png"
                                    alt="iMac Front Image"
                                    className="h-8 w-auto mr-3"
                                />
                                Apple iPad Air
                            </div>
                        </th>
                        <td className="px-4 py-3">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                Tablet
                            </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-500"></div>
                                287
                            </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            0.47
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1.00
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full inline-block mr-2 bg-blue-500"></div>
                                1.56k
                            </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $23.82k
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full inline-block mr-2 bg-green-500"></div>
                                5 days ago
                            </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    data-drawer-target="drawer-update-product"
                                    data-drawer-show="drawer-update-product"
                                    aria-controls="drawer-update-product"
                                    className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2 -ml-0.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Edit
                                </button>
                                {/* <button
                                    type="button"
                                    data-drawer-target="drawer-read-product-advanced"
                                    data-drawer-show="drawer-read-product-advanced"
                                    aria-controls="drawer-read-product-advanced"
                                    className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4 mr-2 -ml-0.5">
                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                        />
                                    </svg>
                                    Preview
                                </button> */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleClick(setShowDeleteModal)
                                    }
                                    className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2 -ml-0.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            {showDeleteModal && <DeleteModal />}
            {showAddProductModal && (
                <AddProductModal
                    setShowAddProductModal={setShowAddProductModal}
                    showAddProductModal={showAddProductModal}
                />
            )}
        </div>
    )
}

export default TableComponent
