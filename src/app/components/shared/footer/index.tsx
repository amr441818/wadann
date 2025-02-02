import ContactForm from "../../contactForm/ContactForm";
import Container from "../container";
import Image from "next/image";
import RightSideFooter from "./RightSideFooter";
import logoServer from "@/public/logo.png";

const Footer = async (params: any) => {
  const { locale: language } = await params;

  return (
    <footer
      className="relative bg-primary text-white px-5 lg:px-0 pt-10 lg:pt-[330px] lg:mt-[330px]"
      id="contact-us"
    >
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

          <RightSideFooter data={params?.data} language={language} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
