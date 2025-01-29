import React from 'react'
import Container from '../shared/container'
import { getHomeWhyChooseUsData } from '@/lib/serverActions'

const WhyUs = async () => {

  const data = await getHomeWhyChooseUsData()
  return (
    <Container>
    <div className='flex flex-col gap-8'>
 <h6 className="text-[32px] text-center lg:text-start">{data?.data?.header?.title}</h6>

 <div className="grid grid-cols-12 gap-5">

  
   {data?.data?.data.map((item:any) => (
    <>
     <div className="col-span-12 lg:col-span-4 flex flex-col gap-[48px]" >

     <div className="flex flex-col text-center lg:text-start gap-4">
     <h6 className="text-[24px] text-primary">+{item?.number} {item?.title}</h6>
     <span className='h-[2px] bg-linearbg'></span>
     <p className='text-[20px] text-paragText'>{item?.description} </p>

     </div>
     
     
 </div>
 </>
   ))}
 </div>
 

    </div>
    </Container>
  )
}

export default WhyUs