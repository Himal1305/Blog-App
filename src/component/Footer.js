import React from 'react'
import { useContext } from "react";
import {Appcontaxt} from "../contaxt/Appcontaxt"


export default function Footer() {
  const{totalpage,page,nextpagehandelar,reviouspagehandelar}=useContext(Appcontaxt);

  return (
    <div className='flex  gap-6 w-full  px-40 mx-auto justify-around z-50 bg-white fixed bottom-0 h-9 border-t-2 border-gray-500-500'>
        <div className='flex gap-3 justify-center items-center relative' >
        {
          (page==1) || <button className='absolute right-2 border px-2 py-[1px] rounded-sm border-gray-300 hover:bg-slate-100' onClick={reviouspagehandelar}>Prev.</button>
        }
        {
          (page==totalpage) || <button className='absolute  left-2 border px-2 py-[1px] rounded-sm border-gray-300 hover:bg-slate-100' onClick={nextpagehandelar}>Next</button>
        }
        
        </div>
        <div className='flex gap-4 justify-center items-center border px-3 my-[2px] rounded-sm border-gray-300'>
        <p>Page {page} of {totalpage}</p>
        </div>
        
    </div>
  )
}
