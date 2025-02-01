"use client"

import "./contact.css";

import CustomTextAria from "../shared/reusableComponents/CustomTextAria";
import Image from "next/image";
import InputComponent from "../shared/reusableComponents/InputComponent";
import React from "react";

const ContactForm = () => {
  return (
    <div className="form-shadow flex flex-col gap-[56px] bg-white rounded-[24px] lg:w-[70%] m-auto p-4 lg:pt-[67px] lg:pb-[47px] lg:px-[76px] ">
      <h5 className="text-[24px] font-bold text-primary text-center">
        تواصل معنا
      </h5>

      <div className="grid grid-cols-12 gap-6 lg:gap-[50px]">
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
            <button className="py-4 text-white text-[12px] bg-primary rounded-full">إرسال</button>
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

            <p className="text-[#636363] font-medium">
            +966 48505203            </p>
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

            <p className="text-[#636363] font-medium">
            info@wadaan.com            </p>
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

            <p className="text-[#636363] font-medium">
            الرياض , شارع الصياد عمارة 14 الدور الاول            </p>
          </div>

          <div>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54702.98375643156!2d31.879389390!3d31.89389390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1737055352590!5m2!1sar!2seg`}
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", height: "165px", borderRadius: "10px" }}
                       allowFullScreen={false}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
