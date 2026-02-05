/* eslint-disable @next/next/no-img-element */
"use client";


import Animated from "./hooks/Animated";
import FloatingImg from "./hooks/FloatingImg";
import { useReveal } from "./hooks/useReveal";


export default function Office(){
  const {ref,show}=useReveal(80);
  return(
    <section className="bg-secondary text-primary py-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid md:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-16 xl:gap-24">
          <Animated show={show} delay={120}>
            <div className="text-center md:text-left">
              <h2 className="heading-lg mb-8">
                A Calm Space for Healing
              </h2>
              <p className="body-md mb-6">
                My <strong className="text-[1.32rem]">Santa Monica</strong> office is a quiet, <strong className="text-[1.32rem]">private therapy space</strong> intentionally designed to feel calm, grounding, and free from distraction. With abundant natural light and a comfortable, uncluttered atmosphere, many clients notice a sense of ease almost immediately upon arrival.
              </p>
              <p className="body-md">
                Located in a discreet professional setting to support your privacy, I offer both in-person therapy and <strong className="text-[1.32rem]">secure telehealth</strong> sessions for clients throughout <strong className="text-[1.32rem]">California</strong>, allowing you to choose the format that best supports your comfort, privacy, and schedule.
              </p>
            </div>
          </Animated>
          <Animated show={show} delay={200}>
            <FloatingImg />
          </Animated>
        </div>
      </div>
    </section>
  );
}