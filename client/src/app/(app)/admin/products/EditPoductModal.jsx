import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { useFetch } from '@/hooks/fetch'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const EditProductModal = ({ showEditModal, setShowEditModal, productId }) => {
    const router = useRouter()
    const { editProduct } = useAuth()

    const { fetchProductById } = useFetch()
    const { data, error } = fetchProductById(productId)

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
    const [isFileInputTriggered, setIsFileInputTriggered] = useState(false)

    const toggleModal = () => {
        setShowEditModal(false)
    }

    const handleChange = e => {
        const { name, value } = e.target
        if (
            name === 'ks' ||
            name === 'qs' ||
            name === 'ls' ||
            name === 'ms' ||
            name === 'ss'
        ) {
            setProductData(prevData => ({
                ...prevData,
                prices: {
                    ...prevData.prices,
                    [name]: value,
                },
            }))
        } else {
            setProductData(prevData => ({ ...prevData, [name]: value }))
        }
    }

    const handleImageChange = e => {
        const newImages = Array.from(e.target.files)
        setIsFileInputTriggered(true)
        setImages(newImages)
    }

    useEffect(() => {
        if (data) {
            setProductData({
                name: data.product.name,
                ratings: data.product.stars,
                category_id: data.product.category_id,
                description: data.product.description,
                prices: {
                    ks:
                        data.product.sizes.find(size => size.name === 'K/S')
                            ?.pivot.price || '',
                    qs:
                        data.product.sizes.find(size => size.name === 'Q/S')
                            ?.pivot.price || '',
                    ls:
                        data.product.sizes.find(size => size.name === 'L/S')
                            ?.pivot.price || '',
                    ms:
                        data.product.sizes.find(size => size.name === 'M/S')
                            ?.pivot.price || '',
                    ss:
                        data.product.sizes.find(size => size.name === 'S/S')
                            ?.pivot.price || '',
                },
            })
            setImages(data.product.pictures || [])
        } else if (error) {
            setErrors([error.message])
        }
    }, [data, error])

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

        if (isFileInputTriggered) {
            images.forEach((image, index) => {
                if (typeof image === 'object') {
                    formData.append(`images[${index}]`, image)
                }
            })
        }

        try {
            await editProduct({ setErrors, setStatus, formData, productId })
            router.refresh()
        } catch (error) {
            setErrors(['An unexpected error occurred. Please try again.'])
        }
    }

    return (
        <>
            <div
                tabIndex="-1"
                aria-hidden="true"
                className={`pt-10 top-7 sm:pt-20 md:pt-60 text-left fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center h-full w-full ${
                    showEditModal ? 'flex' : '!hidden'
                }`}>
                <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-2xl lg:mt-20 font-semibold text-blue-500 dark:text-white">
                                Edit Product
                            </h3>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {images?.map((picture, index) => (
                                <div
                                    key={picture.id || index}
                                    className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                    <Image
                                        src={
                                            picture.image_path
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${picture.image_path}`
                                                : URL.createObjectURL(picture)
                                        }
                                        alt={productData.name}
                                        className="w-full"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                            ))}
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
                                        value={productData.category_id}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleChange}
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
                                        Description
                                    </Label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Product description here"
                                        value={productData.description}
                                        onChange={handleChange}
                                    />
                                    <InputError
                                        messages={errors.description}
                                        className="mt-2"
                                    />
                                </div>
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
                                        />
                                        {images.length > 0 && (
                                            <div className="mt-2">
                                                {images.map((image, index) => {
                                                    const imageUrl =
                                                        image instanceof File
                                                            ? URL.createObjectURL(
                                                                  image,
                                                              )
                                                            : `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.image_path}`

                                                    return (
                                                        <div
                                                            key={index}
                                                            className="flex items-center space-x-2">
                                                            <img
                                                                src={imageUrl}
                                                                alt={`preview ${index}`}
                                                                className="w-16 h-16 object-cover rounded-lg"
                                                            />
                                                            <p className="text-gray-700 dark:text-gray-200">
                                                                {image.name ||
                                                                    image.image_path
                                                                        .split(
                                                                            '/',
                                                                        )
                                                                        .pop()}
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {status && (
                                <div
                                    className={`mt-4 p-2 text-sm ${
                                        status ===
                                        'Product updated successfully'
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
                                        Update Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProductModal
