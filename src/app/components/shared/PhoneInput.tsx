// @ts-nocheck

"use client"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { isValidPhoneNumber } from "react-phone-number-input"
import { PhoneValidationExampleProps } from "./reusableComponents/types/types"
import { useState } from "react"

const PhoneValidationExample = ({ label, className, value, onChange }: PhoneValidationExampleProps) => {
    const [error, setError] = useState("")

    const handleChange = (value) => {
        onChange(value) // Pass the value back to the form

        if (value && !isValidPhoneNumber(value)) {
            setError("Invalid phone number.")
        } else {
            setError("")
        }
    }

    return (
        <div className={`${className ? className : ""}`}>
            {label && <label>{label}</label>}
            <PhoneInput
                className="phone-input-wrapper bg-white p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                  [&_input]:outline-none [&_input]:border-0"
                defaultCountry="EG"
                value={value}
                onChange={handleChange}
                international
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}

export default PhoneValidationExample
