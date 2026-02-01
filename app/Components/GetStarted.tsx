"use client";

import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

export default function GetStarted(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-accent" ref={ref}>
      <div className="min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center px-[3vw]">
        <div className="text-center max-w-237.5">
          <Animated show={show} delay={0}>
            <h2 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-secondary mb-10">
              Get started today.
            </h2>
          </Animated>
          <p className="mt-6 body-lg text-secondary " style={{opacity:show?"1":" 0",transition:"opacity 600ms ease"}}>
            Ready to take the first step towards a happier, healthier you? <br />
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
          <Animated show={show} delay={120}>
            <div className="mt-30">
              <button className="btn-light">GET IN TOUCH →</button>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}