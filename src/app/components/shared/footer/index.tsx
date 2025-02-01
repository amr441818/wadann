import ContactForm from "../../contactForm/ContactForm";
import Container from "../container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLink from "../main-link";
import logoServer from "@/public/logo.png";

// import logo from "../../../../../public/logo.png"

const Footer = async (params: any) => {
  const { locale: language } = await params;
  console.log("language", language);
  const cols = [
    {
      title: "روابط هامة",
      links: ["الرئيسية", "من نحن", "المنتجات", "صمم بابك"],
    },
    {
      title: "",
      links: ["خدماتنا", "عملائنا وشركاؤنا", "المدونة", "تواصل معنا"],
    },
  ];

  return (
    <footer className="relative bg-primary text-white px-5 lg:px-0 pt-[232px] mt-[232px]">
      <ContactForm data={params?.data?.contactus}/>
      <Container className="">
        {/* logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 py-14 gap-3">
          <div className="flex justify-center md:justify-start max-md:items-center ">
            <Image
              className="w-[145px] h-[145px] rounded-3xl overflow-hidden"
              src={logoServer}
              width={200}
              height={54}
              alt="logo"
            />
            {/* <Image src="logo.png" width={100} height={100} alt="logo" /> */}
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className={`font-semibold ${col.title ? "mb-2" : "mb-8"}`}>
                {col.title}
              </h3>
              <div className="flex flex-col">
                {col.links.map((link) => (
                  <MainLink
                    className="my-1 lg:my-3 block text-white/70"
                    key={link}
                    locale={language}
                    href="list-your-property"
                  >
                    {link}
                  </MainLink>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className={`font-semibold mb-10`}>تابعنا من خلال</h3>
            <div className="flex flex-wrap gap-4">
              <MainLink
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href="home"
              >
                <Icon icon="basil:whatsapp-outline" />
              </MainLink>
              <MainLink
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href="home"
              >
                <Icon icon="ic:outline-snapchat" />
              </MainLink>
              <MainLink
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href="home"
              >
                <Icon icon="hugeicons:instagram" />
              </MainLink>
              <MainLink
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href="home"
              >
                <Icon icon="pajamas:twitter" />
              </MainLink>
              <MainLink
                className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
                locale={language}
                href="home"
              >
                <Icon icon="ph:tiktok-logo" />
              </MainLink>
            </div>
        {/* copyright */}
            <div className="mt-7">© جميع الحقوق محفوظة - وادان للأبواب الخشبية</div>
          </div>
        </div>

        
      </Container>
    </footer>
  );
};

export default Footer;
