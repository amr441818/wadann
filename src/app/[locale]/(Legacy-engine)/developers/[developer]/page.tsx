import { CardWrwpper } from "@/app/components/shared/card"
import Container from "@/app/components/shared/container"
import { getDeveloper } from "@/lib/serverActions"
import Image from "next/image"

interface LayoutProps {
    params: Promise<{ locale: string | any; developer: string | any }> // Handle both promise and object
}

export default async function DeveloperPage({ params }: LayoutProps) {
    const { locale, developer } = await params
    const { data: developerDatax } = await getDeveloper(developer)

    const image = developerDatax?.image?.original_url
    console.log("sssssssssssssss", image)
    const description = developerDatax?.description
    const name = developerDatax?.name
    const slug = developerDatax?.slug

    const place = { id: "1", title: "Binghatti Skyrise", name: "Dubai Hills", price: 10023.6, currency: "AED" }

    const property = {
        image: "/assets/img/image3.png",
        name: "PINGAN Real Estate",
        price: 1000,
        description: "PINGAN Real Estate is a leading developer",
        place: place,
    }

    const developerData = {
        image: "/assets/img/developer.png",
        name: "PINGAN",
        description:
            "PINGAN Real Estate is a leading developer renowned for creating innovative residential and commercial properties. With a strong focus on modern design, sustainable practices, and unmatched quality, PINGAN delivers exceptional spaces that elevate lifestyles and set new industry benchmarks. From luxury high-rises to thoughtfully planned communities, PINGAN is committed to building a future where comfort meets functionality.",
        properties: [property, property, property],
    }

    return (
        <div className="min-h-[438px] w-full">
            <div
                className="bg-[url('/assets/img/singleProperty.png')] bg-no-repeat bg-cover bg-center min-h-[240px] relative"
                style={{
                    // boxShadow: "inset 0 0px 80px 80px black",
                    boxShadow: "inset 0 120px 80px -80px black",
                }}
            >
                {/* <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
                <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 ">
                    <Image
                        src={image}
                        className="w-[185px] h-[185px] rounded-full border-2 border-white shadow-xl mb-5"
                        alt={name}
                        width={500}
                        height={500}
                    />
                    <h2 className="text-[32px] font-medium mx-auto text-center">{name}</h2>
                </div>
            </div>
            <Container className="mb-20">
                <div className="mt-52 pb-10 border-b border-gray-300  ">
                    <h3 className="text-[28px] capitalize mb-4">description</h3>
                    <p className="text-paragText leading-8">{description}</p>
                </div>
                <div className="mt-16">
                    <h3 className="text-[28px] mb-4">Listed Properties</h3>
                    <span className="block text-paragText text-xl mb-5">24 Listings</span>
                    <div className="grid grid-cols-3 gap-4">
                        {developerData.properties.map((property: any, index: number) => (
                            <CardWrwpper
                                key={index}
                                className="!w-full"
                                place={property.place}
                                imgUrl={property.image}
                                locale={locale}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
