"use client"

import Link from "next/link"

interface MainLinkProps {
    locale?: string
    href: string
    children: React.ReactNode
    className?: string
}

const MainLink = (params: MainLinkProps) => {
    const { locale, href, children, className } = params
    return (
        <Link href={`/${locale}/${href}`} className={`text-white inline-block    duration-300 ${className}`}>
            {children}
        </Link>
    )
}

export default MainLink
