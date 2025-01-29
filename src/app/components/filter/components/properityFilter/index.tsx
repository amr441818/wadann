import React, { Dispatch, SetStateAction } from "react";
import FilterWrapper from "../FilterWrapper";
import Customsearch from "@/app/components/shared/reusableComponents/Customsearch";

import FilterIcon from "@/app/components/icons/FilterIcon";
import Button from "@/app/components/shared/reusableComponents/Reusablebutton";
import CustomSelect from "@/app/components/shared/reusableComponents/CustomSelect";
import Size from "@/app/components/icons/Size";
import Types from "@/app/components/icons/Types";
import Bedrooms from "@/app/components/icons/Bedrooms";
import Range from "@/app/components/icons/Range";
type PropertiesFilterProps = {
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
const PropertiesFilter = (props: PropertiesFilterProps) => {
  const setOpenHandler = () => {
    if (props.setOpen) {
      props.setOpen(true);
    }
  };
  return (
    <FilterWrapper top="top-[230px] lg:top-[310px] " width='w-full lg:w-[92%]'>
      <div className="flex flex-col gap-5  w-full">
        <div className=" hidden lg:flex  justify-between w-full gap-5">
          <Customsearch />
          <Button>Search</Button>
          <Button onClick={setOpenHandler} outline>
          
            <div className="flex items-center gap-3">
              <FilterIcon />
              <span>All Filters</span>
            </div>
          </Button>
        </div>


        <div className="lg:hidden"><Customsearch /></div>
        <div className="flex flex-col lg:flex-row gap-5  w-full ">
          <div className="w-full ">
            <CustomSelect
              width="100%"
              options={[
                { value: "1000Sq-1200Sq", label: "1000Sq-1200Sq" },
                { value: "amrr", label: "amrr" },
              ]}
              onChange={(value) => console.log(value)}
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
              onChange={(value) => console.log(value)}
              icon={<Range />}
              label="Price Range"
            />
          </div>
        </div>


         <div className=" lg:hidden flex flex-col gap-4">
         <Button>Search</Button>
          <Button onClick={setOpenHandler} outline>
          
            <div className="flex items-center gap-3">
              <FilterIcon />
              <span>All Filters</span>
            </div>
          </Button>
         </div>

      </div>
    </FilterWrapper>
  );
};

export default PropertiesFilter;
