import { getBlog, getBlogs, getProjects } from "@/lib/serverActions";

import BlogCard from "@/app/components/blogs/BlogCard";
import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ProjectCard from "./projectCard";

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}
export default async function Page({ params }: LayoutProps) {
  const { locale } = await params;

  const { data: projects } = await getProjects(locale);
 

  return (
    <div className="min-h-[800px] w-full pt-1 "  >
      <Container className="mt-[150px] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full lg:gap-10">
          {/* @ts-ignore */}
          {projects?.map((project, index) => (
            <ProjectCard key={index} locale={locale} projectData={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
