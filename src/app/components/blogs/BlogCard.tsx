import './blog.css'

import BlogTags from "./BlogTags";
import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLink from "../shared/main-link";
import { Post } from "../home/BlogsHome";
import logo from "@/public/logo.png";

const BlogCard = ({ blogData, locale }: { blogData: Post; locale: any }) => {
  return (
    <div className="rounded-3xl overflow-hidden blog-shadow">
      <div className="max-h-[150px] lg:max-h-[200px] w-full overflow-hidden">
        <Image
          className="w-full h-[150px] lg:h-[200px] object-cover"
          src={blogData?.image}
          width={200}
          height={200}
          alt={blogData.title || "no title"}
        />
      </div>
      <div className="px-[14px] py-4 bg-white">
        <div className="pb-2">
          <div className="font-medium text-sm mb-1">
            {blogData.title || "no title"}
          </div>
          <div className="py-2 text-primary flex gap-1 items-center">
            <Icon icon="mdi-light:clock" className="rotate-180 size-5 font-bold" />
            <span>{blogData.created_at}</span>
          </div>
          <p className="text-gray-700 text-xs line-clamp-4">
           {blogData?.short}
          </p>
        </div>
        <div className="pb-3 flex justify-end">
          <MainLink
            /* href={`blogs/${blogData?.slug}`} */
            href={`blogs/${blogData?.id}`}
            locale={locale}
            className="bg-transparent !text-primary hover:!text-[#A37130]/80 px-5 pt-2"
          >
            <span className="flex gap-3 items-center">
              عرض تفاصيل الموضوع
              <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
            </span>
          </MainLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
