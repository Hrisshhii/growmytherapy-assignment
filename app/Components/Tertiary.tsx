"use client";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

export default function Tertiary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-accent-soft mt-[2.5vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:min-h-screen">

        <Animated show={show} delay={180}>
            <div className="relative h-[60vh] lg:min-h-full overflow-hidden">
              <Image
                src="/hero-3.jpg"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </Animated>
        
        <div className="grid grid-rows-[1fr_auto]">

          <div className="flex items-center justify-center">
            <div className="max-w-200">
              <Animated show={show} delay={0}>
                <h1 className="mb-2 heading-lg text-primary tracking-tight">
                  You don&apos;t have to do this all{" "}
                  <span className="italic">alone</span>.
                </h1>
              </Animated>

              <p className="mt-6 body-lg text-primary">
                {`If you are facing any of these, there's hope:`}
              </p>
              <ul className="mt-10 mb-10 pl-6 space-y-2 text-[1.35rem] leading-[1.75] text-primary">
                {[
                  "Persistent feelings of sadness or hopelessness",
                  "Trouble focusing or making decisions",
                  "Difficulty maintaining relationships",
                  "Feeling constantly exhausted or unmotivated",
                  "A pervasive sense of being overwhelmed"
                ].map((item,i)=>(
                  <li key={i} className="flex gap-3 items-start transition-all duration-500 ease-out"
                    style={{
                      opacity: show? 1:0,
                      transform: show?"translateY(10px)":"translateY(12px)",
                      transitionDelay: `${i*100}ms`
                    }}
                  >
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-primary/90" />
                    <span className="block">{item}</span>
                  </li>
                ))}
              </ul>

              <Animated show={show} delay={220}>
                <p className="mt-4 body-lg text-primary">
                  {`With empathy and guidance, we'll work together to navigate the challenges life throws your way.`}
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/50">
              <button className="w-full py-8 text-sm font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                WORK WITH ME
              </button>
            </div>
          </Animated>
        </div>

      </div>
    </section>
  );
}
