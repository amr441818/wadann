"use client";

import "./contact.css";

import CustomTextAria from "../shared/reusableComponents/CustomTextAria";
import Image from "next/image";
import InputComponent from "../shared/reusableComponents/InputComponent";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

interface ContactUs {
  mobile: string;
  email: string;
  address: string | null;
  map_iframe: string;
}

const ContactForm = ({ data }: { data: ContactUs }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      message: "",
    },
  });

  const { mutate, isError, isSuccess, isPending } = useMutation({
    mutationFn: (data) =>
      axios.post(
        "https://almasader.net/wadan/backend/public/api/contactus",
        data
      ),

    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${context?.id}`);
      console.log("error done");
    },
    onSuccess: (data, variables, context) => {
      console.log("success done");
    },
    onSettled: (data, error, variables, context) => {
      console.log("settled done");
      // Error or success... doesn't matter!
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data);
  };
  const t = useTranslations("Header");
  return (
    <div className="lg:absolute top-0 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2 form-shadow flex flex-col gap-[56px] bg-white rounded-[24px] lg:w-[70%] m-auto p-4 lg:pt-[67px] lg:pb-[47px] lg:px-[76px] ">
      <div className="flex items-center justify-center">
        
        <h5 className="unique-h w-fit text-[24px] font-bold text-primary text-center">
          {t("contact-us")}
        </h5>
      </div>

      <div className="grid grid-cols-12 gap-6  xxl:gap-[100px]">
        <div className="flex flex-col gap-[38px]   col-span-12  lg:col-span-6">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/img/formImg.png"
              width={72}
              height={72}
              alt="contact us form"
              className="w-[72px] h-[72px]"
            />

            <p className="lg:w-[135px] text-[#333333] font-bold">
              قم بإرسال شكوتك أو مقترحاتك إلينا
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[14px] "
          >
            <div className="flex flex-col gap-[9px]">
              <InputComponent
                type="text"
                placeholder="الاسم كاملا"
                register={register}
                name="name"
              />
              <InputComponent
                type="text"
                placeholder="رقم الجوال"
                register={register}
                name="mobile"
              />
              <CustomTextAria
                placeholder=" نص الرسالة"
                register={register}
                name="message"
              />
            </div>
            {isError && (
              <p className="text-red-500 text-sm mt-1">
                {"something went round please try again"}
              </p>
            )}
            {isSuccess && (
              <p className="text-green-500 text-sm mt-1">{"sent success"}</p>
            )}

            <button
              type="submit"
              className="py-4 text-white text-[12px] bg-primary rounded-full"
            >
              إرسال
            </button>
          </form>
        </div>
        <div className="flex  flex-col gap-4  col-span-12  lg:col-span-6">
          <div className="flex gap-[10px] items-center">
            <div className="flex items-center justify-center  w-[57px] h-[49px] rounded-full bg-[#f9f6ef]">
              <Image
                src="/assets/img/phone.png"
                width={57}
                height={49}
                alt="contact us form"
                className="w-[57px] h-[49px] p-4 "
              />
            </div>

            <p className="text-[#636363] font-medium">{data?.mobile} </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="flex items-center justify-center w-[57px] h-[49px] rounded-full bg-[#f9f6ef]">
              <Image
                src="/assets/img/message.png"
                width={72}
                height={72}
                alt="contact us form"
                className="w-[57px] h-[49px]  p-4 "
              />
            </div>

            <p className="text-[#636363] font-medium">{data?.email} </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center w-[57px] h-[49px] rounded-full  bg-[#f9f6ef]">
              <Image
                src="/assets/img/location.png"
                width={72}
                height={72}
                alt="contact us form"
                className="w-[57px] h-[49px]  p-4 object-cover"
              />
            </div>

            <p className="text-[#636363] font-medium">{data?.address}</p>
          </div>

          <div
            className="w-full h-[200px] overflow-hidden"
            dangerouslySetInnerHTML={{ __html: data?.map_iframe || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
