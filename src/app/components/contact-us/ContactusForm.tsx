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

const ContactusForm = ({ data }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const contactData = {
        mail: {
            name: "Email",
            value: "contact@Legacy.com",
            iconName: "mynaui:envelope",
        },
        phone: {
            name: "Phone",
            value: "+971 50 123 4567",
            iconName: "basil:phone-outline",
        },
        location: {
            name: "Address",
            value: "Office 203, Business Tower, Downtown Dubai, UAE",
            iconName: "proicons:location",
        },
        whatsapp: {
            name: "Whatsapp",
            value: "+971 50 123 4567",
            iconName: "hugeicons:whatsapp",
        },
    }

    const onSubmit = (data: any) => {
        console.log("Form Data:", data)
        // TODO: send data to api
        // Handle form submission
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white-50 rounded-lg space-y-4 col-span-12 lg:col-span-7 md:order-2 lg:order-1 px-5 max-md:order-2 text-sm md:text-base"
        >
            <div className="flex gap-5">
                <div className="w-[40%] border border-gray-300 bg-white rounded-lg p-5">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="mb-8">
                                <h2 className="text-4xl mb-5">let’s Get in Touch</h2>
                                <p className="text-xl font-light mb-5">You can reach us any time</p>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center border border-secondary rounded-lg p-3">
                                    <Icon className="text-secondary text-2xl" icon={contactData.mail.iconName} />
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
                                    <h3 className="text-dark-blue-500 mb-2 text-xl">{contactData.mail.name}</h3>
                                    <p className="text-dark-blue-400 text-base font-light text-[#6B665F]">
                                        {data?.contacts?.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center border border-secondary rounded-lg p-3">
                                    <Icon className="text-secondary text-2xl" icon={contactData.location.iconName} />
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
                                    <h3 className="text-dark-blue-500 mb-2 text-xl">{contactData.location.name}</h3>
                                    <p className="text-dark-blue-400 text-base font-light text-[#6B665F]">
                                        {data?.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center border border-secondary rounded-lg p-3">
                                    <Icon className="text-secondary text-2xl" icon={contactData.phone.iconName} />
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
                                    <h3 className="text-dark-blue-500 mb-2 text-xl">{contactData.phone.name}</h3>
                                    <p className="text-dark-blue-400 text-base font-light text-[#6B665F]">
                                        {data?.contacts?.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center border border-secondary rounded-lg p-3">
                                    <Icon className="text-secondary text-2xl" icon={contactData.whatsapp.iconName} />
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
                                    <h3 className="text-dark-blue-500 mb-2 text-xl">{contactData.whatsapp.name}</h3>
                                    <p className="text-dark-blue-400 text-base font-light text-[#6B665F]">
                                        {data?.contacts?.whatsapp}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h2 className="text-xl">Social Media</h2>
                            <ul className="flex items-center gap-4 mt-4">
                                <li>
                                    <Link href={data?.social?.facebook}>
                                        <Icon className="text-secondary text-3xl" icon="mdi:facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={data?.social?.x}>
                                        <Icon className="text-secondary text-2xl" icon="pajamas:twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={data?.social?.instagram}>
                                        <Icon className="text-secondary text-2xl" icon="hugeicons:instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={data?.social?.linkedin}>
                                        <Icon className="text-secondary text-2xl" icon="bi:linkedin" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={data?.social?.tiktok}>
                                        <Icon className="text-secondary text-2xl" icon="simple-icons:tiktok" />
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href={"/"}>
                                        <Icon className="text-secondary text-3xl" icon="mdi:youtube" />
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] border border-gray-300 bg-white rounded-lg p-5">
                    <h2 className="text-4xl mb-5">Or Fill out The Form Below</h2>
                    <p className="text-xl font-light mb-5">You can reach us any time</p>

                    <InputComponent
                        className="mt-5"
                        type="text"
                        label="fullName"
                        placeholder="fullName"
                        name="name"
                        required
                        {...register("name", { required: "Full name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

                    <InputComponent
                        className="mt-5"
                        type="email"
                        label="email"
                        placeholder="email"
                        name="email"
                        required
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                    {/* Use Controller for PhoneValidationExample */}
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Phone number is required" }}
                        render={({ field }) => (
                            <PhoneValidationExample
                                className="mt-5"
                                label="Phone Number"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}

                    <CustomTextAria
                        className="mt-5"
                        label="Your Message"
                        placeholder="Your Message"
                        name="message"
                        required
                        {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

                    <Button className="mt-5" type="submit">
                        send
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default ContactusForm
