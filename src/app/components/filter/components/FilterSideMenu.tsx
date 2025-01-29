// @ts-nocheck

"use client"
import React, { Dispatch, SetStateAction, useState } from "react"
import Divider from "../../shared/Divider"
import CustomCheckbox from "../../shared/CustomCheckbox/CustomCheckbox"
import RangeSlider from "../../shared/Slider/Slider"
import InputComponent from "../../shared/reusableComponents/InputComponent"
import Button from "../../shared/reusableComponents/Reusablebutton"
import "./filter.css"
import RadioGroup from "./RadioGroup"
import { useTranslations } from "next-intl"
type FilterSideMenuProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
const FilterSideMenu = (props: FilterSideMenuProps) => {
    const [values, setValues] = useState([0, 100])
    const t = useTranslations("Header")
    return (
        <>
            <div
                className={`fixed filter-panel h-screen top-0 left-0 z-[999] ${
                    props.open ? "translate-x-[0px] " : "translate-x-[-481px] "
                } duration-700 w-full md:w-[481px] flex flex-col overflow-y-scroll `}
            >
                <div className="flex flex-col  gap-[23px] bg-[#FFFFFFD9] backdrop-blur-[100px] p-[29px] ">
                    <button onClick={() => props.setOpen(false)} className="flex gap-2 items-center justify-end  ">
                        x<span>Close</span>
                    </button>

                    <h6 className="font-medium text-[20px]">Filters</h6>
                    <Divider />

                    <div className="flex flex-col gap-[16px] ">
                        <h6 className="font-medium text-[20px]">Property type</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <CustomCheckbox checked label="House" />
                            </div>
                            <div className="col-span-6">
                                <CustomCheckbox checked label="Land" />
                            </div>
                            <div className="col-span-6">
                                <CustomCheckbox checked label="Castle" />
                            </div>
                            <div className="col-span-6">
                                <CustomCheckbox label="Private Island" />
                            </div>
                            <div className="col-span-6">
                                <CustomCheckbox label="House" />
                            </div>
                        </div>
                    </div>

                    <Divider />

                    <div className=" flex flex-col gap-[29px]">
                        <h6 className="font-medium text-[20px]">Price Range</h6>

                        <RangeSlider values={values} setValues={setValues} />
                        <div className="flex gap-4">
                            <InputComponent value={values[0]} />
                            <InputComponent value={values[1]} />
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-[16px] ">
                            <h6 className="font-medium text-[20px]">Bedrooms</h6>
                            <div className="flex">
                                <RadioGroup
                                    options={["Any", "1", "2", "3", "4"]}
                                    name="bedrooms"
                                    value={"bedrooms"}
                                    defaultValue={"Any"}
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-[16px] ">
                            <h6 className="font-medium text-[20px]">Bathrooms</h6>
                            <div className="flex">
                                <RadioGroup
                                    options={["Any", "1", "2", "3", "4"]}
                                    name="bedrooms"
                                    value={"bedrooms"}
                                    defaultValue={"Any"}
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-[16px] ">
                            <h6 className="font-medium text-[20px]">Outdoor</h6>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6">
                                    <CustomCheckbox label="new" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="amr" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="new" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="amr" />
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-[16px] ">
                            <h6 className="font-medium text-[20px]">Outdoor</h6>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6">
                                    <CustomCheckbox label="new" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="amr" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="new" />
                                </div>
                                <div className="col-span-6">
                                    <CustomCheckbox label="amr" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Divider /> */}
                </div>

                <div className="flex gap-4 items-center justify-center bg-[white] p-8 border-t-[1px]">
                    <Button outline>Clear All</Button>
                    <Button>Show 500 Properties</Button>
                </div>
            </div>
        </>
    )
}

export default FilterSideMenu
