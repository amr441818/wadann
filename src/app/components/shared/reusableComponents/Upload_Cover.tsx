"use client"
import React, { useRef, useState } from "react"

import { PhotoView } from "react-photo-view"
import Image from "next/image"
import { Icon } from "@iconify/react"

type UploadImageProps = {
    user?: boolean
    setFile: React.Dispatch<React.SetStateAction<File | File[] | null>>
    editImgUrl?: string | null
    cover?: boolean
    multi?: boolean
    label?: string
    acceptType?: string
}
const Upload_cover = (props: UploadImageProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [imageList, setImageList] = useState<string[]>([])
    const [files, setFiles] = useState<File[]>([])
    const imgPreview = useRef<HTMLImageElement>(null)
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const handleImgPrevClick = () => {
        if (imgPreview.current) {
            imgPreview.current.click()
        }
    }

    const handleRemoveImg = (index: number) => {
        setImageList(imageList.filter((_, i) => i !== index))

        const newFiles = files.filter((_, i) => i !== index)

        setFiles(newFiles)

        if (props.multi) {
            props.setFile(Array.from(newFiles))
        } else {
            props.setFile(newFiles[0])
        }
    }

    console.log("imagurl files", imageList)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event?.target?.files
        if (files && files?.length > 0) {
            setFiles(Array.from(files))
            const file = files[0]
            if (props.multi) {
                props.setFile(Array.from(files))
            } else {
                props.setFile(file)
            }

            const urls = Array.from(files).map((imgfile) => {
                return URL.createObjectURL(imgfile)
            })
            //  const urls = Array.from(files).map(file => URL.createObjectURL(file));

            setImageList(urls)
        }
    }

    console.log(imageList)
    return (
        <div className="flex flex-col items-center gap-8 w-full">
            <input
                type="file"
                multiple={props.multi ? true : false}
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                accept={`${props.acceptType ? props.acceptType : "image/*"}`}
            />

            <div className="flex gap-7 w-full">
                <div
                    onClick={handleButtonClick}
                    className="flex flex-col justify-center align-center bg-bodyBg p-4 gap-1 items-center rounded-[8px] w-full"
                >
                    <Icon className="text-5xl text-[#717A84]" icon="uiw:cloud-upload" />

                    {/*                     
                    <Image
                        width={100}
                        height={100}
                        src={
                            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2be68370-04e1-4cf8-9c2e-1169c72ca4ac/dhsr96h-ae763317-4a1c-4a92-8ad0-e4d40758d41b.png/v1/fill/w_500,h_250,q_70,strp/asdsadas_by_nscangel_dhsr96h-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzJiZTY4MzcwLTA0ZTEtNGNmOC05YzJlLTExNjljNzJjYTRhY1wvZGhzcjk2aC1hZTc2MzMxNy00YTFjLTRhOTItOGFkMC1lNGQ0MDc1OGQ0MWIucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FNsn7jBp0i4vYkspE-Oe1sax7-pDrBiuuGVNtOAqk7g"
                        }
                        alt="upload imag"
                        className="w-5 h-5"
                    /> */}
                    <p>Upload</p>
                    <p>{files.length > 0 ? "" : "No file Chosen"}</p>
                    {/* {files.length > 0 ? <p>{files[0].name}</p> : "No file Chosen"} */}
                </div>

                {/* <button type="button"  onClick={handleButtonClick}  className="flex bg-[#f9f9f9] p-8 gap-4 items-center rounded-[8px] text-[#5079b8]"><IoMdAdd className="size-6" /></button> */}
            </div>

            {/* <div   className="flex gap-7">
        <div onClick={handleButtonClick} className="flex bg-[#f9f9f9] p-8 gap-4 items-center rounded-[8px] text-[#5079b8]">
        <IoCloudUploadOutline className="size-6"  />
          <p>Upload your data here with high quality</p>
        </div>

        <button type="button"  onClick={handleButtonClick}  className="flex bg-[#f9f9f9] p-8 gap-4 items-center rounded-[8px] text-[#5079b8]"><IoMdAdd className="size-6" /></button>
      </div>  */}

            <div className={`flex gap-4 flex-wrap relative ${!(imageList.length > 0) ? "hidden" : ""}`}>
                {imageList.length > 0 && props.acceptType !== ".pdf"
                    ? imageList.map((imgUrl, index: number) => (
                          <div key={imgUrl} className="rounded-[8px] w-[100px] h-[70px] relative">
                              <div className="overlay  rounded-[8px]" onClick={handleImgPrevClick}></div>
                              <div className="z-50 absolute top-0 right-0 mx-2 my-2 ">
                                  <button className="text-red-500" type="button" onClick={() => handleRemoveImg(index)}>
                                      x
                                  </button>
                              </div>

                              <PhotoView src={imgUrl}>
                                  <Image
                                      width={100}
                                      height={100}
                                      ref={imgPreview}
                                      src={imgUrl}
                                      alt="uploaded image"
                                      className="w-full object-cover rounded-[8px] h-full object"
                                  />
                              </PhotoView>
                          </div>
                      ))
                    : ""}
            </div>

            {/* <div
        onClick={handleButtonClick}
        className="flex cursor-pointer  lg:w-[220px] h-[120px] rounded-2xl border-[1px] border-black hover:border-[#EFB93F] border-solid justify-center items-center "
      >
        {props.editImgUrl? <img className="w-full h-full rounded-2xl object-cover" src={`${props?.editImgUrl}`}/> : <> {
          imageSrc ? (
            <img
              src={imageSrc}
              alt="Uploaded"
              className="w-full h-full rounded-2xl object-cover"
            />
          ) : (
            <img
              src={props.user ? uploadUser : uploadImg}
              alt=""
              className="w-[30%]"
            />
          )}
          </>
        }
      </div> */}

            {/* <button
        onClick={handleButtonClick}
        className="flex justify-between items-center  gap-[2px] "
      >
        <div className="flex flex-col">
          
          <div className="flex items-center gap-1  ">

            {props.label? (  <h5>{t(`${props.label}`)} </h5>):(  <h5>{t("tableForms.labels.upload")} </h5>)}
          
          
          </div>
        </div>
      </button> */}
        </div>
    )
}

export default Upload_cover
