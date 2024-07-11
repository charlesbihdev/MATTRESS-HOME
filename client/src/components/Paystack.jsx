'use client'
import React from 'react'
import { PaystackButton } from 'react-paystack'
// import './App.css'
import ApplicationLogo from './ApplicationLogo'

const config = {
    reference: new Date().getTime().toString(),
    email: 'chrlesowusubih@gmail.com',
    currency: 'GHS',
    amount: 200, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
}
console.log(process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) // This should print the correct value now

function PayStack() {
    // you can call this function anything
    const handlePaystackSuccessAction = reference => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference)
        alert(reference.message)
        // alert('Payment complete! Reference: ' + reference)
    }

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        className: 'bg-blue-300',
        text: 'Paystack Button Implementation',
        onSuccess: reference => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    }

    return (
        <div className="App">
            <PaystackButton {...componentProps} />
        </div>
    )
}

export default PayStack
