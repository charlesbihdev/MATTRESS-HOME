import { useState } from 'react'
import { useAuth } from '@/hooks/auth'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Button from '@/components/Button'

const AddProductModal = ({ setShowAddProductModal, showAddProductModal }) => {
    const { addProduct } = useAuth()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [productData, setProductData] = useState({
        name: '',
        stars: '',
        category_id: '',
        description: '',
        prices: {
            ks: '',
            qd: '',
            ld: '',
            md: '',
            sd: '',
        },
    })
    const [images, setImages] = useState([])

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowAddProductModal(false)
    }

    // Function to handle input changes
    const handleChange = e => {
        const { name, value } = e.target
        if (
            name === 'ks' ||
            name === 'qd' ||
            name === 'ld' ||
            name === 'md' ||
            name === 'sd'
        ) {
            setProductData({
                ...productData,
                prices: {
                    ...productData.prices,
                    [name]: value,
                },
            })
        } else {
            setProductData({ ...productData, [name]: value })
        }
    }

    // Function to handle image upload changes
    const handleImageChange = e => {
        const newImages = Array.from(e.target.files)
        setImages(prevImages => [...prevImages, ...newImages])
    }

    // Function to handle form submission
    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', productData.name)
        formData.append('stars', productData.stars)
        formData.append('category_id', productData.category_id)
        formData.append('description', productData.description)
        Object.keys(productData.prices).forEach(key => {
            formData.append(key, productData.prices[key])
        })
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image)
        })

        try {
            const response = await addProduct({
                formData,
                setErrors,
                setStatus,
            })
            setStatus(response.data.message)
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                setErrors(Object.values(error.response.data.errors).flat())
            } else {
                setErrors(['An unexpected error occurred. Please try again.'])
            }
        }
    }

    return (
        <>
            <div
                id="createProductModal"
                tabIndex="-1"
                aria-hidden="true"
                className={`pt-40 text-left fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center h-full w-full ${
                    showAddProductModal ? 'flex' : '!hidden'
                }`}>
                <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Add Product
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <Label
                                        htmlFor="productName"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Product Name
                                    </Label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="productName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required
                                        value={productData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="category_id"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Category
                                    </Label>
                                    <select
                                        id="category_id"
                                        name="category_id"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={handleChange}
                                        value={productData.category_id}
                                        required>
                                        <option value="">
                                            Select category
                                        </option>
                                        <option value="1">Royal Foam</option>
                                        <option value="2">Latex Foam</option>
                                        <option value="3">Ashfoam</option>
                                        <option value="4">
                                            Foreign Brands
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <Label
                                        htmlFor="stars"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Rating
                                    </Label>
                                    <input
                                        type="number"
                                        name="stars"
                                        id="stars"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Rating"
                                        required
                                        value={productData.stars}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ks"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (K/S)
                                    </Label>
                                    <input
                                        type="number"
                                        name="ks"
                                        id="ks"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="K/S"
                                        required
                                        value={productData.prices.ks}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="qd"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (Q/D)
                                    </Label>
                                    <input
                                        type="number"
                                        name="qd"
                                        id="qd"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Q/D"
                                        required
                                        value={productData.prices.qd}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ld"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (L/D)
                                    </Label>
                                    <input
                                        type="number"
                                        name="ld"
                                        id="ld"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="L/D"
                                        required
                                        value={productData.prices.ld}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="md"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (M/D)
                                    </Label>
                                    <input
                                        type="number"
                                        name="md"
                                        id="md"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="M/D"
                                        required
                                        value={productData.prices.md}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="sd"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (S/D)
                                    </Label>
                                    <input
                                        type="number"
                                        name="sd"
                                        id="sd"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="S/D"
                                        required
                                        value={productData.prices.sd}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Label
                                        htmlFor="description"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Product Description
                                    </Label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="5"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter product description"
                                        required
                                        value={productData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Label
                                        htmlFor="images"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Images
                                    </Label>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 h-40 overflow-auto">
                                        <input
                                            type="file"
                                            name="images"
                                            id="images"
                                            multiple
                                            className="w-full cursor-pointer"
                                            onChange={handleImageChange}
                                        />
                                        {images.length > 0 && (
                                            <div className="mt-2">
                                                {images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center space-x-2">
                                                        <img
                                                            src={URL.createObjectURL(
                                                                image,
                                                            )}
                                                            alt={`preview ${index}`}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                        <p className="text-gray-700 dark:text-gray-200">
                                                            {image.name}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <div>
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="inline-flex items-center py-2.5 px-5 mx-7 font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center py-2.5 px-5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Display errors if there are any */}
                        {errors.length > 0 && (
                            <div className="mt-4">
                                {errors.map((error, index) => (
                                    <p key={index} className="text-red-500">
                                        {error}
                                    </p>
                                ))}
                            </div>
                        )}
                        {/* Display status message if there is one */}
                        {status && (
                            <div className="mt-4">
                                <p className="text-green-500">{status}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductModal
