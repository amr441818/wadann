"use client"
import Select, { SingleValue } from "react-select"
import { customSelectProps } from "./types/types"
// import { FiSquare } from "react-icons/fi"; // Example icon for illustration
const CustomSelect = (props: customSelectProps) => {
    const handleSelectChange = (newValue: SingleValue<{ value: any; label: string }>) => {
        //@ts-ignore
        props.onChange(newValue)
    }
    // Custom styles for the select component
    const customStyles = {
        container: (provided: any) => ({
            ...provided,
            // borderColor: "transparent",
            // borderWidth: 0.5,
            height: "48px",
            padding: 0,
            width: props.width ? props.width : "100%",
            color: props.styles?.text ? props.styles.text : "#6B7280",
            position: "relative",
        }),
        control: (base: any, state: any) => ({
            ...base,
            // width:"100%",
            backgroundColor: props.styles?.bg ? props.styles.bg : "#FAF9F6",
            borderRadius: "8px",
            border: state.isFocused ? "0px solid #D1D5DB" : "0px solid #E5E7EB",
            padding: "12px 8px",
            display: "flex",
            alignItems: "center",
            boxShadow: state.isFocused ? "0 0 0 2px #E5E7EB" : "none",
            // "&:hover": {
            //   borderColor: "#D1D5DB",
            // },
            backdropFilter: "blur(200px)", // This applies the blur effect
            WebkitBackdropFilter: "blur(200px)",
        }),
        placeholder: (base: any) => ({
            ...base,
            color: "#9CA3AF",
            fontSize: "14px",
        }),
        singleValue: (base: any) => ({
            ...base,
            color: "white",
            fontWeight: "500",
        }),
        dropdownIndicator: (base: any) => ({
            ...base,
            color: props.styles?.text ? props.styles.text : "#6B7280",
            padding: "0 8px",
            "&:hover": {
                color: "#6B7280",
            },
        }),
        menu: (base: any) => ({
            ...base,
            zIndex: 9999,
            background: "white",
        }),
    }
    // Custom Single Value with an icon
    const CustomSingleValue = ({ data }: any) => (
        <div className="flex gap-[10px]  absolute ">
            {props.icon}
            <span className=" line-clamp-1">{data.label}</span>
        </div>
    )
    return (
        <>
            <div className={`flex flex-col gap-2 ${props.className ? props.className : ""}`}>
                <label
                    htmlFor="select"
                    className={` text-[12px] lg:text-[14px] ${props.styles?.text && `text-[${props.styles.text}]`}`}
                >
                    {props.label}
                </label>
                {props?.options?.length > 0 && (
                    <Select
                        data-testid="22"
                        instanceId={props.label}
                        defaultValue={props.options}
                        options={props.options}
                        isSearchable={false}
                        onChange={handleSelectChange}
                        styles={customStyles}
                        components={{ SingleValue: CustomSingleValue }}
                    />
                )}
            </div>
        </>
    )
}
export default CustomSelect
