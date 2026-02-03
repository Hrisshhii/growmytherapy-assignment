"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
const specialties = [
  {
    title: "Anxiety & Chronic Stress",
    text:
      "Persistent worry, racing thoughts and emotional tension can make daily life feel exhausting; even when everything appears “fine” on the outside. Together, we work to understand the patterns driving your anxiety while building practical tools to help you feel more grounded, present and in control.",
    image: "/specialty-1.jpg",
  },
  {
    title: "Trauma & Lingering Past Experiences",
    text:
      "Unresolved experiences can quietly shape how you move through the world influencing relationships, confidence and your sense of safety. Using carefully paced, evidence-based approaches therapy becomes a space to process what you've carried and support lasting emotional healing.",
    image: "/specialty-2.jpg",
  },
  {
    title: "Burnout & High Internal Pressure",
    text:
      "Many high-achieving adults push through stress for years before realizing how disconnected they've become from themselves. Therapy offers a place to slow down, reconnect and develop more sustainable ways of living and working without sacrificing the ambition that matters to you.",
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
          Areas of Focus
        </h2>

        <div className=" grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full h-full flex-col border border-primary bg-muted p-5 transition-transform duration-300 hover:-translate-y-1.5">
              <Animated show={show} delay={120}>
                <h3 className="px-1 py-3 mt-0 body-md font-medium text-primary">{item.title}</h3>
              </Animated>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-primary sm:max-w-132.25">{item.text}</p>
              <Animated show={show} delay={320}>
                <div className="mt-auto flex justify-center pt-10">
                  <div className="w-55 h-55 sm:w-100 sm:h-100 rounded-full overflow-hidden">
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