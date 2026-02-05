"use client";
/* eslint-disable @next/next/no-img-element */

import { useReveal } from "@/app/Components/hooks/useReveal";
import Animated from "@/app/Components/hooks/Animated";

export default function ContactPrimary() {
  const {ref,show}=useReveal(80);
  return (
    <section className="pt-40 sm:pb-32 pb-25 bg-accent-soft text-primary" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20">

          <div className="flex flex-col items-center">
            <Animated show={show} delay={120}>
              <h1 className="font-medium sm:text-left text-primary leading-[1.12] text-[clamp(2.2rem,8vw,3rem)] sm:text-[calc(3vw+1rem)]">
                A Calm Space Begins With One Conversation
              </h1>
            </Animated>

            <div className="mt-8 text-center sm:text-left sm:mt-25 text-primary text-[clamp(1rem,1.35vw,1.45rem)]">
              <p className="mb-2">{`Taking the first step toward therapy can feel vulnerable, but you don't have to do it alone.`}</p>
              <p>{`I invite you to reach out with any questions or to schedule a complimentary 15-minute consultation to see if we're a good fit.`}</p>
            </div>
            
            <div className="relative mt-14 lg:mt-20 mx-auto lg:mx-0">
              <Animated show={show} delay={220}>
                <div className="w-42.5 h-69 sm:w-72 sm:h-110 overflow-hidden rounded-t-full">
                  <img
                    src="/office-2.jpeg"
                    alt="Comfortable and welcoming therapy office"
                    className="w-full h-full object-cover brightness-85 contrast-75 saturate-85 blur-[0.3px]"
                  />
              </div>
              </Animated>
              <Animated show={show} delay={320}>
                <div className="absolute -bottom-10 -right-5 w-25 h-25 sm:-bottom-10 sm:-right-12 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                  <img
                    src="/contact.jpg"
                    alt="Hands holding a warm cup of tea, symbolizing comfort and safety"
                    className="w-full h-full object-cover brightness-95 contrast-90 saturate-75"
                  />
                </div>
              </Animated>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:items-center">
            <div className="bg-primary text-accent-soft p-6 sm:p-8 lg:p-10 max-w-full lg:max-w-200 rounded-2xl">
              <Animated show={show} delay={220}>
                <form action="" className="flex flex-col gap-4 sm:min-w-125 justify-center">
                  <p className="mb-3 text-center text-[1.2rem]">
                    Complimentary 15-minute consultation
                  </p>
                  <input type="text" placeholder="Your Name" className="p-4 rounded-md bg-secondary text-primary outline-none" />
                  <input type="email" placeholder="Your Email" className="p-4 rounded-md bg-secondary text-primary outline-none" />
                  <textarea rows={4} placeholder="How can I support you?" className="p-4 rounded-md bg-secondary text-primary outline-none resize-none" />
                    <button type="submit" className="btn-light mt-6 ">Request a Consultation</button>
                    <p className="text-sm opacity-80 mt-1 text-center">Your information is private and handled with care.</p>
                </form>
              </Animated>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}