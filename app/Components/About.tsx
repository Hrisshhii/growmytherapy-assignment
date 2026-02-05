"use client";
/* eslint-disable @next/next/no-img-element */
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";

export default function About(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-muted" ref={ref}>
      <div className="mx-auto max-w-450 px-4 lg:px-12 pt-25 pb-30 sm:pt-35 sm:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mx-0">
          <div className="order-last lg:order-0">
            <div className="px-1 sm:px-0">
              <Animated show={show} delay={120}>
                <h2 className="heading-xl text-primary">
                  Meet Dr. Maya Reynolds, PsyD
                </h2>
                <p className="mt-5 text-[0.9rem] text-primary/75">Licensed Clinical Psychologist | PsyD</p>
              </Animated>
              
              <p className="mt-10 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                Dr. Maya Reynolds, PsyD, is a <strong className="text-[1.25rem] text-primary">licensed clinical psychologist</strong> based in <strong className="text-primary">Santa Monica</strong>, specializing in therapy for adults navigating anxiety, trauma and burnout. Her work integrates <strong className="text-[1.25rem] text-primary">evidence-based therapies</strong> with a warm, collaborative approach creating a space where clients feel both supported and meaningfully challenged in their growth.
              </p>
              <p className="mt-6 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                Whether you&apos;re feeling persistently overwhelmed, struggling with internal pressure, or processing past experiences, therapy can help you develop deeper insight, strengthen resilience, and move toward a more sustainable way of living.
              </p>
              <p className="mt-3 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                Dr. Reynolds is particularly experienced in working with <strong className="text-[1.25rem] text-primary">high-achieving professionals</strong> seeking greater emotional clarity and lasting change.
              </p>
              <p className="mt-3 body-md leading-[1.55] sm:leading-[1.7] text-primary/90 transition-all duration-500 ease-out">
                <strong className="text-[1.25rem] text-primary">In-person therapy</strong> in Santa Monica and <strong className="text-[1.25rem] text-primary">secure telehealth sessions across California.</strong>
              </p>
            </div>

            <Animated show={show} delay={220}>
              <div className="-mb-5 mt-12 sm:mt-35 flex justify-center">
                <CTAButton className="border border-primary px-6 py-3 text-[1.1rem] tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                  Schedule a Consultation
                </CTAButton>
              </div>
            </Animated>
          </div>

          <div className="flex justify-center w-full pb-10">
            <Animated show={show} delay={120}>
            <div className="mx-auto w-[52%] sm:w-[55%] lg:w-[64%] aspect-[3.5/5] overflow-hidden rounded-xl">
              <img src="/Dr. Maya Reynolds.png" alt="" className="w-full h-full object-cover object-center" />
            </div>
          </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}