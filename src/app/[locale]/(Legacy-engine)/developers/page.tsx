import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import MainLink from "@/app/components/shared/main-link"
import { getDevelopers } from "@/lib/serverActions"
import Image from "next/image"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function DevelopersPage({ params }: LayoutProps) {
    const { locale } = await params
    const { data: developers } = await getDevelopers()
    console.log("developersaaaaaaaaaa", developers)
    const developerData = {
        name: "developer",
    }

    const data = [developerData, developerData, developerData, developerData, developerData, developerData]

    return (
        <div className="min-h-[438px] w-full">
            <HeaderWrwpper imgUrl={developers?.headerByImage?.image?.original_url}>
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[40px] font-medium ">Developers</h1>
                        <div className="text-[14px] text-center font-[300px] ">Home &gt; developers</div>
                    </div>
                </div>
            </HeaderWrwpper>
            <Container className="my-20">
                <div className="grid grid-cols-3 gap-10">
                    {/* @ts-ignore */}
                    {developers?.data?.map((developer, index) => (
                        <div key={index}>
                            <MainLink
                                locale={locale}
                                href={`developers/${developer.slug}`}
                                className="border border-primary text-center min-h-[100px] flex items-center justify-center text-2xl !text-primary rounded-xl h-[100px] "
                            >
                                <Image
                                    className="w-full h-full object-cover rounded-lg"
                                    src={developer?.image?.original_url}
                                    alt="developer"
                                />
                            </MainLink>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
