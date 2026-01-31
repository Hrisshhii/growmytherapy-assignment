"use client";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

export default function Secondary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-[#e9e5df] -mt-[13vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:h-[85vh]">
        
        <div className="grid grid-rows-[1fr_auto]">

          <div className="flex items-center justify-center pt-[4vh]">
            <div className="max-w-200">
              <Animated show={show} delay={0}>
                <h1 className="font-medium text-[#223614] leading-[1.15] text-[clamp(3rem,4vw,4.25rem)]">
                  Live a fulfilling life
                </h1>
              </Animated>

              <Animated show={show} delay={120}>
                <p className="mt-6 text-[1.25rem] leading-[1.7] text-[#223614]">
                  {`Life can be challenging—especially when you're trying to balance your personal and professional life.`}
                </p>
              </Animated>

              <Animated show={show} delay={220}>
                <p className="mt-4 text-[1.25rem] leading-[1.7] text-[#223614]">
                  {`It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.`}
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-[#223614]/40">
              <button className="w-full py-6 text-sm font-medium tracking-wide text-[#223614] transition-colors duration-300 hover:bg-[#223614] hover:text-white cursor-pointer">
                GET IN TOUCH →
              </button>
            </div>
          </Animated>
        </div>

        <Animated show={show} delay={180}>
          <div className="relative h-[60vh] lg:h-full overflow-hidden">
            <Image
              src="/hero-2.jpg"
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
