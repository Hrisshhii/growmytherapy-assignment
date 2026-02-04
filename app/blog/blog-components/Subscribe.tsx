
"use client";

import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";
import React, {useState} from "react";

export default function Subscribe(){
  const {ref,show}=useReveal(80);
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState<"idle" | "loading" | "success">("idle");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    setSubmitted(true);
    if(!email) return;
    setStatus("loading");
    setTimeout(()=>{setStatus("success")},1200);
  };

  return (
    <section className="bg-accent py-40" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <div className="border border-white/70 px-8 sm:px-6 py-16 sm:py-14 text-center max-w-337.5 mx-auto transition-all duration-500">
          {status==="success" && (
            <div className="flex-items-start justify-center pb-20 sm:pb-35">
              <p className="text-white text-[clamp(1rem,1.15vw,1.25rem)] font-medium animate-fade-in">Thank you!</p>
            </div>
          )}
          {status!=="success" && (
            <>
              <Animated show={show} delay={120}>
                <h2 className="text-white text-[clamp(2.5rem,3vw,3.25rem)] font-medium mb-4">
                  Stay Connected
                </h2>
              </Animated>
              
              <p className="text-white/90 mb-3 text-[clamp(1rem,1.15vw,1.25rem)]">
                Receive occasional reflections, mental health resources, and gentle guidance for navigating life with greater steadiness.
              </p>
              <p className="text-white/70 mb-11 text-[clamp(0.8rem,1.vw,1.2rem)]">In-person therapy in Santa Monica and secure telehealth sessions across California.</p>
              
              <form onSubmit={onSubmit} className="flex flex-col items-center sm:flex-row justify-center gap-4 mb-6">
                <div className="w-full max-w-[320px]">
                  {submitted && !email && status==="idle" && (
                    <p className="bg-red-200 text-red-700 text-sm px-4 py-2 mb-4 rounded text-center">Email Address is required.</p>
                  )}
                  <input type="email" placeholder="Your Email Address" value={email}
                  className="w-full sm:w-[320px] px-5 py-5 text-gray outline-none bg-white text-[clamp(1rem,1.15vw,1.25rem)] focus:ring-0 focus:outline-none"
                  onChange={e=>setEmail(e.target.value)}
                  />
                </div>
                
                <Animated show={show} delay={220}>
                  <button type="submit" disabled={status==="loading"} className="px-8 pt-5.5 pb-5.5 border border-white text-white hover:bg-gray-400 hover:border-gray-400 hover:text-black transition disabled:opacity-60 cursor-pointer flex items-center justify-center">
                    {status==="loading"?(
                      <span className="h-5 w-5 border-2 border-white border-t-transprent rounded-full animate-spin" />
                    ):("Join the List")}
                  </button>
                </Animated>
              </form>
              <p className="text-white text-bold text-[1rem] mt-10">Your privacy is respected. You may unsubscribe at any time.</p>
            </>
          )}
        </div>
        
      </div>
    </section>
  );
};
