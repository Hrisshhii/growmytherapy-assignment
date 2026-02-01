"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";

export default function Primary(){
  const {ref,show}=useReveal(80);
  return (
    <section className="w-full bg-secondary overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-400 section-x pt-24 sm:pt-30 lg:pt-35 pb-48 sm:pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 sm:gap-16 lg:gap-[8vw] items-start lg:items-center">

        <Animated show={show} delay={0}>
          <div className="relative mx-auto w-[70%] sm:w-[58%] lg:w-full aspect-[2.8/4] overflow-hidden rounded-t-[999px] lg:translate-x-[-5vw]">
            <img src="/hero-1.jpg" alt="" className="w-full h-full object-cover object-contain"/>
          </div>
        </Animated>

        <div className="text-center sm:mt-0"  style={{ animationDelay: "120ms" }}>
          <Animated show={show} delay={120}>
            <h1 className="font-medium text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(4.2vw+1rem)]">
              Live your life<br />in full bloom
            </h1>
          </Animated>
          <Animated show={show} delay={220}>
            <p className="mt-5 text-primary text-[clamp(1rem,1.05vw,1.15rem)]">
              Therapy for Adults in Minneapolis, MN.
            </p>
          </Animated>
          <Animated show={show} delay={320}>
            <div className="mt-8">
              <button className="btn-primary">
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