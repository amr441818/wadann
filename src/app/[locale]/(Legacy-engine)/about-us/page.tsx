import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import { getAboutUs, getBlogs } from "@/lib/serverActions"
import Image from "next/image"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function AboutPage({ params }: LayoutProps) {
    const { locale } = await params

    const { data: aboutUs } = await getAboutUs()

    console.log("dataaaaaaaaboutUs", aboutUs?.data?.founder?.media?.original_url)

    // const blogData = {
    //     imageUrl:
    //         "https://thumbs.dreamstime.com/b/glitch-art-visual-form-uses-digital-errors-pixelated-graphics-artifacts-to-create-abstract-distorted-images-327802040.jpg",
    //     imageAlt: "Artificial Intelligence",
    //     date: "December 12, 2024",
    //     tags: ["#RealEstate", "#Investment"],
    //     title: "How to Maximize ROI on Your Real Estate Investments",
    //     description:
    //         "This blog discusses strategies for investors to achieve higher returns, including choosing the right location, timing the market, renovating discusses strategies ...",
    //     link: "blogs/2",
    // }

    // const data = [blogData, blogData, blogData, blogData, blogData, blogData]

    return (
        <div className="min-h-[438px] w-full">
            <header>
                <HeaderWrwpper imgUrl={aboutUs?.header?.image?.original_url}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[40px] font-medium ">About us</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; About us</div>
                        </div>
                    </div>
                </HeaderWrwpper>
            </header>
            <Container className="mt-10 mb-14">
                <div className="mt-20">
                    <h2 className="mb-5 font-normal text-4xl">Meet the Founders</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                        <div className="w-full">
                            <Image
                                width={500}
                                height={500}
                                src={aboutUs?.data?.founder?.media?.original_url}
                                alt="Our Team"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            {/* @ts-ignore */}
                            {aboutUs?.data?.founder?.member?.map((person, index) => (
                                <div
                                    key={index}
                                    className="text-muted-foreground mb-4 font-light text-xl border-b border-muted-foreground"
                                >
                                    <h2 className="text-[28px] text-[#0B1617] font-medium mb-2">{person?.title}</h2>
                                    <h4 className="text-xl text-primary mb-2">{person?.position}</h4>
                                    <p className="text-muted-foreground text-xl">{person?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    {" "}
                    <h2 className="mb-5 font-normal text-4xl">{aboutUs?.data?.what?.title}</h2>
                    <p className="text-muted-foreground text-2xl mb-5">{aboutUs?.data?.what?.description}</p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                        <div className="w-full">
                            <Image
                                width={500}
                                height={500}
                                src={aboutUs?.data?.what?.media?.original_url}
                                alt="Our Team"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            {/* @ts-ignore */}
                            {aboutUs?.data?.what?.cart?.map((item, index) => (
                                <div key={index} className="text-muted-foreground mb-4 font-light text-xl ">
                                    <h2 className="text-[28px] text-[#0B1617] font-medium mb-2">{item?.title}</h2>

                                    <p className="text-muted-foreground text-xl">{item?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="mb-10">
                        <h2 className="mb-5 font-normal text-4xl">
                            {aboutUs?.data?.data_value?.our_value?.value_title}
                        </h2>
                        <p className="text-muted-foreground text-2xl mb-5">
                            {aboutUs?.data?.data_value?.our_value?.value_description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                        {/* @ts-ignore */}
                        {aboutUs?.data?.data_value?.values?.map((item, index) => (
                            <div key={index}>
                                <div className="text-muted-foreground mb-4 font-light text-xl ">
                                    <h2 className="text-[28px] text-[#0B1617] font-medium mb-2">{item?.title}</h2>

                                    <p className="text-muted-foreground text-xl">{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
