import React, { ReactNode } from "react"

import "./filter.css"

type FilterWrapperProps = { children: ReactNode; width?: string; top?: string; bg?: string }
const FilterWrapper = ({ children, width, bg, top }: FilterWrapperProps) => {
    return (
        <div
            className={`absolute w-full  ${
                top ? `${top} ${width ? `${width}` : "w-[92%]"}` : "top-[310px]"
            } lg:left-[50%] lg:translate-x-[-50%]  z-[999]   lg:m-auto  p-4 lg:p-6`}
        >
            <div className={` ${bg ? `${bg}` : "bg-initialBg"} rounded-[16px]  p-6   filter-shadow`}>{children}</div>
        </div>
    )
}

export default FilterWrapper
