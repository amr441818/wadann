import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import { getTerms } from "@/lib/serverActions"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function TermsPage({ params }: LayoutProps) {
    const { locale } = await params

    const { data: terms } = await getTerms()

    console.log("aaaaaaaaaaaaa", terms?.headerByImage?.image?.original_url)

    return (
        <div className="min-h-[438px] w-full">
            <header>
                <HeaderWrwpper imgUrl={terms?.headerByImage?.image?.original_url}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[40px] font-medium ">Terms And Conditions</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; Terms And Conditions</div>
                        </div>
                    </div>
                </HeaderWrwpper>
            </header>
            <Container className="mt-10 mb-14">
                <div className="">{terms?.data?.description}</div>
            </Container>
        </div>
    )
}
