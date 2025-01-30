import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { getBlog } from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}
export default async function BlogPage({ params }: LayoutProps) {
  // @ts-ignore
  /* const { locale, blog } = await params
    const { data: blogData } = await getBlog(blog) */

  return (
    <div className="min-h-[438px] w-full pt-1">
      <Container className="mt-28 mb-20">
        <div className="w-full h-[455px]">
          <Image
            className="w-full h-full object-cover rounded-3xl "
            src={
              "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
            }
            alt="loading"
            height={300}
            width={300}
          />
        </div>
        <h2 className="text-lg font-bold mt-5 mr-10">{"blogData.title"}</h2>
        <div className="py-2 text-primary flex gap-2 items-center">
          <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
          <span>{"16 ديسمبر 2024"}</span>
        </div>

        <div className="mt-10 text-xs">
          <p>{"blogData.description"}</p>
          <p className="my-3 leading-7">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
            هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
            مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص
            الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
          </p>
          <p className="my-3 leading-7">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
            هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
            مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص
            الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
          </p>
        </div>
      </Container>
    </div>
  );
}
