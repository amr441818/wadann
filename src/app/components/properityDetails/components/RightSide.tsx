// @ts-nocheck

"use client"
import React from "react"
import MainLink from "../../shared/main-link"
import InputComponent from "../../shared/reusableComponents/InputComponent"
import CustomTextAria from "../../shared/reusableComponents/CustomTextAria"
import Button from "../../shared/reusableComponents/Reusablebutton"
import { useForm } from "react-hook-form"
import Image from "next/image"
import whatsapp from "@/public/assets/img/whatsapp.svg"
import call from "@/public/assets/img/call.svg"
import Divider from "../../shared/Divider"

function RightSide({ locale, location, videoSrc }: { locale: string, location: { lat: number, long: number }, videoSrc:string }) {

    console.log('location' , location)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <div className="flex gap-5 flex-col col-span-12  lg:col-span-4">
            <div className="bg-white px-5 py-10 rounded-xl">
                <h3 className="text-xl mb-5">Reach us for more</h3>
                <MainLink
                    locale={locale}
                    href={"/"}
                    className="bg-linearbg text-secondary-foreground hover:bg-secondary/80 px-6 py-4 rounded-lg text-white text-center flex items-center justify-center gap-4 font-semibold mb-5"
                >
                    <Image src={call} width={20} height={20} alt="call" /> call
                </MainLink>
                <MainLink
                    locale={locale}
                    href={"/"}
                    className="bg-white border border-secondary !text-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-4 rounded-lg text-white text-center flex items-center justify-center gap-4 font-semibold"
                >
                    <Image src={whatsapp} width={20} height={20} alt="whatsapp" /> whatsapp
                </MainLink>

                <div className="relative mt-5">
                    <Divider />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary bg-white text-[#6B665F] px-2">
                        or
                    </span>
                </div>

                <div className="">
                    <form>
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
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}

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
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}

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
            <div className="bg-white px-5 py-10 rounded-xl">
                <h3 className="text-xl mb-5">Property Location</h3>
                <div>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54702.98375643156!2d${+location.lat}!3d${+location.long}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1737055352590!5m2!1sar!2seg`}
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", height: "370px", borderRadius: "10px" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            {videoSrc && (<><div className="bg-white px-5 py-10 rounded-xl">
                <h3 className="text-xl mb-5">media</h3>
                <div>
                   <video src={videoSrc} autoPlay/>
                </div>
            </div></>)}
            
        </div>
    )
}

export default RightSide
