import { getBlog, getBlogs } from "@/lib/serverActions";

import BlogCard from "@/app/components/blogs/BlogCard";
import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}
export default async function Page({ params }: LayoutProps) {
  const { locale } = await params;

  const { data: blogs } = await getBlogs(locale);
  console.log("data: blogs", blogs);

  return (
    <div className="min-h-[438px] w-full pt-1">
      <Container className="mt-28 mb-20">
        <div className="grid grid-cols-3 gap-10">
          {/* @ts-ignore */}
          {blogs?.map((blog, index) => (
            <BlogCard key={index} locale={locale} blogData={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}
