import ContactForm from '@/app/components/contactForm/ContactForm';
import Container from '@/app/components/shared/container';
import { getSettings } from '@/lib/serverActions';
import React from 'react'
interface LayoutProps {
    params: Promise<{ locale: string | any }>; // Handle both promise and object
  }
  
const Page = async ({ params }: LayoutProps) => {
    const {locale}  = await params;
    const { data } = await getSettings(locale);
  return (
    <div className='pt-[100px]'>
<Container>

<ContactForm data={data?.contactus} />
</Container>
    </div>
  )
}

export default Page 