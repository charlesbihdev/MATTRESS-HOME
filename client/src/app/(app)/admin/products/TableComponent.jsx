'use client'

import { useState } from 'react'
import DeleteModal from './DeleteModal'
import AddProductModal from './AddProductModal'
import { useFetch } from '@/hooks/fetch'
import { useAuth } from '@/hooks/auth'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'
import EditProductModal from './EditPoductModal'

const getCategoryName = category => {
    switch (category) {
        case 1:
            return 'Royal Foam'
        case 2:
            return 'Latex Foam'
        case 3:
            return 'Ashfoam'
        default:
            return 'Foreign Brands'
    }
}

const TableComponent = () => {
    const router = useRouter()

    const { deleteProduct } = useAuth()
    const { data, error } = useFetch().fetchWithAllPrices()

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    const [selectedProductId, setSelectedProductId] = useState(null)

    const handleClick = (setState, id) => {
        setState(true)
        setSelectedProductId(id)

        // console.log(showEditModal)
    }

    const handleDeleteProduct = async (setErrors, setStatus, productId) => {
        try {
            await deleteProduct({ setErrors, setStatus, productId })
            router.refresh()
        } catch (error) {
            // Handle any other errors that might occur
            setErrors(['An unexpected error occurred. Please try again.'])
        }

        handleCloseModal(setShowDeleteModal)
    }

    const handleCloseModal = setState => {
        setState(false)
    }

    if (error) {
        return <div>Error fetching product details</div>
    }

    if (errors.length > 0) {
        return <div>Error Deleting product details</div>
    }

    if (!data) {
        return (
            <div className="text-center my-20">
                <Loader />
            </div>
        )
    }
    const productsList = data['products']

    // console.log(productsList)

    return (
        <div className="mt-2 overflow-x-auto">
            {data && (
                <>
                    <button
                        type="button"
                        onClick={() => {
                            setShowAddProductModal(true)
                        }}
                        className="py-2 px-3 ml-4 my-3 flex items-center text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            className="mr-1"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Add
                    </button>
                    {status && (
                        <div
                            className={`mb-2 p-2 text-sm ${
                                status === 'Product deleted successfully'
                                    ? 'text-green-700 bg-green-100'
                                    : 'text-red-700 bg-red-100'
                            }`}>
                            {status}
                        </div>
                    )}
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    Product
                                </th>
                                <th scope="col" className="p-4">
                                    Category
                                </th>
                                <th scope="col" className="p-4">
                                    Rating
                                </th>
                                <th scope="col" className="p-4">
                                    Sales
                                </th>
                                <th scope="col" className="p-4">
                                    K/S
                                </th>
                                <th scope="col" className="p-4">
                                    Q/D
                                </th>
                                <th scope="col" className="p-4">
                                    L/D
                                </th>
                                <th scope="col" className="p-4">
                                    M/D
                                </th>
                                <th scope="col" className="p-4">
                                    S/D
                                </th>
                                <th scope="col" className="p-4">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsList.map(product => (
                                <tr
                                    key={product.id}
                                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center mr-3">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.pictures[0]?.image_path}`}
                                                alt={product.name}
                                                className="h-8 w-auto mr-3"
                                            />
                                            {product.name}
                                        </div>
                                    </th>
                                    <td className="px-4 py-3">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                            {getCategoryName(
                                                product.category_id,
                                            )}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center">
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <svg
                                                        key={index}
                                                        aria-hidden="true"
                                                        className={`w-5 h-5 ${index < product.stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ),
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        100
                                    </td>
                                    {product.prices.map(price => (
                                        <td
                                            key={price.id}
                                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {price.price}
                                        </td>
                                    ))}
                                    <td className="px-4 py-3 flex items-center justify-start space-x-2">
                                        <button
                                            type="button"
                                            className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                            onClick={() =>
                                                handleClick(
                                                    setShowDeleteModal,
                                                    product.id,
                                                )
                                            }>
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

                                        <button
                                            type="button"
                                            className="flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                                            onClick={() =>
                                                handleClick(
                                                    setShowEditModal,
                                                    product.id,
                                                )
                                            }>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-2 -ml-0.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0l-1.172 1.172 2.828 2.828 1.172-1.172a2 2 0 000-2.828zM3 17a1 1 0 001 1h4a1 1 0 00.707-.293l10-10-4.828-4.828-10 10A1 1 0 004 13v4a1 1 0 01-1 1zM4 15v-2.586l9-9 2.586 2.586-9 9H4z" />
                                            </svg>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showDeleteModal && (
                        <DeleteModal
                            showModal={showDeleteModal}
                            handleCloseModal={() =>
                                handleCloseModal(setShowDeleteModal)
                            }
                            handleDeleteProduct={handleDeleteProduct}
                            productId={selectedProductId}
                            setErrors={setErrors}
                            setStatus={setStatus}
                        />
                    )}
                    {showAddProductModal && (
                        <AddProductModal
                            showAddProductModal={showAddProductModal}
                            setShowAddProductModal={setShowAddProductModal}
                        />
                    )}

                    {showEditModal && (
                        <EditProductModal
                            productId={selectedProductId}
                            showEditModal={showEditModal}
                            setShowEditModal={setShowEditModal}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default TableComponent
