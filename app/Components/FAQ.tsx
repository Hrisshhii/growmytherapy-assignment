"use client";
import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "Yes, I accept select insurance plans. Please contact me to confirm whether your provider is accepted."
  },
  {
    question: "What are your rates?",
    answer: "Session rates vary depending on the type and length of therapy. Reach out for current pricing details."
  },
  {
    question: "Do you have any openings?",
    answer: "Availability changes regularly. Please get in touch to learn about current openings."
  }
];

export default function FAQ(){
  const {ref,show}=useReveal(80);
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  return (
    <section className="bg-[#fbf7f2]" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 pt-35 pb-40">
        <div className="grid grid-col-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-0">
          <div className="relative flex justify-center">
            <Animated show={show} delay={120}>
              <div className="w-132.5 h-195 overflow-hidden rounded-t-full">
                <img src="/faq.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </Animated>
          </div>
          <div>
            <div className="min-w-3xl">
              <Animated show={show} delay={120}>
                <h2 className="font-medium text-[#223614] leading-[1.15] text-[clamp(2.75rem,3.5vw,4rem)] mb-20">
                  FAQs
                </h2>
              </Animated>
              
              <div className="border-t border-[#223614]/40">
                {faqs.map((faq,i)=>{
                  const isOpen=openIndex===i;
                  return(
                    <Animated key={i} show={show} delay={0.1+i*0.25}>
                      <div>
                        <div key={i} className="border-b border-[#223614]/40 my-0">
                        <button 
                          onClick={()=>setOpenIndex(isOpen?null:i)}
                          className="w-full flex items-center py-4 text-left cursor-pointer"
                        >
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
                          <span className="font-medium text-[#223614] leading-[1.15] text-[clamp(1.75rem,2.5vw,3rem)] ml-2">{faq.question}</span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-500
                              ${isOpen?"max-h-[200px] opacity-100":"max-h-0 opacity-0"}
                            `}
                        >
                          <p className="pb-6 pr-[10%] text-[1.3rem] leading-[1.7] text-[#223614]">{faq.answer}</p>
                        </div>
                    </div>
                      </div>
                    </Animated>
                  
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}