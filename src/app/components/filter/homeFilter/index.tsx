import CustomSelect from "../../shared/reusableComponents/CustomSelect"
import Bedrooms from "../../icons/Bedrooms"
import Types from "../../icons/Types"
import Size from "../../icons/Size"

import Button from "../../shared/reusableComponents/Reusablebutton"
import Range from "../../icons/Range"
import FilterWrapper from "../components/FilterWrapper"

const HomeFilter = () => {
    return (
        <FilterWrapper top="top-[150px]   lg:top-[170px]" width="w-full lg:w-[90%] xl:w-[67%]" bg="bg-[#000000A6]">
            <div className="  flex flex-col lg:flex-row gap-5 w-full ">
                <div className="flex flex-col lg:flex-row gap-5  w-full ">
                    <div className="w-full ">
                        <CustomSelect
                            width="100% "
                            options={[
                                { value: "1000Sq-1200Sq", label: "1000Sq-1200Sq" },
                                { value: "amrr", label: "amrr" },
                            ]}
                            onChange={(value) => console.log(value)}
                            styles={{ text: "#FFFFFF", bg: "black" }}
                            label="Size"
                            icon={<Size />}
                        />
                    </div>
                    <div className="w-full">
                        <CustomSelect
                            width="100%"
                            options={[
                                { value: "Villa", label: "Villa" },
                                { value: "amrr", label: "amrr" },
                            ]}
                            styles={{ text: "#FFFFFF", bg: "black" }}
                            onChange={(value) => console.log(value)}
                            icon={<Types />}
                            label="Property type"
                        />
                    </div>
                    <div className="w-full">
                        <CustomSelect
                            width="100%"
                            options={[
                                { value: "3 Bedrooms", label: "3 Bedrooms" },
                                { value: "amrr", label: "amrr" },
                            ]}
                            styles={{ text: "#FFFFFF", bg: "black" }}
                            onChange={(value) => console.log(value)}
                            icon={<Bedrooms />}
                            label="Bedrooms"
                        />
                    </div>
                    <div className="w-full">
                        <CustomSelect
                            width="100%"
                            options={[
                                { value: "80K-100K USD", label: "80K-100K USD" },
                                { value: "amrr", label: "amrr" },
                            ]}
                            styles={{ text: "#FFFFFF", bg: "black" }}
                            onChange={(value) => console.log(value)}
                            icon={<Range />}
                            label="Price Range"
                        />
                    </div>
                </div>
                <div className="flex w  items-end">
                    <Button>View properties</Button>
                </div>
            </div>
        </FilterWrapper>
    )
}

export default HomeFilter
