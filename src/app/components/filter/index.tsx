"use client"
import React, { Dispatch, SetStateAction } from "react"
import FilterWrapper from "./components/FilterWrapper"
import Button from "../shared/reusableComponents/Reusablebutton"
import CustomSelect from "../shared/reusableComponents/CustomSelect"
import Customsearch from "../shared/reusableComponents/Customsearch"
import Bedrooms from "../icons/Bedrooms"
import Size from "../icons/Size"
import Types from "../icons/Types"
import Range from "../icons/Range"
import FilterIcon from "../icons/FilterIcon"
import HomeFilter from "./homeFilter"
import PropertiesFilter from "./components/properityFilter"
type FilterProps = {
    setOpen?: Dispatch<SetStateAction<boolean>>
    filterType?: string
}

const Filter = (props: FilterProps) => {
    return (
        <>
            {props.filterType === "home" && <HomeFilter />}
            {props.filterType === "property" && <PropertiesFilter setOpen={props.setOpen} />}
        </>
    )
}

export default Filter
