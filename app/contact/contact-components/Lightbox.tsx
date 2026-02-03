"use client";
/* eslint-disable @next/next/no-img-element */
type Props={
  images: string[];
  index: number;
  onClose:()=>void;
  onPrev:()=>void;
  onNext:()=>void;
};

export default function Lightbox({images,index,onClose,onPrev,onNext}:Props){
  const isFirst = index === 0;
  const isLast = index === images.length - 1;
  return(
    <div className="fixed inset-0 z-100 bg-accent-soft/95 flex items-center justify-center">
      <button onClick={onClose} className="absolute text-primary top-6 right-6 text-2xl opacity-60 transition-opacity duration-300 hover:opacity-100 cursor-pointer">✕</button>
      <button onClick={onPrev} className={`absolute left-6 text-3xl transition-opacity duration-300 cursor-pointer
        ${isFirst ? "opacity-0 pointer-events-none" : "opacity-50 hover:opacity-100"}`}>{`<`}</button>
      <button onClick={onNext} className={`absolute right-6 text-3xl transition-opacity duration-300 cursor-pointer
        ${isLast ? "opacity-0 pointer-events-none" : "opacity-50 hover:opacity-100"}`}>{`>`}</button>
      <img src={images[index]} alt="" className="max-h-[95vh] object-contain" />
    </div>

  );
}