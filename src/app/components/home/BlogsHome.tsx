"use client";



import BlogCard from "../blogs/BlogCard";
import Container from "../shared/container";

import { useTranslations } from "next-intl";

export interface Post {
  id: number;
  title: string;
  short: string;
  image: string;
  created_at: string;
}

function BlogsHome({ locale, blogs }: { locale: string, blogs:Post[] }) {
  const t = useTranslations("Header");
  return (
    <div className="" id="blogs">
      <Container>
      <div className="flex justify-center items-center">
      <h2 className="text-3xl font-bold text-primary mt-10 mb-5 text-center unique-h w-fit ">
         {locale === "ar" ? "المدونة": "Blogs"}
        </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {blogs?.map((item:Post, index) => (
           <BlogCard key={index} locale={locale} blogData={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BlogsHome;
