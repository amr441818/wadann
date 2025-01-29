// @ts-nocheck

import React from "react"
import { useForm } from "react-hook-form"

const RadioGroup = ({ options, value, label, name, defaultValue }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            [name]: defaultValue,
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div>
                <label className="block text-sm font-medium text-gray-700 ">{label}</label>
                <div className=" flex justify-between items-center rounded-[8px] border  border-[#D9D3C5]">
                    {options.map((option) => (
                        <label
                            key={option}
                            className={` items-center ${
                                watch(name) === option
                                    ? "bg-linearbg px-[25px] py-[14px] rounded-[8px] text-white"
                                    : ` ${
                                          option === "Any" ? "border-none" : ""
                                      }  px-[25px]  py-[14px] border-s border-[#D9D3C5]`
                            } w-full flex items-center justify-center`}
                        >
                            <input type="radio" {...register(name)} value={option} className="form-radio hidden" />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        </form>
    )
}

export default RadioGroup
