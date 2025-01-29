import Image from "next/image"
import logo from "@/public/logo.svg"
import MainLink from "../shared/main-link"
import { Icon } from "@iconify/react"
import BlogTags from "./BlogTags"

const BlogCard = ({ blogData, locale }: { blogData: any; locale: any }) => {
    return (
        <div className="rounded overflow-hidden">
            <div className="max-h-[250px] overflow-hidden rounded-2xl">
                <Image
                    className="w-full h-full object-cover"
                    src={blogData?.image?.original_url}
                    width={800}
                    height={600}
                    alt={blogData.imageAlt}
                />
            </div>
            <div className="px-1 py-4">
                <div>
                    <BlogTags tags={blogData.tags} />
                </div>
                <div className="py-2 text-paragText">{blogData.date}</div>
                <div className="pb-4">
                    <div className="font-medium text-xl mb-2">{blogData.title}</div>
                    <p className="text-gray-700 text-base">{blogData.description}</p>
                </div>
                <div className="py-4">
                    <MainLink
                        href={`blogs/${blogData?.slug}`}
                        locale={locale}
                        className="!text-[#A37130] hover:!text-[#A37130]/80"
                    >
                        <span className="flex gap-3 items-center">
                            Read More
                            <Icon icon="fa6-solid:arrow-right-long" />
                        </span>
                    </MainLink>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
