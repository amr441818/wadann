"use client"

import { useTranslations } from "next-intl"
import Container from "../container"
import { NavbarMenueItem } from "@/types/shared"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Language from "./components/language"
import Currencies from "./components/currencies"
import { Icon } from "@iconify/react"
import AsideMenu from "./components/aside-menu"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Header = ({ lang }: { lang: string }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const t = useTranslations("Header")
    const menuItems: NavbarMenueItem[] = [
        { value: t("homeLink"), path: "/" },
        { value: t("aboutUs"), path: "/about-us" },
        { value: t("services"), path: "/services" },
        { value: t("news"), path: "/news" },
        { value: t("contactUs"), path: "/contact-us" },
        // { value: t("profile"), path: "/profile" },
        // { value: t("myAccount"), path: "/my-account" },
    ]

    // in (single blog | developer)

    const pathname = usePathname()
    let place = pathname.split("/").pop()
    // const place = "other-page"
    // // @ts-ignore

    console.log("pathname", pathname)
    console.log("place", place)

    let logoPath = place === "contact-us" ? "/logoGold.svg" : place === "developer" ? "/logoGold.svg" : "/logo.svg"

    console.log(logoPath)
    const isSingleBlog = pathname.includes("blogs") && place !== undefined && place !== "blogs"
    console.log("isSingleBlog", isSingleBlog)
    if (isSingleBlog) {
        place = "single-blog"

        logoPath = "/logoBlack.svg"
    }

    useEffect(() => {
        const handleScroll = () => {
            console.log("aaaaaaaaaaaa", window.scrollY)
            if (window.scrollY > 2) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            className={`bg-transparent pb-4 pt-10 max-h-[90px] fixed w-full z-[99] px-5 lg:px-0 ${
                place === "single-blog" ? "text-black" : "text-white"
            } ${isScrolled ? "!bg-white shadow-lg !text-black [&_*]:!text-black" : ""} `}
        >
            <Container>
                <nav className="flex items-center justify-between ">
                    <AsideMenu iconColor={place === "single-blog" || isScrolled ? "black" : "white"} lang={lang} />

                    <div>
                        <Image
                            src={isScrolled ? "/logoBlack.svg" : logoPath}
                            width={100}
                            height={100}
                            alt={"logo"}
                            className="h-[40px] w-[160px]"
                            priority
                        />
                    </div>

                    <div className="flex items-center justify-end gap-4 w-[150px] lg:w-[250px]">
                        <Currencies iconColor={place === "single-blog" || isScrolled ? "black" : "white"} />
                        <Language iconColor={place === "single-blog" || isScrolled ? "black" : "white"} />
                        {/* <Button className="bg-initialBg px-10 text-primary h-[44px] border border-primary">
                            {t("register")}
                        </Button>
                        <Button className="bg-primaryBg px-10 text-initial h-[44px]">{t("login")}</Button> */}
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default Header
