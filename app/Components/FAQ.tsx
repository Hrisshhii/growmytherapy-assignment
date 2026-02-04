"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const faqs = [
  {
    question: "Do you offer in-person or virtual therapy?",
    answer: "I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located throughout California. Together, we can choose the format that feels most comfortable and supportive for you."
  },
  {
    question: "What concerns do you typically help clients with?",
    answer: "I primarily work with adults experiencing anxiety, trauma, chronic stress, panic, and professional burnout. Many of the people I support are high-achieving individuals who appear capable on the outside but feel internally overwhelmed, emotionally exhausted, or stuck in patterns that no longer serve them."
  },
  {
    question: "What is your approach to therapy?",
    answer: "My approach is warm, collaborative and grounded in evidence-based practices such as cognitive-behavioral therapy (CBT), EMDR, mindfulness and body-oriented techniques. Sessions provide structure and support while allowing space for reflection, insight, and deeper emotional work."
  },{
    question:"What can I expect from our work together?",
    answer:"Therapy is a space to slow down, gain clarity and reconnect with yourself. My goal is not only symptom relief but helping you build resilience, deepen self-understanding, and develop a stronger relationship with yourself over time."
  },
  {
    question:"How do I get started?",
    answer:"Getting started is simple. You can reach out to schedule a consultation where we’ll discuss your needs, answer any questions, and determine whether we’re a good fit. From there, we can begin building a path forward together."
  }
];

export default function FAQ(){
  const {ref,show}=useReveal(80);
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  return (
    <section className="bg-muted" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 pt-30 pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-0">
          <div className="relative flex justify-center mb-8 sm:mb-0">
            <Animated show={show} delay={120}>
              <div className="mx-auto w-[45%] sm:w-full aspect-[2.8/5] sm:h-120 lg:h-205 overflow-hidden rounded-t-full">
                <img src="/faq.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </Animated>
          </div>
          <div>
            <div className="w-full min-w-0 lg:min-w-none">
              <Animated show={show} delay={120}>
                <h2 className="heading-xl text-primary mb-8 sm:mb-20">
                  Questions You May Have
                </h2>
              </Animated>

              <div className="border-t border-primary/40">
                {faqs.map((faq,i)=>{
                  const isOpen=openIndex===i;
                  return(
                    <Animated key={i} show={show} delay={0.1+i*0.25}>
                      <div>
                        <div key={i} className="border-b border-primary/40 my-0">
                          <button 
                            onClick={()=>setOpenIndex(isOpen?null:i)}
                            className="w-full flex items-center py-3 sm:py-4 text-left cursor-pointer"
                          >
                            <span className="relative w-5 h-5 sm:w-6 sm:h-6 mr-3 flex items-center justify-center">
                              <span className="absolute w-6 h-[1.5px] bg-primary" />

                              <span
                                className={`absolute h-6 w-[1.5px] bg-primary
                                  transition-transform duration-300 ease-in-out
                                  origin-center
                                  ${isOpen ? "rotate-90" : "rotate-180"}
                                `}
                              />
                            </span>
                            <span className="text-[1.25rem] sm:heading-md text-primary ml-2">{faq.question}</span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500
                                ${isOpen?"max-h-full opacity-100":"max-h-0 opacity-0"}
                              `}
                          >
                            <p className="pb-5 pr-0 sm:pr-[10%] text-[1.1rem] sm:text-[1.3rem] leading-[1.55] sm:leading-[1.7] text-primary">{faq.answer}</p>
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