"use client"
import { useState } from "react"
import FilterSideMenu from "../filter/components/FilterSideMenu"
import { HeaderWrwpper } from "../shared/main-header"
import Filter from "../filter"

function PropertyFilter() {
    const [openSideFilter, setOpenSideFilter] = useState(false)
    return (
        <>
            <FilterSideMenu open={openSideFilter} setOpen={setOpenSideFilter} />
            <header>
                <HeaderWrwpper imgUrl="/header.png">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-2 lg:gap-6 mt-[-90px] lg:mt-0">
                            <h1 className=" text-[24px] text-center lg:text-start lg:text-[40px]  font-medium ">Top Ready to Move Properties</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; Ready to Move</div>
                        </div>
                    </div>

                <Filter filterType="property" setOpen={setOpenSideFilter} />
                </HeaderWrwpper>
            </header>
            {openSideFilter && (
                <div
                    className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000000]/20 z-[888] duration-500`}
                    onClick={() => setOpenSideFilter(false)}
                ></div>
            )}
            
        </>
    )
}

export default PropertyFilter
