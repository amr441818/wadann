import '../../../components/blogs/blog.css'


import { Icon } from "@iconify/react";
import Image from "next/image";


import logo from "@/public/logo.png";
import MainLink from '@/app/components/shared/main-link';
import { Post } from '@/app/components/home/BlogsHome';
import { useTranslations } from 'next-intl';

const ProjectCard = ({ projectData, locale }: { projectData: Post; locale: any }) => {
  const t = useTranslations("Header");
  return (
    <div className="   overflow-hidden blog-shadow">
      <div className="max-h-[150px] lg:max-h-[200px] w-full overflow-hidden">
        <Image
          className="w-full h-[150px] lg:h-[200px] object-cover"
          src={projectData?.image}
          width={200}
          height={200}
          //@ts-ignore
          alt={projectData.name || "no title"}
        />
      </div>
      <div className="px-[14px] py-4 bg-white">
        <div className="pb-2">
          <div className="font-medium text-sm mb-1">
            {/* @ts-ignore */}
            {projectData.name || "no title"}
          </div>
          {/* <div className="py-2 text-primary flex gap-1 items-center">
            <Icon icon="mdi-light:clock" className="rotate-180 size-5 font-bold" />
            <span>{projectData.created_at}</span>
          </div> */}
          <p className="text-gray-700 text-xs line-clamp-4">
            {/* @ts-ignore */}
           {projectData?.content}
          </p>
        </div>
        <div className="pb-3 flex justify-end">
          <MainLink
            /* href={`blogs/${projectData?.slug}`} */
            href={`blogs/${projectData?.id}`}
            locale={locale}
            className="bg-transparent !text-primary hover:!text-[#A37130]/80 px-5 pt-2"
          >
            <span className="flex gap-3 items-center">
{t("show")}              <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
            </span>
          </MainLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
