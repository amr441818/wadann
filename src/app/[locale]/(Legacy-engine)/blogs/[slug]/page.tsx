/* @ts-nocheck */

import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { getBlog } from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any, slug:string }>;
}
export default async function Page({ params }: LayoutProps) {
  /* @ts-ignore */
  const {locale, slug } = await params;
  const { data: blogData } = await getBlog(slug, locale);
  console.log("blog:aaaaaaaaaaaaaaaaaaaaaaaaaa ", blogData);

  return (
    <div className="min-h-[438px] w-full pt-1">
      <Container className="mt-28 mb-20">
        <div className="w-full h-[455px]">
          <Image
            className="w-full h-full object-cover rounded-3xl "
            src={
              blogData?.image ||
              "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
            }
            alt="loading"
            height={300}
            width={300}
          />
        </div>
        <h2 className="text-lg font-bold mt-5 mr-10">
          {blogData?.title || "no title"}
        </h2>
        <div className="py-2 text-primary flex gap-2 items-center">
          <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
          <span>{blogData?.created_at || "16 ديسمبر 2024"}</span>
        </div>

        <div className="mt-10 text-xs">
          <p>{blogData?.short}</p>
          <p
            className="my-3 leading-7 flex flex-wrap !break-all"
            dangerouslySetInnerHTML={{ __html: blogData?.content }}
          ></p>
        </div>
      </Container>
    </div>
  );
}
