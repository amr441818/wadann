import DesignDoor from '@/app/components/designDoor/DesignDoor'
import React from 'react'
interface LayoutProps {
    params: Promise<{ locale: string | any }>; // Handle both promise and object
  }
  
const  page = async ({params}:LayoutProps) => {
    const { locale } = await params;
  return (
    <div><DesignDoor locale={locale}/></div>
  )
}

export default page