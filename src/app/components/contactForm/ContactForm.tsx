"use client";

import "./contact.css";


import Image from "next/image";
import InputComponent from "../shared/reusableComponents/InputComponent";
import CustomTextAria from "../shared/reusableComponents/CustomTextAria";
interface ContactUs {
  mobile: string;
  email: string;
  address: string | null;
  map_iframe: string;
}

const ContactForm = ({ data }: { data: ContactUs }) => {
  console.log("data", data);
  return (
    <div className="form-shadow  flex flex-col gap-[56px] bg-white rounded-[24px] lg:w-[70%] m-auto p-4 lg:pt-[67px] lg:pb-[47px] lg:px-[76px] ">
      <h5 className="text-[24px] font-bold text-primary text-center">
        تواصل معنا
      </h5>

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
          <form className="flex flex-col gap-[14px] ">
            <div className="flex flex-col gap-[9px]">
              <InputComponent
                type="text"
                placeholder="الاسم كاملا"
                onChange={() => console.log("first")}
                name="name"
              />
              <InputComponent
                type="text"
                placeholder="رقم الجوال"
                onChange={() => console.log("first")}
                name="phone"
              />
              <CustomTextAria
                placeholder=" نص الرسالة"
                onChange={() => console.log("first")}
                value=""
                name="message"
              />
            </div>
            <button className="py-4 text-white text-[12px] bg-primary rounded-full">
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
                className="w-[57px] h-[49px]  p-4 "
              />
            </div>

            <p className="text-[#636363] font-medium">{data?.address}</p>
          </div>

          <div
            className="w-[200px] h-[200px]"
            dangerouslySetInnerHTML={{ __html: data?.map_iframe || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
