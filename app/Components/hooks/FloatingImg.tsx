"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const images=["/office-1.jpeg","/office-2.jpeg"];

export default function FloatingImg(){
  const [index,setIndex]=useState<number>(0);
  const [open,setOpen]=useState<boolean>(false);
  const next=()=>{
    setIndex((i)=>(i+1)%images.length);
  };
  const prev=()=>{
    setIndex((i)=>(i-1+images.length)%images.length);
  };
  const backIndex=(index+1)%images.length;

  return(
    <div className="w-full flex flex-col items-center  py-16 sm:py-20">
      <div className="relative flex items-center justify-center w-full">
        <img src={images[backIndex]} alt="" className="absolute inset-0 m-auto w-[82%] sm:w-[70%] lg:w-[76%] scale-[0.94] blur-lg opacity-50 rounded-2xl shadow-xl"/> 
        <img src={images[index]} alt="" onClick={()=>setOpen(true)} className="relative w-[88%] sm:w-[74%] lg:w-[82%] rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.05] cursor-zoom-in" />
      </div>
      
      <div className={`flex gap-15 mt-10 mb-5`}>
        <button onClick={prev} className="h-11 w-11 rounded-full border border-primary/20 backdrop-blur-md hover:scale-110 transition">
          {`<`}
        </button>
        <button
          onClick={next}
          className="h-11 w-11 rounded-full border border-primary/20 backdrop-blur-md hover:scale-110 transition">
            {`>`}
        </button>
      </div>
      <p className={`text-sm text-primary/70`}>Designed to support reflection, comfort, and confidentiality.</p>
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center animate-fadeIn">
          <button onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-primary text-3xl hover:scale-110 transition"
          >
            ✕
          </button>
          <img src={images[index]} onClick={()=>setOpen(false)} alt="" className="w-[95%] h-[95%] object-contain cursor-zoom-out" />
        </div>
      )}
    </div>
  );
}