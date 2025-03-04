import React from "react"

function BlogTags({ tags }: { tags: string[] }) {
    return (
        <>
            {tags.map((tag: string, index: number) => (
                <span
                    key={index}
                    className="inline-block bg-[#CEA76833] text-[#A37130]    px-3 py-1 text-sm font-semibold mr-2"
                >
                    {tag}
                </span>
            ))}
        </>
    )
}

export default BlogTags
