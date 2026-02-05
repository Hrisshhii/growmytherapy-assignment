"use client";

import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const data = [
  {
    question: "Education",
    answer: (<>Dr. Maya Reynolds holds a <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">Doctorate in Clinical Psychology (PsyD)</strong>, with advanced training focused on <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">evidence-based therapeutic care</strong> for adults experiencing anxiety, trauma, and chronic stress.</>)
  },
  {
    question: "Licensure & Professional Standing",
    answer: (<>Dr. Reynolds is a <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">Licensed Clinical Psychologist</strong> practicing in <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">Santa Monica, California</strong> - and provides therapy both in-person and via secure telehealth for clients across the state.</>)
  },
  {
    question: "Clinical Approach & Methods",
    answer: (<>Her work integrates evidence-based approaches including <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">Cognitive Behavioral Therapy (CBT)</strong>, <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">EMDR</strong>, <strong className="text-[1.2rem] sm:text-[1.3rem] text-primary">mindfulness-based practices</strong>, and body-oriented techniques to support meaningful, lasting change.</>)
  }
];

export default function Background(){
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-accent-soft" ref={ref}>
        <div className="mx-auto text-center max-w-250 section-x py-35">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-primary my-10">
              Credentials & Professional Training
            </h2>
          </Animated>  
          <div className="space-y-4 text-left">
            <div className="border-t border-primary/40">
              {data.map((ques,i)=>{
                const isOpen=openIndex===i;
                return(
                  <Animated key={i} show={show} delay={0.1+i*0.25}>
                    <div>
                      <div className="border-b border-primary/40 my-0">
                        <button 
                          onClick={()=>setOpenIndex(isOpen?null:i)}
                          className="w-full flex items-center justify-between text-left cursor-pointer"
                        >
                          <span className="p-4 font-normal text-primary leading-[1.15] text-[clamp(1rem,1.5vw,2.5rem)] ml-2">{ques.question}</span>
                          <span className="relative w-6 h-6 mr-2 flex items-center justify-center">
                              <span className="absolute w-6 h-[1.5px] bg-primary" />
                              <span
                                className={`absolute h-6 w-[1.5px] bg-primary
                                  transition-transform duration-300 ease-in-out
                                  origin-center
                                  ${isOpen ? "rotate-90" : "rotate-180"}
                                `}
                              />
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500
                                ${isOpen?"max-h-50 opacity-100":"max-h-0 opacity-0"}
                              `}
                          >
                            <div className="flex justify-center">
                              <p className="max-w-162.5 text-[1rem] sm:text-[1.3rem] leading-[1.7] text-primary/90 px-4 pb-6">
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