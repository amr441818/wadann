import BlogCard from "@/app/components/blogs/BlogCard"
import BlogTags from "@/app/components/blogs/BlogTags"
import Container from "@/app/components/shared/container"
import { getBlog } from "@/lib/serverActions"
import Image from "next/image"

interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}
export default async function BlogPage({ params }: LayoutProps) {
    // @ts-ignore
    const { locale, blog } = await params
    const { data: blogData } = await getBlog(blog)

    // const blogData = {
    //     imageUrl: "/assets/img/singleblog.png",
    //     imageAlt: "Artificial Intelligence",
    //     date: "December 12, 2024",
    //     tags: ["Artifical Intelligence", "News", "Videos"],
    //     title: "How to Maximize ROI on Your Real Estate Investments",
    //     description:
    //         "1. Choose the Right Location Location is everything in real estate. Properties in areas with high demand, strong infrastructure, and future growth potential tend to offer better returns. Look for neighborhoods with good schools, access to transportation, and upcoming development projects. A property in the right location can appreciate significantly over time.",
    //     link: "#",
    // }

    return (
        <div className="min-h-[438px] w-full pt-1">
            <Container className="mt-28 mb-20">
                <h2 className="text-5xl">{blogData.title}</h2>

                <div className="flex justify-between my-10">
                    <div>
                        <BlogTags tags={blogData.tags} />
                    </div>
                    <span>{blogData.date}</span>
                </div>

                <div className="w-full h-[455px]">
                    <Image
                        className="w-full h-full object-cover rounded-3xl "
                        src={blogData.image.original_url}
                        alt="loading"
                        height={300}
                        width={300}
                    />
                </div>

                <div className="mt-10">
                    <p>{blogData.description}</p>
                </div>
            </Container>
        </div>
    )
}
