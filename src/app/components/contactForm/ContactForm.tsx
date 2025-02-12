/* @ts-nocheck */
"use client";

import "./contact.css";

import CustomTextAria from "../shared/reusableComponents/CustomTextAria";
import Image from "next/image";
import InputComponent from "../shared/reusableComponents/InputComponent";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ContactUs {
  mobile: string;
  email: string;
  address: string | null;
  map_iframe: string;
}

const ContactForm = ({ data, locale  }: { data: ContactUs, locale?:string }) => {
  const t = useTranslations("Header");
  const { register, handleSubmit, reset } = useForm({
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

   
    onSuccess: (data, variables, context) => {
      toast.success(t('success'))
      reset()

    },
   
  });

    if (isPending) {
            toast.loading("Loading...", {
                toastId: "loginLoadingToast",
                autoClose: false,
            });
        } else {
            toast.dismiss("loginLoadingToast");
        }

  const onSubmit = (data: any) => {
    mutate(data);
  };

  const pathname = usePathname();
  console.log(pathname)
  let place = pathname.split("/").pop();
 


  return (
    <div className={`${`/${locale}` === `/${place}`? "lg:absolute top-0 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2":"my-[100px]"} form-shadow flex flex-col gap-[56px] bg-white rounded-[24px] lg:w-[70%] m-auto p-4 lg:pt-[67px] lg:pb-[47px] lg:px-[76px]`}>
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
                required
              />
              <InputComponent
                type="number"
                placeholder="رقم الجوال"
                register={register}
                name="mobile"
                required
              />
              <CustomTextAria
                placeholder=" نص الرسالة"
                register={register}
                name="message"
                required
              />
            </div>
            {isError && (
              <p className="text-red-500 text-sm mt-1">
                {"something went round please try again"}
              </p>
            )}
          

            <button
              type="submit"
              className="py-4 text-white text-[12px] bg-primary rounded-full hover:bg-white hover:text-primary border hover:border-primary duration-300"
            >
              إرسال
            </button>
          </form>
        </div>
        <div className="flex  flex-col gap-4  col-span-12  lg:col-span-6">
          <div className="flex gap-[10px] items-center">
            <Link href={`tel:${data?.mobile}`} className="flex items-center justify-center  w-[57px] h-[49px] rounded-full bg-[#f9f6ef]">
              <Image
                src="/assets/img/mobile.png"
                width={57}
                height={49}
                alt="contact us form"
                className="w-[57px] h-[49px] p-4 object-contain"
              />
            </Link>

            <p className="text-[#636363] font-medium">{data?.mobile} </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Link href={`mailTo:${data?.email}`} className="flex items-center justify-center w-[57px] h-[49px] rounded-full bg-[#f9f6ef]">
              <Image
                src="/assets/img/message.png"
                width={72}
                height={72}
                alt="contact us form"
                className="w-[57px] h-[49px]  p-4 object-contain "
              />
            </Link>

            <p className="text-[#636363] font-medium">{data?.email} </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center w-[57px] h-[49px] rounded-full  bg-[#f9f6ef]">
              <Image
                src="/assets/img/loc.png"
                width={72}
                height={72}
                alt="contact us form"
                className="w-[57px] h-[49px]  p-4 object-contain"
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
