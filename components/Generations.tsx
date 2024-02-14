import React, { useState } from 'react'
import {Divider, Image} from "@nextui-org/react";
import { createCanvasToBase64, generateMaskBase64 } from '../utils/getBase64';

const Generations = () => {

  const  [file, setFile] = useState()
  const [result , setResult] =  useState([])
  const [image, setImage] = useState<string | ArrayBuffer | null>('')

  const handelGenrateBase64 = () =>{
    const res = Promise.all([createCanvasToBase64(image as string), generateMaskBase64(image as string)])
    res.then((res) => {
      setResult(res)
    })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFile(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgURL = e.target?.result as string;
        setImage(imgURL);
      };
      reader.readAsDataURL(file);
    }
  }


  return (
    <>
        <h2 className="text-xl text-gray-400 p-2">Generations</h2>
        <Divider  />
        <div>
          {!file ?
    <label className="w-64 flex flex-col items-center px-4 py-6 bg-gray-400 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue   cursor-pointer hover:bg-blue hover:text-white/50">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal gray-400">Select a file</span>
        <input type='file' className="hidden"  value={file} onChange={(e) => handleImageUpload(e)}/>
    </label>
:
    <div className='flex w-full justify-between'>
      <div>{file.name}</div>
      <div onClick={()=>handelGenrateBase64()} > generate</div>
      <div   className='text-3xl font-bold'  onClick={()=>setFile(null)} > x</div>
    </div>
}

  <div className='realtive flex gap-4' >
    {
      result && result?.map((res, index) => {
        return <div key={index} >
          <img src={res} alt="result"  width={512} />
        </div>
      }
      )
    }

  </div>

        </div>
    </>
  )
}

export default Generations