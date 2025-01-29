import ContactusForm from "@/app/components/contact-us/ContactusForm"
import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import { getContactUs } from "@/lib/serverActions"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function ContactUsPage({ params }: LayoutProps) {
    const { locale } = await params

    const { data: contactUsData } = await getContactUs()

    console.log("contactUsData", contactUsData)

    const blogData = {
        imageUrl:
            "https://thumbs.dreamstime.com/b/glitch-art-visual-form-uses-digital-errors-pixelated-graphics-artifacts-to-create-abstract-distorted-images-327802040.jpg",
        imageAlt: "Artificial Intelligence",
        date: "December 12, 2024",
        tags: ["#RealEstate", "#Investment"],
        title: "How to Maximize ROI on Your Real Estate Investments",
        description:
            "This blog discusses strategies for investors to achieve higher returns, including choosing the right location, timing the market, renovating discusses strategies ...",
        link: "blogs/2",
    }

    const data = [blogData, blogData, blogData, blogData, blogData, blogData]

    return (
        <div className="pt-1">
            <HeaderWrwpper imgUrl={contactUsData?.headerByImage?.image?.original_url}>
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[40px] font-medium ">Contact Us</h1>
                        <div className="text-[14px text-center font-[300px] ">Home &gt; Contact Us</div>
                    </div>
                </div>
            </HeaderWrwpper>

            <Container className="my-16">
                <ContactusForm data={contactUsData?.data} />
            </Container>
        </div>
    )
}
