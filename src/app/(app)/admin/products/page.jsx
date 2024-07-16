import React from 'react'
import TableComponent from './TableComponent'
// import ModalComponent from './DeleteModal'

const page = () => {
    return (
        <div className="pt-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200 text-center">
                        <TableComponent />
                        {/* <ModalComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
