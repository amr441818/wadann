"use client";

import "swiper/css/pagination";
import "../Achievements/slider/AchievemetsSlider.css";

import BlogCard from "../blogs/BlogCard";
import Container from "../shared/container";
import { Icon } from "@iconify/react";
import MainLink from "../shared/main-link";
export interface Post {
  id: number;
  title: string;
  short: string;
  image: string;
  created_at: string;
}

function BlogsHome({ locale, blogs }: { locale: string, blogs:Post[] }) {
  return (
    <div className="">
      <Container>
        <h2 className="text-3xl font-bold text-white mt-10 mb-5 text-center">احصائيات عامة</h2>
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
