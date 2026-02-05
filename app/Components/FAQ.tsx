"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

const faqs = [
  {
    question: "Do you offer in-person or virtual therapy?",
    answer: (<>I offer <strong className="text-[1.25rem] text-primary">in-person therapy from my Santa Monica office</strong> as well as <strong className="text-[1.25rem] text-primary">secure telehealth sessions for clients located throughout California</strong>. Together, we can choose the format that best supports your comfort, privacy, and schedule.</>)
  },
  {
    question: "What concerns do you typically help clients with?",
    answer: (<>I primarily work with <strong className="text-[1.25rem] text-primary">adults experiencing anxiety</strong>, <strong className="text-[1.25rem] text-primary">trauma</strong>, <strong className="text-[1.25rem] text-primary">chronic stress</strong>, <strong className="text-[1.25rem] text-primary">panic</strong>, and <strong className="text-[1.25rem] text-primary">professional burnout</strong>. Many of my clients are high-achieving individuals who appear capable externally yet feel internally overwhelmed, emotionally exhausted, or caught in patterns that no longer serve them.</>)
  },
  {
    question: "What is your approach to therapy?",
    answer: (<>My approach is warm, collaborative and grounded in <strong className="text-[1.25rem] text-primary">evidence-based practices</strong> such as <strong className="text-[1.25rem] text-primary">cognitive-behavioral therapy (CBT)</strong>, <strong className="text-[1.25rem] text-primary">EMDR</strong>, mindfulness and body-oriented techniques. Sessions provide structure and support while allowing space for reflection, insight, and meaningful emotional work.</>)
  },{
    question:"What can I expect from therapy?",
    answer:(<>Therapy is a confidential space to slow down, gain clarity and reconnect with yourself. My goal is not only symptom relief but helping you build resilience, deepen self-understanding, and develop a stronger, more compassionate relationship with yourself over time.</>)
  },
  {
    question:"How do I get started?",
    answer:(<>Getting started is simple. You’re welcome to reach out to schedule a <strong className="text-[1.25rem] text-primary">15-min free consultation</strong> where we can discuss your needs, answer any questions, and determine whether we’re a good fit. From there, we can begin building a thoughtful path forward at a pace that feels comfortable for you.</>)
  },{
    question:"Is therapy confidential?",
    answer:(<><strong className="text-[1.25rem] text-primary">Yes.</strong> Confidentiality is a foundational part of therapy. Your privacy is respected and protected in accordance with professional and legal standards.</>)
  }
];

export default function FAQ(){
  const {ref,show}=useReveal(80);
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  return (
    <section className="bg-muted" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-1">
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
                  Frequently Asked Questions
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
                            <span className="text-[1.25rem] sm:heading-md text-primary/90 ml-2">{faq.question}</span>
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