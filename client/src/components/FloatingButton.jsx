// import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const FloatingButton = () => {
    return (
        <div className="group fixed right-16 bottom-6 p-2 flex items-end justify-end w-36 h-36">
            {/* Main Button */}
            <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-yellow-300 to-red-300 z-50 absolute">
                <img
                    src="/svg/customer-service.svg"
                    className="w-8 h-8 text-black"
                />
            </div>
            {/* Sub Button Left */}
            <Link
                href="https://wa.me/+14132120817?text=Hey,%20Tell%20us%20what%20you%20want"
                className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-300 hover:bg-green-400 text-white">
                <div>
                    <img
                        src="/svg/whatsapp-black.svg"
                        className="w-8 h-8 text-black"
                    />
                </div>
            </Link>
            {/* Sub Button Top */}
            <Link
                className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-blue-300 hover:bg-blue-400 text-white"
                href="tel:+233548715098">
                <div>
                    {/* <EyeSlashIcon className="w-5 h-5 text-black" /> */}
                    <img
                        src="/svg/whatsapp-black.svg"
                        className="w-8 h-8 text-black"
                    />
                </div>
            </Link>
        </div>
    )
}

export default FloatingButton
