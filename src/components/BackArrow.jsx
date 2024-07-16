'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const BackArrow = () => {
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className="ml-7 my-4 py-2 flex items-center gap-4 bg-blue-100 px-5 cursor-pointer rounded-xl">
            <Image
                src="/svg/back-arrow.svg"
                alt="back arrow"
                height={34}
                width={34}
            />
            Back
        </button>
    )
}

export default BackArrow
