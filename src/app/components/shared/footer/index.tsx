import ContactForm from "../../contactForm/ContactForm";
import Container from "../container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import MainLink from "../main-link";
import logoServer from "@/public/logo.png";

// import logo from "../../../../../public/logo.png"

const Footer = async (params: any) => {
  const { locale: language } = await params;
  console.log("language", language);
  const cols = [
    {
      title: "روابط هامة",
      links: [
        { value: "الرئيسية", path: "/" },
        { value: "من نحن", path: "who-we-are" },
        { value: "المنتجات", path: "/" },
        { value: "صمم بابك", path: "/" },
      ],
    },
    {
      title: "",
      links: [
        { value: "خدماتنا", path: "/" },
        { value: "وشركاؤنا", path: "/" },
        { value: "المدونة", path: "blogs" },
        { value: "تواصل معنا", path: "/" },
      ],
    },
  ];

  const myObject = {};

  for (let i = 0; i < params?.data?.socials?.length; i++) {
    myObject[params?.data?.socials[i]?.key] = params?.data?.socials[i]?.value;
  }

  return (
    <footer className="relative bg-primary text-white px-5 lg:px-0 pt-10 lg:pt-[330px] lg:mt-[330px]">
      <ContactForm data={params?.data?.contactus} />
      <Container className="">
        {/* logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 py-14 gap-3">
          <div className="flex justify-center md:justify-start max-md:items-center ">
            <Image
              className="w-[145px] h-[145px] rounded-3xl overflow-hidden"
              src={params?.data?.footer_logo || logoServer}
              width={200}
              height={54}
              alt="logo"
            />
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className={`font-semibold ${col.title ? "mb-2" : "mb-8"}`}>
                {col.title}
              </h3>
              <div className="flex flex-col">
                {col.links.map((item) => (
                  <MainLink
                    className="my-1 lg:my-3 block text-white/70"
                    key={item.value}
                    locale={language}
                    href={item.path}
                  >
                    {item.value}
                  </MainLink>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className={`font-semibold mb-10`}>تابعنا من خلال</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                href={myObject?.whatsapp || "home"}
              >
                <Icon icon="basil:whatsapp-outline" />
              </Link>
              <Link
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href={myObject?.snapchat || "home"}
              >
                <Icon icon="ic:outline-snapchat" />
              </Link>
              <Link
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href={myObject?.instagram || "home"}
              >
                <Icon icon="hugeicons:instagram" />
              </Link>
              <Link
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href={myObject?.twitter || "home"}
              >
                <Icon icon="pajamas:twitter" />
              </Link>
              <Link
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href={myObject?.tiktok || "home"}
              >
                <Icon icon="ph:tiktok-logo" />
              </Link>
            </div>
            {/* copyright */}
            <div className="mt-7">
              © جميع الحقوق محفوظة - وادان للأبواب الخشبية
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
