"use client";

import Animated from "@/app/Components/hooks/Animated";
import { useReveal } from "@/app/Components/hooks/useReveal";
import React, {useState} from "react";

export default function Subscribe(){
  const {ref,show}=useReveal(80);
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState<"idle" | "loading" | "success">("idle");

  const onSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
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
                  Subscribe
                </h2>
              </Animated>
              
              <p className="text-white/90 mb-11 text-[clamp(1rem,1.15vw,1.25rem)]">
                Sign up with your email address to receive news and updates.
              </p>
              <form onSubmit={onSubmit} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <input type="email" placeholder="Email Address" value={email}
                 className="w-full sm:w-[320px] px-5 py-4 text-gray outline-none bg-white text-[clamp(1rem,1.15vw,1.25rem)]"
                 onChange={e=>setEmail(e.target.value)}
                />
                <Animated show={show} delay={220}>
                  <button className="px-8 pt-6 pb-6 border border-white text-white hover:bg-gray-400 hover:border-gray-400 hover:text-black transition disabled:opacity-60 cursor-pointer">
                    {status==="loading"?"...":"SIGN UP"}
                  </button>
                </Animated>
                
              </form>
              <p className="text-white text-bold text-[1rem] mt-10">We respect your privacy.</p>
            </>
          )}
        </div>
        
      </div>
    </section>
  );
};