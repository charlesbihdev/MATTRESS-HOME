// components/Pagination.js
import Link from 'next/link'

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <Link
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </Link>
                </li>
                {[1, 2, 3, 4, 5].map(page => (
                    <li key={page}>
                        <Link
                            href={`#${page}`}
                            aria-current={page === 3 ? 'page' : undefined}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                page === 3
                                    ? 'text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white'
                                    : ''
                            }`}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
