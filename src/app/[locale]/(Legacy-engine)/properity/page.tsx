"use client"
import ProperityDetails from "@/app/components/properityDetails/ProperityDetails"
import React from "react"

type Props = {
    params: Promise<{ locale: string | any }>
}

const page = async ({ params }: Props) => {
    const { locale } = await params
    return (
        <div>
            <ProperityDetails slug={"slug"} locale={locale} />
        </div>
    )
}

export default page
