"use client";

import { useReveal } from "@/app/Components/hooks/useReveal";
import Animated from "@/app/Components/hooks/Animated";

export default function ContactSecondary(){
  const {ref,show}=useReveal(80);
  return(
    <section className="bg-muted text-primary" ref={ref}>
      <div className="min-h-screen flex flex-col items-center px-6">
        <Animated show={show} delay={120}>
          <h2 className="mt-32 text-center heading-lg">
            Schedule Your Consultation
          </h2>
        </Animated>
        <Animated show={show} delay={220}>
          <p className="m-6 max-w-220 font-normal text-[1.25rem] leading-normal text-center">
            {`Taking the first step toward therapy can feel vulnerable.`}<br/>
            {`You're invited to schedule a complimentary 15-minute consultation to see if we're a good fit.`}
          </p>
        </Animated>
        <Animated show={show} delay={320}>
          <div className="flex-1 flex items-center my-30">
            <div className="bg-accent-soft border border-primary/50 rounded-2xl w-full max-w-120 sm:max-w-150 px-6 py-8 sm:px-14 sm:py-12 text-center shadow-sm">
              <h3 className="font-bold mb-4 text-[1.3rem] sm:text-[1.4rem]">Available Consultation Times</h3>
              <p className="mb-8 max-w-100 text-[0.8rem] sm:text-[1rem] leading-[1.6]">
                Complimentary 15-minute consultations are available for new clients.
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                {["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16"].map((day,i)=>(
                  <button key={i} className="px-4 py-2 rounded-full border border-primary hover:border-white hover:text-primary transition cursor-pointer">{day}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["9:00 AM","10:30 AM","1:00 PM","3:30 PM"].map((time,i)=>(
                  <button key={i} className="py-3 rounded-lg border border-secondary hover:bg-primary hover:text-white transition cursor-pointer active:bg-primary">
                    {time}
                  </button>
                ))}
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer" >Book Consultation</button>
            </div>
          </div>
        </Animated>
        <div className="pb-24 text-center text-[1rem] text-black">
          <p className="mb-2">Sessions are available both in-person in Santa Monica and via secure telehealth across California.</p>
        </div>
      </div>
    </section>
  );
}