"use client";
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";

export default function Primary(){
  const {ref,show}=useReveal(80);
  return (
    <section className="w-full bg-[#fbf7f2] overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-450 px-[3.75vw] lg:pl-[2vw] lg:pr-[3.75vw] pt-35 pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[8vw] items-center">

        <Animated show={show} delay={0}>
          <div className="relative w-full h-full overflow-hidden rounded-t-[999px] lg:translate-x-[-5vw]">
            <img src="/hero-1.jpg" alt="" className=" object-cover"/>
          </div>
        </Animated>

        <div className="text-center"  style={{ animationDelay: "120ms" }}>
          <Animated show={show} delay={120}>
            <h1 className="font-medium text-[#223614] leading-[1.12] text-[calc(4.2vw+1rem)]">
              Live your life<br />in full bloom
            </h1>
          </Animated>
          <Animated show={show} delay={220}>
            <p className="mt-5 text-[clamp(1rem,1.05vw,1.15rem)]">
              Therapy for Adults in Minneapolis, MN.
            </p>
          </Animated>
          <Animated show={show} delay={320}>
            <div className="mt-8">
              <button className="border border-[#223614] px-8 py-3 text-sm tracking-wide transition-colors duration-500 ease-in-out hover:bg-[#223614] hover:text-white hover:cursor-pointer">
                {`CONNECT WITH ME ->`}
              </button>
            </div>
          </Animated>
          
        </div>

        </div>
      </div>
    </section>
  );
}