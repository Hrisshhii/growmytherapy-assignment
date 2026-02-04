/* eslint-disable @next/next/no-img-element */
"use client";

import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

export default function Office(){
  const {ref,show}=useReveal(80);
  return(
    <section className="bg-secondary text-primary py-32" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Animated show={show} delay={120}>
            <div className="max-w-xl">
              <h2 className="heading-lg mb-8">
                A Calm Space for Healing
              </h2>
              <p className="body-md mb-6">
                My <strong className="text-[1.4rem]">Santa Monica</strong> office is a quiet, private space intentionally designed to feel calm, grounding, and free from distraction. With natural light and a comfortable, uncluttered atmosphere, many clients share that they begin to feel more at ease the moment they arrive.
              </p>
              <p className="body-md">
                I offer both in-person therapy and secure telehealth sessions for clients across <strong className="text-[1.4rem]">California</strong>, allowing you to choose the format that best supports your comfort and needs.
              </p>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}