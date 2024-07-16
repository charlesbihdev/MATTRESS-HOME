const FloatingButton = () => {
    return (
        <div className="group fixed right-16 bottom-6 p-2 flex items-end justify-end w-36 h-36">
            {/* Main Button */}
            <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-white border-2 border-yellow-500 z-50 absolute">
                <img
                    src="/svg/customer-service.svg"
                    className="w-8 h-8 text-white"
                />
            </div>
            {/* Sub Button Left */}
            <a
                href="https://wa.me/+233244281122?text=Hello,%20I%20need%20help%20with%20....."
                target="_blank"
                rel="noreferrer"
                className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-400 hover:bg-green-500 text-white">
                <div>
                    <img
                        src="/svg/whatsapp-black.svg"
                        className="w-8 h-8 text-black"
                    />
                </div>
            </a>
            {/* Sub Button Top */}
            <a
                target="_blank"
                rel="noreferrer"
                className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white"
                href="tel:+233548715098">
                <div>
                    <img src="/svg/phone.svg" className="w-8 h-8 text-black" />
                </div>
            </a>
        </div>
    )
}

export default FloatingButton
