"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

const items=[
  <>Constant <strong className="text-[1.25rem] text-primary">overthinking</strong> that makes it difficult to fully relax</>,
  <>Holding yourself to <strong className="text-[1.25rem] text-primary">exceptionally high standards</strong> while quietly feeling exhausted</>,
  <>Struggling to slow down without <strong className="text-[1.25rem] text-primary">guilt</strong></>,
  <>Appearing capable on the outside while internally feeling <strong className="text-[1.25rem] text-primary">stretched thin</strong></>,
  <>Noticing how past experiences continue to shape your reactions, relationships, or <strong className="text-[1.25rem] text-primary">sense of safety</strong></>
];


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
              <div className="absolute inset-0 bg-black/8"></div>
            </div>
          </Animated>
        
        <div className="grid grid-rows-[1fr_auto]">

          <div className="flex pt-10 sm:items-center justify-center px-2">
            <div className="max-w-200 px-6 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="mb-2 heading-lg text-primary/95 tracking-tight">
                  {`When you're used to holding it all together.`}
                </h1>
              </Animated>

              <p className="mt-4 body-lg text-primary">
                {`You may recognize parts of yourself in some of these experiences:`}
              </p>
              <ul className="mt-5 mb-6 pl-4 space-y-2 body-md leading-[1.45] text-primary/90">
                {items.map((item,i)=>(
                  <li key={i} className="flex gap-1 sm:gap-3 items-start transition-all duration-500 ease-out"
                    style={{
                      opacity: show? 1:0,
                      transform: show?"translateY(10px)":"translateY(12px)",
                      transitionDelay: `${i*100}ms`
                    }}
                  >
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-primary/90" />
                    <span className="block"> {item}</span>
                  </li>
                ))}
              </ul>

              <Animated show={show} delay={220}>
                <p className="mt-3 sm:mt-4 body-lg text-primary/95">
                  {`If you're used to holding everything together while feeling overwhelmed inside, therapy can offer a confidential space to slow down, feel supported and develop a steadier, more self-trusting way of moving through life.`}
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/50 mt-10 sm:mt-0">
              <CTAButton className="w-full py-8 text-sm font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                Begin Therapy
              </CTAButton>
            </div>
          </Animated>
        </div>

      </div>
    </section>
  );
}