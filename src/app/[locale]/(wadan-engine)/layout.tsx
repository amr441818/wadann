import "@/styles/fonts.css";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { Cairo } from "next/font/google";
import FixedSocial from "@/app/components/shared/FixedSocial";
import Footer from "@/app/components/shared/footer";
import Header from "@/app/components/shared/header";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/styles/providers";
import { ReactNode } from "react";
import WhatsApp from "@/app/components/WhatsApp";
import { getMessages } from "next-intl/server";
import { getSettings } from "@/lib/serverActions";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ToastContainer } from 'react-toastify';

// Define the correct type for LayoutProps
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}
const cairo = Cairo({
  subsets: ["latin"], // Include specific subsets
  weight: ["400", "700"], // Include weights as needed
});
export default async function Layout({ children, params }: LayoutProps) {
  // If params is a promise, await it to resolve
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale } = resolvedParams;

  // Validate the incoming locale against the supported locales
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Return the layout with NextIntlClientProvider
  const { data } = await getSettings(locale);

 

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${cairo.className} bg-bodyColor`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider locale={locale || "ar"} messages={messages}>
          <Providers locale={locale || "ar"}>
            <ToastContainer position="bottom-left" />
            <Header catalog={data?.catalog} lang={locale} />

            <FixedSocial data={data} />

            <WhatsApp link={data?.whatsapp} />

            {children}
            <Footer data={data} locale={locale || "ar"} />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
