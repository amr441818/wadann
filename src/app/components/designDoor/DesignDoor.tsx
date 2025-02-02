"use client";

import React, { useEffect } from "react";
import Container from "../shared/container";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiServiceCall from "@/utils/api/shared/apiServiceCall";
import MainLink from "../shared/main-link";
import Link from "next/link";

const DesignDoor = ({ locale }: { locale: string }) => {
  const [colorId, setColorId] = React.useState(1);
  const [designId, setDesignId] = React.useState(1);

  const [designImg, setDesignImg] = React.useState("");
  const [watsApp, setWatsApp] = React.useState("");

  const { data } = useQuery({
    queryKey: ["designsColors"],
    queryFn: () =>
      apiServiceCall({
        url: "design_your_door",
        method: "GET",
        headers: { "Accept-Language": locale },
      }),
  });
  // console.log( "designs",data?.data?.colors)

  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: (data) =>
      apiServiceCall({
        method: "POST",
        url: "design_your_door",
        body: data,
        headers: { "Accept-Language": locale },
      }),
   

    onSuccess: (data, variables, context) => {
      console.log("data door", data?.data?.product?.image);
      setDesignImg(data?.data?.product?.image);
      setWatsApp(data?.data?.whatsapp_link);
    },
  });

  useEffect(() => {
    //@ts-ignore
    mutate({ design_id: designId, color_id: colorId });
  }, [colorId, designId]);

  if(isPending){
return(<div className="  h-screen  w-full  bg-white  text-primary flex items-center justify-center" >loding ....</div>)
  }         
  
  return (
    <>
    
    <div className="my-[180px] ">
     <Container>
        <div className="grid grid-cols-12  gap-[63px]">
          <div className="flex justify-center items-center col-span-3">
            <Image
              src={`${designImg || "/assets/img/door.png"}`}
              alt="image"
              width={300}
              height={425}
              className="w-[194px] h-[425px]"
            />
          </div>

          <div className="flex col-span-9 flex-col gap-4">
            <h6 className="text-primary text-[24px] font-bold">صمم بابك</h6>

            <div className="felx flex-col gap-[13px]">
              <p className="text-[#636363] text-[12px]">
                يمكنك اختيار تصميم بابك بنفسك
              </p>
              <span className="text-[14px] text-[#636363] font-bold">
                اختر اللون المناسب لك
              </span>
            </div>

            <div className="flex gap-[5px] ">
              <div className="flex gap-[22px]">
                {data?.data?.colors?.map(
                  (color: { id: number; name: string; image: string }) => {
                    return (
                      <button
                        onClick={() => setColorId(color.id)}
                        key={color.id}
                        className="flex"
                      >
                        {" "}
                        <Image
                          src={color.image}
                          alt={color.name}
                          width={30}
                          height={30}
                          className="w-[69px] h-[127px]"
                        />{" "}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <span className="text-[14px] text-[#636363] font-bold">
              اختر اللون المناسب لك
            </span>
            <div className="flex gap-[22px]   ">
              {data?.data?.designs?.map(
                (design: { id: number; name: string; image: string }) => {
                  return (
                    <button
                      onClick={() => setDesignId(design.id)}
                      key={design.id}
                      className="flex"
                    >
                      {" "}
                      <Image
                        src={design.image}
                        alt={design.name}
                        width={30}
                        height={30}
                        className="w-[69px] h-[127px]"
                      />{" "}
                    </button>
                  );
                }
              )}
            </div>
            <div className="flex relative">
            <Image src="/assets/img/doorWats.png" alt="df" width={10} height={10} className=" w-[50px] h-[50px] rounded-full bg-green-400 absolute right-0 top-0 z-999" />
            <a target="_blank" className=" text-white bg-primary w-fit py-[17px] !rounded-[25px] px-[55px] !z-0 " href={`${watsApp}`}>
                قم بإرسال تصميمك المطلوب إلينا عبر الواتساب
                </a>
            </div>
           
          </div>

         
        </div>
      </Container>
    </div>
    </>
  );
};

export default DesignDoor;
