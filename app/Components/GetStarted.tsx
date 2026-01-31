"use client";

import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

export default function GetStarted(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-[#7b7a43]" ref={ref}>
      <div className="min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center px-[3vw]">
        <div className="text-center max-w-237.5">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-[#fbf7f2] mb-10">
              Get started today.
            </h2>
          </Animated>
          <p className="mt-6 text-[1.35rem] leading-[1.7] text-[#fbf7f2] " style={{opacity:show?"1":" 0",transition:"opacity 600ms ease"}}>
            Ready to take the first step towards a happier, healthier you? <br />
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
          <Animated show={show} delay={120}>
            <div className="mt-30">
              <button className="border border-[#fbf7f2] px-7 py-3 text-sm tracking-wide text-[#fbf7f2] transition-all duration-500 hover:bg-[#fbf7f2] hover:text-[#7b7a43] cursor-pointer">GET IN TOUCH →</button>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}