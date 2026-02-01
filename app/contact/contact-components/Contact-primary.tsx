"use client";
/* eslint-disable @next/next/no-img-element */

import { useReveal } from "@/app/Components/hooks/useReveal";
import Animated from "@/app/Components/hooks/Animated";

export default function ContactPrimary() {
  const {ref,show}=useReveal(80);
  return (
    <section className="pt-40 sm:pb-32 pb-25 bg-accent-soft text-primary" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20">

          <div className="flex flex-col items-center">
            <Animated show={show} delay={120}>
              <h1 className="font-medium sm:text-left text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(4.2vw+1rem)]">
                Let&apos;s Connect
              </h1>
            </Animated>

            <div className="mt-8 text-center sm:text-left sm:mt-25 text-primary text-[clamp(1rem,1.35vw,1.45rem)]">
              <p className="mb-2">Starting therapy is courageous.</p>
              <p>Get in touch for questions, or to book a free 15-minute consultation.</p>
            </div>
            
            <div className="relative mt-14 lg:mt-20 mx-auto lg:mx-0">
              <Animated show={show} delay={220}>
                <div className="w-42.5 h-69 sm:w-72 sm:h-105 overflow-hidden rounded-t-full">
                  <img
                    src="/about-main.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
              </div>
              </Animated>
              <Animated show={show} delay={320}>
                <div className="absolute bottom-0 -right-20 w-30 h-30 sm:-right-27 sm:w-45 sm:h-45 rounded-full overflow-hidden">
                  <img
                    src="/about-circle.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Animated>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end lg:items-center">
            <div className="bg-primary text-accent-soft p-6 sm:p-8 lg:p-10 max-w-full lg:max-w-200">
              <Animated show={show} delay={220}>
                <p className="text-[1rem] sm:text-[1.35rem] leading-[1.7] sm:pb-15">
                  <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                </p>
              </Animated>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
