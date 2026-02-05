/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import Lightbox from "./Lightbox";
import { useReveal } from "@/app/Components/hooks/useReveal";
import Animated from "@/app/Components/hooks/Animated";

export default function ContactSocial() {
  const {ref,show}=useReveal(0);
  const images = [
    "/post-1.jpg",
    "/post-2.jpg",
    "/post-3.jpg",
    "/post-4.jpg",
  ];

  const [active, setActive] = useState<number | null>(null);

  const next = useCallback(() => {setActive(i => (i! + 1) % images.length)},[images.length]);
  const prev = useCallback(() => {setActive(i => (i! - 1 + images.length) % images.length)},[images.length]);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active,next,prev]);

  return (
    <section className="bg-secondary text-primary py-24 md:py-32 border-b border-b-accent" ref={ref}>
      <div className="mx-auto max-w-450 section-x">
        <Animated show={show} delay={120}>
          <div className=" mb-8 md:mb-12">
            <h2 className="heading-lg mb-2">
              Stay Connected.
            </h2>
            <p className="text-primary/50 text-[0.9rem]">
              Follow for practical tools, reflections, and supportive reminders designed to help you feel more grounded in everyday life.{"  "}
              <a href="https://www.instagram.com/" className="underline text-primary/80" target="_blank">Follow</a>
            </p>
          </div>
        </Animated>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
          {images.map((src, i) => (
            <Animated key={i} show={show} delay={200+i*120}>
              <button
                onClick={() => setActive(i)}
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                />
              </button>
            </Animated>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          images={images}
          index={active}
          onClose={() => setActive(null)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}