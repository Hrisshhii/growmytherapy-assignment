"use client";

import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const data = [
  {
    question: "Education",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  },
  {
    question: "Licensure",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  },
  {
    question: "Certifications",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  }
];

export default function Background(){
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-[#e9e4dc]" ref={ref}>
        <div className="mx-auto text-center max-w-[1000px] px-[3.75vw] py-[140px]">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-[#223614] mb-10">
            My Professional Background
          </h2>
          </Animated>  
          <div className="space-y-4 text-left">
            <div className="border-t border-[#223614]/40">
              {data.map((ques,i)=>{
                const isOpen=openIndex===i;
                return(
                  <Animated key={i} show={show} delay={0.1+i*0.25}>
                    <div>
                      <div className="border-b border-[#223614]/40 my-0">
                        <button 
                          onClick={()=>setOpenIndex(isOpen?null:i)}
                          className="w-full flex items-center justify-between text-left cursor-pointer"
                        >
                          <span className="p-4 font-normal text-[#223614] leading-[1.15] text-[clamp(1rem,1.5vw,2.5rem)] ml-2">{ques.question}</span>
                          <span className="relative w-6 h-6 mr-2 flex items-center justify-center">
                              <span className="absolute w-6 h-[1.5px] bg-[#223614]" />
                              <span
                                className={`absolute h-6 w-[1.5px] bg-[#223614]
                                  transition-transform duration-300 ease-in-out
                                  origin-center
                                  ${isOpen ? "rotate-90" : "rotate-180"}
                                `}
                              />
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500
                                ${isOpen?"max-h-[200px] opacity-100":"max-h-0 opacity-0"}
                              `}
                          >
                            <div className="flex justify-center">
                              <p className="max-w-[650px] text-[1.3rem] leading-[1.7] text-[#223614] px-4 pb-6">
                                {ques.answer}
                              </p>
                            </div>
                          </div>
                      </div>
                    </div>
                  </Animated>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );

}