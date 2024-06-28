// ModalComponent.js

const DeleteModal = () => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-xl">
                <h2 className="text-lg font-semibold text-gray-900">
                    Delete Confirmation
                </h2>
                <p className="text-gray-700">
                    Are you sure you want to delete this item?
                </p>
                <div className="mt-4 flex justify-end">
                    <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none">
                        Delete
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 focus:outline-none">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
