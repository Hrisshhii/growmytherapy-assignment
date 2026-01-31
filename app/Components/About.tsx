"use client";
/* eslint-disable @next/next/no-img-element */
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

export default function About(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-[#e9e4dc]" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 pt-35 pb-40">
        <div className="grid grid-col-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-0">
          <div>
            <div className="min-w-3xl">
              <Animated show={show} delay={120}>
                <h2 className="font-medium text-[#223614] leading-[1.15] text-[clamp(2.75rem,3.5vw,4rem)]">
                  Hi, I&apos;m Lilac.
                </h2>
              </Animated>
              
              <p className="mt-6 text-[1.25rem] leading-[1.7] text-[#223614] transition-all duration-500 ease-out">
                I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
              </p>
            </div>

            <Animated show={show} delay={220}>
              <div className="mt-35 flex justify-center">
                <button className="border border-[#223614] px-6 py-3 text-sm tracking-wide transition-colors duration-300 hover:bg-[#223614] hover:text-white cursor-pointer">
                  LET&apos;S CHAT →
                </button>
              </div>
            </Animated>
          </div>

          <div className="relative flex justify-center">
            <Animated show={show} delay={120}>
              <div className="w-132.5 h-195 overflow-hidden rounded-t-full">
                <img src="/about-main.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </Animated>
            <Animated show={show} delay={220}>
              <div className="absolute -bottom-15 -right-10 w-95 h-95 rounded-full overflow-hidden">
                <img src="/about-circle.jpg" alt="" className="w-full h-full object-cover"/>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}