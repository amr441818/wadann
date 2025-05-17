/* @ts-nocheck */

import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { getPage } from "@/lib/serverActions";
import React from "react";
// import { notFound } from "next/navigation";



interface LayoutProps {
  params: Promise<{ locale: string | any; id: string }>;
}
export default async function Page({ params }: LayoutProps) {
  /* @ts-ignore */
  const { locale, id } = await params;
  const { data: pageData } = await getPage(id, locale);

  console.log("pageData", pageData);

  if (!pageData?.page) {
    return (
      <Container>
        <div className="mt-32 text-red-500 text-5xl text-center h-[80vh] flex items-center justify-center">not found</div>
      </Container>
    );
    // notFound();
  }

  return (
    <div className="min-h-[438px] w-full pt-1">
      <Container className="mt-28 mb-20">
        <div className="w-full h-[455px]">
          <Image
            className="w-full h-full object-cover    "
            src={
              pageData?.page?.image ||
              "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
            }
            alt="loading"
            height={2000}
            width={800}
          />
        </div>
        <h2 className="text-lg font-bold mt-5 mr-10">
          {pageData?.page?.title || "no title"}
        </h2>
        {/* <div className="py-2 text-primary flex gap-2 items-center">
          <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
          <span>{blogData?.created_at || "16 ديسمبر 2024"}</span>
        </div> */}

        <div className="mt-10 text-xs">
          <p
            className="my-3 leading-7 flex flex-wrap !break-all"
            dangerouslySetInnerHTML={{ __html: pageData?.page?.content }}
          ></p>
        </div>
      </Container>
    </div>
  );
}
