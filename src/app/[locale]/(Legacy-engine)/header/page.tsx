import Filter from "@/app/components/filter"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import PhoneValidationExample from "@/app/components/shared/PhoneInput"
import React from "react"

const page = () => {
    return (
        <>
            <div className="mt-[1000px]"></div>
            <PhoneValidationExample />

            <header className="relative ">
                <HeaderWrwpper imgUrl="/header.png">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[40px] font-medium ">Top Ready to Move Properties</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; Ready to Move</div>
                        </div>
                    </div>
                </HeaderWrwpper>
                <Filter />
            </header>
        </>
    )
}

export default page
