"use client";

import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";

export default function GetStarted(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-accent bg-[url('/ocean.jpg')] bg-cover bg-no-repeat" ref={ref}>
      <div className="min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center px-4 sm:px-[3vw] bg-black/55">
        <div className="text-center max-w-[92%] sm:max-w-237.5">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-secondary mb-10">
              Take the First Step Toward Feeling More Steady.
            </h2>
          </Animated>
          <p className="mt-5 text-[1.15rem] leading-[1.55] sm:mt-6 sm:body-lg text-secondary " style={{opacity:show?"1":" 0",transition:"opacity 600ms ease"}}>
            You may be used to managing things on your own, even when it feels overwhelming inside.<br/>{`Therapy creates space to pause, reflect, and move forward with greater clarity and stability. When you're ready for that support, I invite you to connect.`}
          </p>
          <Animated show={show} delay={120}>
            <div className="mt-30 mb-10">
              <CTAButton className="btn-light text-[1.05rem]">Connect With Me</CTAButton>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}