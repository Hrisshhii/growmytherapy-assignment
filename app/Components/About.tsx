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
            <div className="px-6 sm:px-0 min-w-0 sm:min-w-3xl">
              <Animated show={show} delay={120}>
                <h2 className="heading-xl text-primary">
                  Meet Dr. Maya Reynolds, PsyD
                </h2>
              </Animated>
              
              <p className="mt-10 body-md leading-[1.55] sm:leading-[1.7] text-primary transition-all duration-500 ease-out">
                Dr. Maya Reynolds is a licensed clinical psychologist based in <strong>Santa Monica</strong>, specializing in therapy for adults navigating anxiety, trauma and burnout. Her approach is warm, collaborative, and grounded in evidence-based methods, creating a space where clients feel supported while engaging in meaningful, depth-oriented work.
              </p>
              <p className="mt-6 body-md leading-[1.55] sm:leading-[1.7] text-primary transition-all duration-500 ease-out">
                {`Whether you're feeling persistently overwhelmed, struggling with internal pressure, or processing past experiences, therapy can help you develop greater insight, resilience, and a more sustainable way of living.`}
              </p>
              <p className="mt-3 body-md leading-[1.55] sm:leading-[1.7] text-primary transition-all duration-500 ease-out">
                In-person therapy in Santa Monica and secure telehealth sessions across California.
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

          <div className="relative flex justify-center order-first lg:order-0">
            <Animated show={show} delay={120}>
              <div className="mx-auto w-[75%] sm:w-132.5 h-[38vh] aspect-[2.8/5] sm:h-195 overflow-hidden rounded-t-full">
                <img src="/about-main.jpg" alt="" className="w-full h-full object-cover object-center" />
              </div>
            </Animated>
            <Animated show={show} delay={220}>
              <div className="absolute -bottom-8 -right-4 sm:-bottom-20 sm:-right-20 w-30 h-30 sm:w-95 sm:h-95 rounded-full overflow-hidden">
                <img src="/about-circle.jpg" alt="" className="w-full h-full object-cover"/>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}