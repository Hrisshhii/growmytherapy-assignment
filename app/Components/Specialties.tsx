"use client";
/* eslint-disable @next/next/no-img-element */
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
const specialties = [
  {
    title: "Anxiety & Chronic Stress Therapy",
    text:(<>Persistent worry, racing thoughts and emotional tension can make daily life feel exhausting; even when everything appears “fine” on the outside. Together, we work to understand the patterns driving your anxiety building practical, <strong className="text-[1.05rem] text-primary">evidence-based tools</strong> to help you feel more grounded, present and in control.</>),
    image: "/speciality-1.jpg",
  },
  {
    title: "Trauma Therapy & Lingering Past Experiences",
    text:(<>Unresolved experiences can quietly shape how you move through the world influencing relationships, confidence, and your sense of safety. Using carefully paced, evidence-based approaches therapy becomes a space to process what you&apos;ve carried and support <strong className="text-[1.05rem] text-primary">lasting emotional healing.</strong></>),
    image: "/speciality-2.png",
  },
  {
    title: "Burnout & High Internal Pressure Therapy",
    text:(<>Many <strong className="text-[1.05rem] text-primary">high-achieving adults</strong> push through stress for years before realizing how disconnected they&apos;ve become from themselves. Therapy offers a place to slow down, <strong className="text-[1.05rem] text-primary">reconnect</strong> and develop <strong className="text-[1.05rem] text-primary">more sustainable ways of living and working</strong> without sacrificing the ambition and purpose that matter to you.</>),
    image: "/speciality-3.jpg",
  },
];

export default function Specialties(){
  const {ref,show}=useReveal(80);
  return (
    <section className="bg-secondary" ref={ref}>
      <div className="mx-auto max-w-450 section-x pt-35 pb-40">
        <div className="text-center mb-20">
          <h2 className={`heading-xl text-primary mb-2
          transition-opacity duration-500 ease-out
            ${show? "opacity-100":"opacity-0"}`}>
            Areas of Focus
          </h2>
          <p className="text-[1.02rem] text-primary/90">Evidence-based therapy for anxiety, trauma, and burnout in <strong className="text-[1.1rem] text-primary">Santa Monica</strong> and across California.</p>
        </div>
        
        <div className=" grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full h-full flex-col border border-primary bg-muted p-5 transition-transform duration-300 hover:-translate-y-1.5">
              <Animated show={show} delay={120}>
                <h3 className="px-1 py-3 mt-0 body-md font-medium text-primary">{item.title}</h3>
              </Animated>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-primary/90 sm:max-w-132.25">{item.text}</p>
              <Animated show={show} delay={320}>
                <div className="mt-auto flex justify-center pt-10">
                  <div className="w-55 sm:w-75 md:w-85 lg:w-100 aspect-square rounded-full overflow-hidden">
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