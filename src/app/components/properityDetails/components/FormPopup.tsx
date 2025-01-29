"use client"
import React from "react"
import ContactusForm from "../../contact-us/ContactusForm"
import Button from "../../shared/reusableComponents/Reusablebutton"
import CustomTextAria from "../../shared/reusableComponents/CustomTextAria"
import InputComponent from "../../shared/reusableComponents/InputComponent"
import { useForm } from "react-hook-form"

function FormPopup() {
    const [openForm, setOpenForm] = React.useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <div>
            <Button
                type="button"
                onClick={() => {
                    setOpenForm((prev) => !prev)
                }}
            >
                Reach Us For More
            </Button>

            {openForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-[calc(100%-25px)] p-5 rounded-xl relative">
                        <span
                            className="absolute top-2 flex items-center justify-center w-7 h-7 p-1 rounded-full right-2 cursor-pointer text-white bg-black"
                            onClick={() => setOpenForm(false)}
                        >
                            x
                        </span>
                        <form className="pt-10">
                            <InputComponent
                                className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                                type="text"
                                placeholder="firstName"
                                name="firstName"
                                required
                                onChange={() => {
                                    console.log("InputComponent")
                                }}
                            />
                            {errors.firstName && (
                                // @ts-ignore
                                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                            )}

                            <InputComponent
                                className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                                type="text"
                                placeholder="lastName"
                                name="lastName"
                                required
                                onChange={() => {
                                    console.log("InputComponent")
                                }}
                            />
                            
                            {errors.lastName && ( // @ts-ignore
                             <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}

                            <InputComponent
                                className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                                type="email"
                                placeholder="email"
                                name="email"
                                required
                                onChange={() => {
                                    console.log("InputComponent")
                                }}
                            />
                            {errors.email && (
                                //@ts-ignore
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}

                            {/* <div>
                        <label className="block mb-1">رقم الجوال</label>
                        <input
                            type="text"
                            placeholder="ادخل رقم الجوال"
                            name="mobileNumber"
                            className="w-full p-2 border rounded-md bg-gray-50"
                            {...register("mobileNumber", { required: "رقم الجوال مطلوب" })}
                        />
                        {errors.mobileNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                        )}
                    </div> */}

                            <CustomTextAria
                                className="mt-5 [&_textarea]:bg-bodyBg [_textarea]:!border-0"
                                value=""
                                placeholder="Your Message"
                                name="message"
                                required
                                onChange={() => console.log("text area change")}
                            />
                            <Button className="mt-5" type="submit">
                                send
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormPopup
