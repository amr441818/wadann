import Container from "../container"
import { Icon } from "@iconify/react"
import Image from "next/image"
import MainLink from "../main-link"
import logoServer from "@/public/logoServer.svg"

// import logo from "../../../../../public/logo.png"





const Footer = async (params: any) => {
    const { locale: language } = await params
    console.log("language", language)
    const cols = [
        {
            title: "Main Pages",
            links: ["Home", "About us", "List Your Property"],
        },
        {
            title: "About",
            links: ["About us", "List Your Property"],
        },
        {
            title: "Contact",
            links: ["About us", "List Your Property"],
        },
    ]

    return (
        <footer className=" bg-black text-white px-5 lg:px-0">
            <Container>
                {/* logo and links */}
                <div className="grid grid-cols-1 md:grid-cols-4 py-14 gap-3">
                    <div className="flex justify-center md:justify-start max-md:items-center ">
                        <Image className="w-[200px] h-[54px]" src={logoServer} width={200} height={54} alt="logo" />
                        {/* <Image src="logo.png" width={100} height={100} alt="logo" /> */}
                    </div>

                    {cols.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-semibold mb-2">{col.title}</h3>
                            <div className="flex flex-col ">
                                {col.links.map((link) => (
                                    <MainLink
                                        className="my-2 lg:my-5 block text-white/70"
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
                </div>

                {/* copyright */}
                <div className="border-t border-gray-600 flex flex-col-reverse md:flex-row items-center justify-between gap-y-5 pt-5 pb-14">
                    <div className="flex gap-5">
                        <MainLink locale={language} href="home">
                            <Icon icon="fa6-brands:twitter" />
                        </MainLink>
                        <MainLink locale={language} href="home">
                            <Icon icon="fa6-brands:linkedin-in" />
                        </MainLink>
                        <MainLink locale={language} href="home">
                            <Icon icon="fa6-brands:facebook-f" />
                        </MainLink>
                    </div>
                    <div className="flex gap-10">
                        <MainLink className="!text-white/70" locale={language} href="home">
                            FAQs
                        </MainLink>
                        <MainLink className="!text-white/70" locale={language} href="home">
                            Privacy Policy
                        </MainLink>
                        <MainLink className="!text-white/70" locale={language} href="home">
                            Terms & Conditions
                        </MainLink>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
