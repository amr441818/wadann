import Container from '@/app/components/shared/container'
import Image from 'next/image'
import React from 'react'
type fileType= {
  id: number,
  file_name: string,
  original_url: string
  extension: string,
  size: number,
}
const ImageGalary = ({images}:{images: fileType[]}) => {
  return (
    <Container>

    <div className=" hidden lg:flex flex-wrap items-center gap-6  ">
       

       {images.map((image, index) => {

          if(index < 5){
            return <Image key={image.id} width={196} height={148}  alt='' src={image.original_url} className='rounded-[12px] w-[196px] h-[148px] '/>
          }
       })}

      {images.length > 5&& (
        <>
 <div className="flex relative h-full">
 <div className="flex w-full h-full absolute z-10 rounded-[12px] top-0 left-0 bg-[#00000066]"></div>
 <div className="flex justify-center items-center w-full h-full absolute z-20 rounded-[12px] top-0 left-0 ">
   <button className='bg-white text-primary px-4 py-[6px] rounded-[4px] font-medium text-[14px] '> See All {`${images?.length}`} photos</button>
 </div>
<Image  width={196} height={148} alt=''    src={images[5]?.original_url} className='rounded-[12px] w-[196px] h-[148px] '/>
</div>
</>
      )}
   
      
      
    
      
     
       
   
    </div>
           </Container>
  )
}

export default ImageGalary