// @ts-nocheck

"use client"
import React from "react"
import { useForm, Controller } from "react-hook-form"
import Button from "../shared/reusableComponents/Reusablebutton"
import InputComponent from "../shared/reusableComponents/InputComponent"
import CustomTextAria from "../shared/reusableComponents/CustomTextAria"
import Image from "next/image"
import PhoneValidationExample from "../shared/PhoneInput"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Divider from "../shared/Divider"
import CustomSelect from "../shared/reusableComponents/CustomSelect"
import Size from "../icons/Size"
import Upload_cover from "../shared/reusableComponents/Upload_Cover"

const ListYourPropertyForm = () => {
    const [file, setFile] = React.useState<any>(null)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const contactData = [
        {
            name: "Wide Audience Reach",
            value: "Your property will be visible to thousands of potential buyers and renters.",
            iconName: "simple-line-icons:check",
        },
        {
            name: "Tailored Marketing",
            value: "We use targeted strategies to showcase your property to the right audience.",
            iconName: "simple-line-icons:check",
        },
        {
            name: "Expert Support",
            value: "Our team guides you through the listing process, ensuring everything is seamless.",
            iconName: "simple-line-icons:check",
        },
        {
            name: "Luxury Focus",
            value: "We specialize in luxury real estate, attracting premium clients.",
            iconName: "simple-line-icons:check",
        },
        {
            name: "Fast Results",
            value: "Get noticed quickly and close deals faster with our platform.",
            iconName: "simple-line-icons:check",
        },
    ]

    const onSubmit = (data) => {
        console.log(data)
        // Handle form submission
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white-50 rounded-lg space-y-4 col-span-12 lg:col-span-7 md:order-2 lg:order-1 px-5 py-5 max-md:order-2 text-sm md:text-base"
        >
            <div className="flex gap-5">
                <div className="w-1/2 border border-gray-300 bg-white rounded-lg p-5">
                    <h2 className="text-4xl mb-5">List Your Property</h2>
                    <p className="text-xl font-light mb-5">
                        Share your details to list your property for everyone to see.
                    </p>
                    <h3 className="text-xl font-light mb-5">Owner Details</h3>

                    <InputComponent
                        className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                        type="text"
                        label="Full Name"
                        placeholder="Full Name"
                        name="fullName"
                        required
                        onChange={() => {
                            console.log("InputComponent")
                        }}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}

                    <PhoneValidationExample
                        className="mt-5 [&_.phone-input-wrapper]:!bg-bodyBg [&_input]:!bg-bodyBg [&_.phone-input-wrapper]:!p-0 [&_.phone-input-wrapper]:!pl-3 [&_.phone-input-wrapper]:!gap-2 [&_input]:!p-4 [&_input]:!pl-0 [&_.phone-input-wrapper]:!border-0"
                        label="Phone Number"
                    />

                    <InputComponent
                        className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                        type="email"
                        label="Email Address"
                        placeholder="Email Address"
                        name="email"
                        required
                        onChange={() => {
                            console.log("InputComponent")
                        }}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                    <Divider className="my-5" />

                    <h3 className="text-xl font-light mb-5">Owner Details</h3>

                    <InputComponent
                        className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0"
                        type="text"
                        label="Asking Price"
                        placeholder="Asking Price"
                        name="price"
                        required
                        onChange={() => {
                            console.log("InputComponent")
                        }}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}

                    <CustomSelect
                        width="100%"
                        options={[
                            { value: "off-plan", label: "off-plan" },
                            { value: "ready-to-move", label: "ready-to-move" },
                        ]}
                        onChange={(value) => console.log(value)}
                        label="Category"
                        className="mt-5"
                    />

                    <CustomSelect
                        width="100%"
                        options={[
                            { value: "Proeprty Type1", label: "Proeprty Type1" },
                            { value: "Proeprty Type2", label: "Proeprty Type2" },
                        ]}
                        onChange={(value) => console.log(value)}
                        label="Proeprty Type"
                        className="mt-5"
                    />

                    <CustomSelect
                        width="100%"
                        options={[
                            { value: "City1", label: "City1" },
                            { value: "City2", label: "City2" },
                        ]}
                        onChange={(value) => console.log(value)}
                        label="City"
                        className="mt-5"
                    />

                    <CustomSelect
                        width="100%"
                        options={[
                            { value: "area1", label: "area1" },
                            { value: "area2", label: "area2" },
                        ]}
                        onChange={(value) => console.log(value)}
                        label="Area"
                        className="mt-5"
                    />

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

                    <div className="mt-5">
                        <Upload_cover multi setFile={setFile} />
                    </div>

                    <CustomTextAria
                        className="mt-5 [&_textarea]:bg-bodyBg [&_textarea]:!border-0"
                        value=""
                        label="Proeprty Description"
                        placeholder="Proeprty Description"
                        name="message"
                        required
                        onChange={() => console.log("text area change")}
                    />
                    <Button className="mt-5" type="submit">
                        send
                    </Button>
                </div>
                <div className="w-1/2">
                    <div className="w-full p-5 rounded-lg border border-gray-300 bg-white sticky top-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl mb-8">Why List with Us?</h2>
                            {contactData.map((contact, index) => (
                                <div className="flex items-start gap-3 mb-4" key={index}>
                                    <div className="flex items-center justify-center rounded-lg">
                                        <Icon className="text-secondary text-2xl" icon={contact.iconName} />
                                        {/* <Image
                                    width={100}
                                    height={100}
                                    src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJnnE2CT0_E5Al8R9lo4lWH5piOpco-O3Zg&s"
                                    }
                                    className="w-full h-full object-cover"
                                    alt="time"
                                /> */}
                                    </div>

                                    <div className="w-full">
                                        <h3 className="text-dark-blue-500 mb-2 text-xl text-primary">{contact.name}</h3>
                                        <p className="text-dark-blue-400 text-base font-light text-[#6B665F]">
                                            {contact.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ListYourPropertyForm
