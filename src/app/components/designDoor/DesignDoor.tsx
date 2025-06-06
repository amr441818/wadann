"use client";

import React, { useEffect } from "react";
import Container from "../shared/container";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiServiceCall from "@/utils/api/shared/apiServiceCall";
import MainLink from "../shared/main-link";
import Link from "next/link";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const DesignDoor = ({ locale }: { locale: string }) => {
  const [colorId, setColorId] = React.useState(1);
  const [designId, setDesignId] = React.useState(1);
  const searchParams = useSearchParams()

  const [designImg, setDesignImg] = React.useState("");
  const [watsApp, setWatsApp] = React.useState("");
  const t = useTranslations("Header");

  const { data } = useQuery({
    queryKey: ["designsColors"],
    queryFn: () =>
      apiServiceCall({
        url: `design_your_door?category_id${searchParams?.get('cat_id')}`,
        method: "GET",
        headers: { "Accept-Language": locale },
      }),
  });
  

  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: (data) =>
      apiServiceCall({
        method: "POST",
        url: "design_your_door",
        body: data,
        headers: { "Accept-Language": locale },
      }),
   

    onSuccess: (data, variables, context) => {
     
      setDesignImg(data?.data?.product?.image);
      setWatsApp(data?.data?.whatsapp_link);
    },
  });

  useEffect(() => {
    //@ts-ignore
    mutate({ design_id: designId, color_id: colorId });
  }, [colorId, designId]);

  if (isPending) {
    toast.loading("Loading...", {
        toastId: "loginLoadingToast",
        autoClose: false,
    });
} else {
    toast.dismiss("loginLoadingToast");
}      
  
  return (
    <>
    
    <div className="my-[180px] ">
     <Container>
        <div className="grid grid-cols-12 gap-y-10 lg:gap-[63px]">
          <div className="flex justify-center items-center col-span-12 lg:col-span-3">
            <Image
              src={`${designImg || "/assets/img/door.png"}`}
              alt="image"
              width={300}
              height={425}
              className="w-[194px] h-[425px]"
            />
          </div>

          <div className="flex col-span-12 lg:col-span-9 flex-col gap-4">
            <h6 className="text-primary text-[19px] lg:text-[24px] font-bold">{t("design_your_door")}</h6>

            <div className="felx flex-col gap-[13px]">
              <p className="text-[#636363] text-[12px]">
              {t("choose_your_own_door")}              </p>
              <span className="text-[14px] text-[#636363] font-bold">
              {t("choose_suitable_color")}              </span>
            </div>

            <div className="flex gap-[5px] ">
              <div className="flex gap-[22px]">
                {data?.data?.colors?.map(
                  (color: { id: number; name: string; image: string }) => {
                    return (
                      <button
                        onClick={() => setColorId(color.id)}
                        key={color.id}
                        className="flex relative"
                      >
                       {colorId === color.id && ( <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center"><Icon icon="icon-park-twotone:correct" className="text-white size-5"/></div>)}
                        <Image
                          src={color.image}
                          alt={color.name}
                          width={41}
                          height={41}
                          className="w-[41px] h-[41px]"
                        />{" "}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <span className="text-[14px] text-[#636363] font-bold">
            {t("choose_suitable_design")}            </span>
            <div className="flex gap-[22px]   ">
              {data?.data?.designs?.map(
                (design: { id: number; name: string; image: string }) => {
                  return (
                    <button
                      onClick={() => setDesignId(design.id)}
                      key={design.id}
                      className="flex relative"
                    >
                      {designId === design.id && ( <div className="flex  absolute top-0 left-0 w-full h-full justify-center items-center"><Icon icon="icon-park-twotone:correct" className="text-primary size-5"/></div>)}
                      <Image
                        src={design.image}
                        alt={design.name}
                        width={41}
                        height={41}
                        className={`w-[41px] h-[41px] ${designId === design.id && "outline outline-primary"}`}
                      />{" "}
                    </button>
                  );
                }
              )}
            </div>
            <div className="flex relative">
            {/* <Image src="/assets/img/doorWats.png" alt="df" width={10} height={10} className=" w-[50px] h-[50px]   bg-green-400 absolute right-0 top-0 z-999" /> */}
            <a target="_blank" className="text-center text-[14px] lg:text-[18px] text-white bg-primary w-fit py-[17px] !rounded-[25px] px-[20px] lg:px-[55px] !z-0 " href={`${watsApp}`}>
            {t("send_design_whatsapp")}                </a>
            </div>
           
          </div>

         
        </div>
      </Container>
    </div>
    </>
  );
};

export default DesignDoor;
