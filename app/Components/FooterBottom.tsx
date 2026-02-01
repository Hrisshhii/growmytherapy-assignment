"use client";
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";

export default function FooterBottom() {
  const {ref,show}=useReveal(80);
  return (
    <div className="bg-muted" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="mx-auto max-w-450 section-x py-10 text-center text-[0.95rem] text-primary">
        <Animated show={show} delay={120}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 underline mb-6">
            <a href="/privacy-policy" className="underline text-black text-[calc(0.2vw+0.8rem)]">Privacy & Cookies Policy</a>
            <a href="/good-faith-estimate" className="underline text-black text-[calc(0.2vw+0.8rem)]">Good Faith Estimate</a>
            <a href="/terms-conditions" className="underline text-black text-[calc(0.2vw+0.8rem)]">Website Terms & Conditions</a>
            <a href="/disclaimer" className="underline text-black text-[calc(0.2vw+0.8rem)]">Disclaimer</a>
          </div>
        
          <p className="mb-4 text-[calc(0.2vw+0.8rem)]">
            Website Template Credits:{" "}
            <a href="https://www.gobloomcreative.com/" className="underline text-black">Go Bloom Creative</a>
          </p>
        </Animated>
        <p className={`mt-30 text-[calc(0.2vw+0.8rem)] transition-opacity duration-700 ease-in-out
            ${show? "opacity-100":"opacity-0"}
          `}>
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>
    </div>
  );
}
