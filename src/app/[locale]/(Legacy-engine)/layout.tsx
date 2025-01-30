import "@/styles/globals.css";

import { Cairo } from "next/font/google";
import FixedSocial from "@/app/components/shared/FixedSocial";
import Footer from "@/app/components/shared/footer";
import Header from "@/app/components/shared/header";
import { Icon } from "@iconify/react";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/styles/providers";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
  return (
    <html lang={locale} dir={"rtl"} suppressHydrationWarning>
      <body className={`${cairo.className} bg-bodyColor`} dir={"rtl"}>
        <NextIntlClientProvider locale={locale || "ar"} messages={messages}>
          <Providers locale={locale || "ar"}>
            <Header lang={locale} />

           <FixedSocial />

            <div className="fixed bottom-4 right-4 flex gap-5 flex-col z-[999]">
              <div className="bg-primary hover:bg-black/80 p-3 rounded-full duration-300">
                <Icon
                  className="text-white text-3xl"
                  icon="hugeicons:whatsapp"
                />
              </div>
            </div>
            {children}
            <Footer locale={locale || "ar"} />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
