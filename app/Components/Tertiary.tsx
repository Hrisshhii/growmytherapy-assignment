"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
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
            <div className="relative h-[34vh] sm:h-[50vh] lg:min-h-full overflow-hidden">
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

          <div className="flex pt-8 sm:pt-0 sm:items-center justify-center">
            <div className="max-w-200 px-6 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="mb-2 heading-lg text-primary tracking-tight">
                  {`When you're used to holding it all together.`}
                </h1>
              </Animated>

              <p className="mt-4 body-lg text-primary">
                {`You may recognize parts of yourself in some of these experiences:`}
              </p>
              <ul className="mt-6 mb-6 pl-6 space-y-2 text-[1.35rem] leading-[1.75] text-primary">
                {[
                  "Constant overthinking that makes it difficult to fully relax",
                  "Holding yourself to high standards while quietly feeling exhausted",
                  "Struggling to slow down without guilt",
                  "Feeling outwardly capable but internally stretched thin",
                  "Carrying the weight of past experiences into your present life"
                ].map((item,i)=>(
                  <li key={i} className="flex gap-0.2 sm:gap-3 items-start transition-all duration-500 ease-out"
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
                <p className="mt-3 sm:mt-4 body-lg text-primary">
                  {`If you're used to holding everything together while feeling overwhelmed inside, therapy can offer a space to slow down, feel supported and begin moving through life with greater steadiness and self-trust.`}
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/50 mt-10 sm:mt-0">
              <CTAButton className="w-full py-8 text-sm font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                WORK WITH ME
              </CTAButton>
            </div>
          </Animated>
        </div>

      </div>
    </section>
  );
}