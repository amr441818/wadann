import BlogCard from "@/app/components/blogs/BlogCard"
import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import { getBlog } from "@/lib/serverActions"

interface LayoutProps {
    params: Promise<{ locale: string | any }>
    blog:string // Handle both promise and object
}
export default async function BlogsPage({ params, blog }: LayoutProps) {
    const { locale } = await params

    const { data: blogs } = await getBlog(blog)

    // console.log("dataaaaaaa", blogs)

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
        <div className="min-h-[221px] w-full">
            <header>
                <HeaderWrwpper imgUrl={blogs?.image}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[40px] font-medium ">Blogs</h1>
                            <div className="text-[14px] text-center font-[300px] ">Home &gt; Blogs</div>
                        </div>
                    </div>
                </HeaderWrwpper>
            </header>
            <Container className="mt-20">
                <div className="grid grid-cols-3 gap-10">
                    {/* @ts-ignore */}
                    {blogs?.data?.map((blog, index) => (
                        <BlogCard key={index} locale={locale} blogData={blog} />
                    ))}
                </div>
            </Container>
        </div>
    )
}
