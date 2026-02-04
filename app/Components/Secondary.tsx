"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

export default function Secondary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-muted sm:-mt-[12vh] md:-mt-[8vh] lg:-mt-[13vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] lg:min-h-[85vh]">
        
        <div className="grid grid-rows-[1fr_auto] order-last lg:order-0">

          <div className="flex justify-center sm:items-center pt-12 sm:pt-[4vh] px-10">
            <div className="max-w-210 px-6 py-6 sm:py-8 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="heading-lg text-primary ">
                  When life looks manageable on the outside but feels overwhelming within
                </h1>
              </Animated>
                <Animated show={show} delay={120}>
                  <p className="mt-6 body-md text-primary">
                    {`You may appear capable and composed to others while privately carrying anxiety, emotional fatigue, or the weight of past experiences. Many of the adults I work with are high-achieving yet feel stuck in cycles of overthinking, burnout, or constant internal pressure.`}
                  </p>
                </Animated>

                <Animated show={show} delay={220}>
                  <p className="mt-4 body-md text-primary">
                    {`Therapy offers a space to slow down, gain clarity, and build a more steady, sustainable way of living.`}
                  </p>
                </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/40 mt-35 sm:mt-0">
              <CTAButton className="w-full py-6 text-[1rem] font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                Schedule a Consultation →
              </CTAButton>
            </div>
          </Animated>
        </div>

        <Animated show={show} delay={180}>
          <div className="relative order-first lg:order-0 h-[32vh] sm:h-[45vh] lg:min-h-full overflow-hidden">
            <Image
              src="/image2.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </Animated>
      </div>
    </section>
  );
}