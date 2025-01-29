import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import MainLink from "@/app/components/shared/main-link"
import PropertyDetails from "@/app/components/properityDetails/ProperityDetails"

type Props = {
    params: Promise<{ locale: string | any, slug:string }> // Handle both promise and object
}
export default async function page({ params }: Props) {
    const { locale, slug } = await params

    return <PropertyDetails slug={slug} locale={locale || "en"} />
}

// import React from "react"
// import ProperityDetails from "../../../../components/properityDetails/ProperityDetails"
// interface LayoutProps {
//     params: Promise<{ locale: string | any; slug: string }>
// }
// const page = async ({ params }: { params: LayoutProps }) => {
//     // @ts-ignore
//     const { locale, slug } = params
//     return <ProperityDetails slug={slug} locale={locale} />
// }

// export default page
