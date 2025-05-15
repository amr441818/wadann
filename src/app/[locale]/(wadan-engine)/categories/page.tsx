import { getBlog, getBlogs, getCategories, getProjects } from "@/lib/serverActions";

import BlogCard from "@/app/components/blogs/BlogCard";
import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ProjectCard from "./projectCard";
import MainLink from "@/app/components/shared/main-link";

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}
export default async function Page({ params }: LayoutProps) {
  const { locale } = await params;

  const { data } = await getCategories(locale);
 
console.log('cats', data)
  return (
    <div className="min-h-[800px] w-full pt-1 "  >
      <Container className="mt-[150px] mb-20">

    <div className="flex flex-col gap-20">
    <h1 className="text-primary font-semibold text-[28px] my-10 text-center"> صمم باباك</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full lg:gap-10">
    
    {data?.map((category, index) => (
     <MainLink locale={locale} key={index} href={`/design-door?cat_id=${category.id}`}>
       <ProjectCard key={index} locale={locale} projectData={category} />
     </MainLink>
    ))}
  </div>
    </div>
      </Container>
    </div>
  );
}
