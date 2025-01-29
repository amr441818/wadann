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
import { getHomeSocialData } from "@/lib/serverActions"
import { useQuery } from "@tanstack/react-query"
import apiServiceCall from "@/utils/api/shared/apiServiceCall"
import Container from "../shared/container"
import { HeaderWrwpper } from "../shared/main-header"

const GetInTouchSection =  () => {


    const {data} = useQuery({
		queryKey: ['setting/social'],
		queryFn: () => apiServiceCall({url:'setting/social'})
	});
    const {data :touchdata} = useQuery({
		queryKey: ['touch'],
		queryFn: () => apiServiceCall({url:'touch'})
	});
    // const data= useQuery({ key: 'setting/social',fn:apiServiceCall({url:'setting/social'})})

console.log(touchdata)

    

    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const contactData = {
        mail: {
            name: "Email",
            value: data?.data?.contacts?.email,
            iconName: "mynaui:envelope",
        },
        phone: {
            name: "Phone",
            value: data?.data?.contacts?.phone,
            iconName: "basil:phone-outline",
        },
        location: {
            name: "Address",
            value: data?.data?.address,
            iconName: "proicons:location",
        },
        whatsapp: {
            name: "Whatsapp",
            value: data?.data?.contacts?.whatsapp,
            iconName: "hugeicons:whatsapp",
        },
    }

    const onSubmit = (data) => {
        console.log(data)
        // Handle form submission
    }

    return (
        <HeaderWrwpper
        className="!h-[1100px] sm:!h-[1000px] md:!h-[900px] lg:!h-[600px]  !flex !items-center !justify-center"
        imgUrl={touchdata?.data?.data?.image?.original_url}
    >
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white-50 rounded-lg space-y-4 col-span-12 lg:col-span-7 md:order-2 lg:order-1 px-5 py-5 max-md:order-2 text-sm md:text-base h-full flex items-center justify-center"
        >
            <Container>
            <div className="flex w-full flex-col lg:flex-row gap-5 items-center">
                <div className="w-full lg:w-[60%] bg-transparent rounded-lg lg:p-5 text-white">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="mb-8">
                                <h2 className="text-4xl mb-5">{touchdata?.data?.data?.title}</h2>
                                 <p className="text-xl font-light mb-5">
                                {touchdata?.data?.data?.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center rounded-lg">
                                    <Icon className="text-white text-2xl" icon={contactData.mail.iconName} />
                                   
                                </div>

                                <p className="w-full text-dark-blue-400 text-base font-light">
                                    {contactData.mail.value}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center rounded-lg">
                                    <Icon className="text-white text-2xl" icon={contactData.location.iconName} />
                                   
                                </div>

                                <p className="text-dark-blue-400 text-base font-light">{contactData.location.value}</p>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center rounded-lg">
                                    <Icon className="text-white text-2xl" icon={contactData.phone.iconName} />
                                    
                                </div>

                                <p className="text-dark-blue-400 text-base font-light">{contactData.phone.value}</p>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center rounded-lg">
                                    <Icon className="text-white text-2xl" icon={contactData.whatsapp.iconName} />
                                  
                                </div>

                                <p className="text-dark-blue-400 text-base font-light">{contactData.whatsapp.value}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] border border-gray-300 bg-white rounded-lg py-8 px-6">
                    <h2 className="text-4xl mb-5 text-black">{touchdata?.data?.header?.title}</h2>
                    <p className="text-xl font-light mb-5 text-black">{touchdata?.data?.header?.description}</p>

                    <div className="flex  gap-4">
                        <InputComponent
                            className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0 w-full"
                            type="text"
                            placeholder="firstName"
                            name="firstName"
                            required
                            onChange={() => {
                                console.log("InputComponent")
                            }}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}

                        <InputComponent
                            className="mt-5 [&_input]:bg-bodyBg [&_input]:!border-0 w-full"
                            type="text"
                            placeholder="lastName"
                            name="lastName"
                            required
                            onChange={() => {
                                console.log("InputComponent")
                            }}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>

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
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                    {/* <PhoneValidationExample className="mt-5" label="Phone Number" /> */}

                    <CustomTextAria
                        className="mt-5 [&_textarea]:bg-bodyBg [&_textarea]:!border-0"
                        value=""
                        placeholder="Your Message"
                        name="message"
                        required
                        onChange={() => console.log("text area change")}
                    />
                    <Button className="mt-5" type="submit">
                        send
                    </Button>
                </div>
            </div>
            </Container>
        </form>
        </HeaderWrwpper>
    )
}

export default GetInTouchSection
