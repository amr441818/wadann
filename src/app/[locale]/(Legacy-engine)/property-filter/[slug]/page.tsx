import Filter from "@/app/components/filter"
import FilterSideMenu from "@/app/components/filter/components/FilterSideMenu"
import PropertyFilter from "@/app/components/properity-filter/PropertyFilter"
import { CardWrwpper } from "@/app/components/shared/card"
import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import Image from "next/image"

interface LayoutProps {
    params: Promise<{ locale: string | any }>
}
export default async function HomePage({ params }: LayoutProps) {
    const { locale } = await params
    // const [openSideFilter, setOpenSideFilter] = useState(false)

    const place = { id: "1", title: "Binghatti Skyrise", name: "Dubai Hills", price: 10023.6, currency: "AED" }
    const place1 = { id: "2", title: "Binghatti daf", name: "dfds Hills", price: 1006, currency: "Egp" }
    return (
        <div className="min-h-[438px] w-full flex flex-col gap-4 justify-center pb-10">
            <PropertyFilter />
            <Container>
                <div className="grid grid-cols-12  gap-[21px] w-full mx-auto mt-[500px] lg:mt-[165px]">
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place1}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place1}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place1}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                    <CardWrwpper
                        className="col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3"
                        place={place1}
                        imgUrl="/card.png"
                        locale={locale}
                    />
                </div>
            </Container>
        </div>
    )
}
