import { useState } from 'react'
import { useAuth } from '@/hooks/auth'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useRouter } from 'next/navigation'

const AddProductModal = ({ setShowAddProductModal, showAddProductModal }) => {
    const router = useRouter()

    const { addProduct } = useAuth()
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState()
    const [productData, setProductData] = useState({
        name: '',
        ratings: '',
        category_id: '',
        description: '',
        prices: {
            ks: '',
            qs: '',
            ls: '',
            ms: '',
            ss: '',
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
            name === 'qs' ||
            name === 'ls' ||
            name === 'ms' ||
            name === 'ss'
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
        formData.append('ratings', productData.ratings)
        formData.append('category_id', productData.category_id)
        formData.append('description', productData.description)
        Object.keys(productData.prices).forEach(key => {
            formData.append(key, productData.prices[key])
        })
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image)
        })

        try {
            await addProduct({ setErrors, setStatus, formData })
            router.refresh()
            setProductData({
                name: '',
                ratings: '',
                category_id: '',
                description: '',
                prices: {
                    ks: '',
                    qs: '',
                    ls: '',
                    ms: '',
                    ss: '',
                },
            })
            setImages([])
        } catch (error) {
            // Handle any other errors that might occur
            setErrors(['An unexpected error occurred. Please try again.'])
        }
    }
    return (
        <>
            <div
                tabIndex="-1"
                aria-hidden="true"
                className={`pt-10 sm:pt-20 md:pt-60 text-left fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center h-full w-full ${
                    showAddProductModal ? 'flex' : '!hidden'
                }`}>
                {/* Display status message if there is one */}

                <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-2xl lg:mt-20 font-semibold text-blue-500 dark:text-white">
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type product name"
                                        required
                                        value={productData.name}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.name}
                                        className="mt-2"
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        <option value="5">
                                            Mattress Home Special
                                        </option>
                                    </select>
                                    <InputError
                                        messages={errors.category_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ratings"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Rating
                                    </Label>
                                    <input
                                        type="number"
                                        name="ratings"
                                        id="ratings"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Rating"
                                        required
                                        value={productData.ratings}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.ratings}
                                        className="mt-2"
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="K/S"
                                        required
                                        value={productData.prices.ks}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.ks}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="qs"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (Q/S)
                                    </Label>
                                    <input
                                        type="number"
                                        name="qs"
                                        id="qs"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Q/S"
                                        required
                                        value={productData.prices.qs}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.qs}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ls"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (L/S)
                                    </Label>
                                    <input
                                        type="number"
                                        name="ls"
                                        id="ls"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="L/S"
                                        required
                                        value={productData.prices.ls}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.ls}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ms"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (M/S)
                                    </Label>
                                    <input
                                        type="number"
                                        name="ms"
                                        id="ms"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="M/S"
                                        required
                                        value={productData.prices.ms}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.ms}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="ss"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Price (S/S)
                                    </Label>
                                    <input
                                        type="number"
                                        name="ss"
                                        id="ss"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="S/S"
                                        required
                                        value={productData.prices.ss}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.ss}
                                        className="mt-2"
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter product description"
                                        required
                                        value={productData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <InputError
                                    messages={errors.description}
                                    className="mt-2"
                                />
                                <div className="sm:col-span-2">
                                    <Label
                                        htmlFor="images"
                                        className="block mb-2 font-medium text-gray-900 dark:text-white">
                                        Images
                                    </Label>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-40 overflow-auto">
                                        <input
                                            type="file"
                                            name="images"
                                            id="images"
                                            multiple
                                            className="w-full cursor-pointer"
                                            onChange={handleImageChange}
                                            required
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
                            {status && (
                                <div
                                    className={`mt-4 p-3 text-sm ${
                                        status === 'Product added successfully'
                                            ? 'text-green-700 bg-green-100'
                                            : 'text-red-700 bg-red-100'
                                    }`}>
                                    {status}
                                </div>
                            )}
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductModal
