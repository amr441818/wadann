/* @ts-nocheck */

import BlogTags from "@/app/components/blogs/BlogTags";
import Container from "@/app/components/shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { getBlog, getProject, getProjects } from "@/lib/serverActions";
import OfferSlider from "@/app/components/offers/OfferSlider/OfferSlider";
import ProjectsSlider from "../ProjectsSlider/ProjectsSlider";

interface LayoutProps {
  params: Promise<{ locale: string | any, slug:string }>;
}
export default async function Page({ params }: LayoutProps) {
  /* @ts-ignore */
  const {locale, slug } = await params;
  // const { data: blogData } = await getBlog(slug, locale);
  const { data: projectsData
  } = await getProject(slug, locale);


  return (
    <div className="min-h-[438px] w-full pt-1">
      <Container className="mt-28 mb-20">
        <div className="w-full h-[455px]">
        <ProjectsSlider files={[{image:"https://almasader.net/wadan/backend/public/storage/projects/N3VeoVpCFXzmmbhDbsI6tpF4uLSorIavFZ2DQw1T.jpg",name:'dfs'}]} />
          {/* <Image
            className="w-full h-full object-cover    "
            src={
              projectsData?.image ||
              "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
            }
            alt="loading"
            height={300}
            width={300}
          /> */}
        </div>
        <h2 className="text-lg font-bold mt-5 mr-10">
          {projectsData?.name || "no title"}
        </h2>
        <div className="py-2 text-primary flex gap-2 items-center">
          <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
          <span>{projectsData?.created_at || "16 ديسمبر 2024"}</span>
        </div>

        <div className="mt-10 text-xs">
          <p>{projectsData?.content}</p>
          {/* <p
            className="my-3 leading-7 flex flex-wrap !break-all"
            dangerouslySetInnerHTML={{ __html: projectsData?.content }}
          ></p> */}
        </div>
      </Container>
    </div>
  );
}
