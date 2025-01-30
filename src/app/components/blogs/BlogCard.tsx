import BlogTags from "./BlogTags";
import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLink from "../shared/main-link";
import logo from "@/public/logo.png";

const BlogCard = ({ blogData, locale }: { blogData: any; locale: any }) => {
  return (
    <div className="rounded-3xl overflow-hidden">
      <div className="max-h-[150px] lg:max-h-[200px] w-full overflow-hidden">
        <Image
          className="w-full h-[150px] lg:h-[200px] object-cover"
          src={logo}
          width={200}
          height={200}
          alt={"logo"}
        />
      </div>
      <div className="px-1 py-4 bg-white">
        <div className="pb-2">
          <div className="font-medium text-sm mb-1">
            {"هنا يكتب اسم الموضوع بالمدونة"}
          </div>
          <div className="py-2 text-primary flex gap-2 items-center">
            <Icon icon="fa6-solid:arrow-right-long" className="rotate-180" />
            <span>{"16 ديسمبر 2024"}</span>
          </div>
          <p className="text-gray-700 text-xs line-clamp-4">
            {
              "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق"
            }
          </p>
        </div>
        <div className="pb-3 flex justify-end">
          <MainLink
            href={`blogs/${blogData?.slug}`}
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
