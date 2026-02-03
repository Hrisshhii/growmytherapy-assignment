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
            <a href="/legal/privacy-policy" className="hover:underline text-black text-[calc(0.2vw+0.8rem)]">Privacy & Cookies Policy</a>
            <a href="/legal/good-faith-estimate" className="hover:underline text-black text-[calc(0.2vw+0.8rem)]">Good Faith Estimate</a>
            <a href="/legal/terms-conditions" className="hover:underline text-black text-[calc(0.2vw+0.8rem)]">Website Terms & Conditions</a>
            <a href="/legal/disclaimer" className="hover:underline text-black text-[calc(0.2vw+0.8rem)]">Disclaimer</a>
          </div>
        
          <p className="mb-4 text-[calc(0.2vw+0.8rem)]">
            Website Template Credits:{" "}
            <a href="https://www.gobloomcreative.com/" target="_blank" className="underline text-black">Go Bloom Creative</a>
          </p>
        </Animated>
        <p className={`mt-20 sm:mt-30 text-[calc(0.2vw+0.8rem)] transition-opacity duration-700 ease-in-out
            ${show? "opacity-100":"opacity-0"}
          `}>
          All Rights Reserved © © 2026 Dr. Maya Reynolds, PsyD.
        </p>

      </div>
    </div>
  );
}