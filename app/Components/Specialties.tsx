"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
const specialties = [
  {
    title: "Self-Esteem",
    text:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/specialty-1.jpg",
  },
  {
    title: "Relationships",
    text:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/specialty-2.jpg",
  },
  {
    title: "Burnout",
    text:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/specialty-3.jpg",
  },
];

export default function Specialties(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-secondary" ref={ref}>
      <div className="mx-auto max-w-450 section-x pt-35 pb-40">

        <h2 className={`heading-xl text-primary text-center mb-20
        transition-opacity duration-500 ease-out
          ${show? "opacity-100":"opacity-0"}`}>
          My Specialties
        </h2>

        <div className=" grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full h-full flex-col border border-primary bg-muted p-5 transition-transform duration-300 hover:-translate-y-1.5">
              <Animated show={show} delay={120}>
                <h3 className="px-1 py-3 mt-0 body-md font-medium text-primary">{item.title}</h3>
              </Animated>
              <p className="mt-2.5 text-[13.7px] leading-[1.6] text-primary sm:max-w-132.25">{item.text}</p>
              <Animated show={show} delay={320}>
                <div className="mt-auto flex justify-center pt-10">
                  <div className="w-100 h-100 rounded-full overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover object-[65%_80%]"/>
                  </div>
                </div>
              </Animated>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}