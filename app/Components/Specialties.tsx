"use client";

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
    <section className="bg-[#fbf7f2]" ref={ref}>
      <div className="mx-auto max-w-400 px-0 pt-35 pb-30">

        <h2 className={`text-center font-medium text-[#223614] mb-20 leading-[1.15] text-[clamp(2.75rem,3.5vw,4rem)]
        transition-opacity duration-500 ease-out
          ${show? "opacity-100":"opacity-0"}`}>
          My Specialties
        </h2>

        <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full h-full flex-col border border-[#223614] bg-[#e9e4dc] p-5 ">
              <Animated show={show} delay={120}>
                <h2 className="p-3.75 mt-0 text-[1.25rem] font-medium text-[#223614]">{item.title}</h2>
              </Animated>
              <p className="mt-2.5 text-[13.7px] leading-[1.6] text-[#223614] max-w-132.25">{item.text}</p>
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