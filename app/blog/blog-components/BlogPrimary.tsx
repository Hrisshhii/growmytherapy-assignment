"use client";

import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";

/* eslint-disable @next/next/no-img-element */


export default function BlogPrimary(){
  const{ref,show}=useReveal(80);
  return(
    <section className="bg-secondary text-primary pt-40 pb-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <Animated show={show} delay={120}>
            <div className="flex justify-center lg:justify-start lg:ml-30">
              <div className="relative w-[38%] max-w-92.5 sm:w-full sm:max-w-137.5 sm:h-130 md:h-185 lg:h-205 overflow-hidden rounded-t-full">
                <img
                  src="/blog-1.jpg"
                  alt="Reading and reflection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Animated>

          <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:-ml-15">
            <Animated show={show} delay={120}>
              <h1 className="font-medium text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(4.2vw+1rem)] mb-10">
                The Lilac Blog
              </h1>
            </Animated>
            <Animated show={show} delay={220}>
              <p className="font-normal text-[1.5rem] md:text-[1.75rem] leading-[1.7] max-w-[30ch] mb-4">
                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
              </p>

              <p className="font-bold text-[1.2rem]">
                Glad you&apos;re here.
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

