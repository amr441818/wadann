import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import { getPrivacy } from "@/lib/serverActions"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function PrivacyPage({ params }: LayoutProps) {
    const { locale } = await params

    const { data: privacy } = await getPrivacy()

    console.log("aaaaaaaaaaaaa", privacy?.headerByImage?.image?.original_url)

    return (
        <div className="min-h-[438px] w-full">
            <header>
                <HeaderWrwpper imgUrl={privacy?.headerByImage?.image?.original_url}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[40px] font-medium ">Privacy And Policy</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; Privacy And Policy</div>
                        </div>
                    </div>
                </HeaderWrwpper>
            </header>
            <Container className="mt-10 mb-14">
                <div className="">{privacy?.data?.description}</div>
            </Container>
        </div>
    )
}
