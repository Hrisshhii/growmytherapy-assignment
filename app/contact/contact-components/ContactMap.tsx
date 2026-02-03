"use client";

import { useReveal } from "@/app/Components/hooks/useReveal";
import Animated from "@/app/Components/hooks/Animated";

export default function ContactMap(){
  const {ref,show}=useReveal(80);
  return (
    <div className="bg-accent text-secondary" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="mx-auto max-w-450 section-x py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-center">
          <Animated show={show} delay={120}>
            <div>
              <h2 className="heading-lg mb-10">
                Visit My Office
              </h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123th+Street+45+W,+Santa+Monica,+CA+90401"
                target="_blank"
                rel="noopener noreferrer"
                className="body-md mb-8 block hover:opacity-70 transition"
              >
                123th Street 45 W,<br/>
                Santa Monica, CA 90401
              </a>
              <h3 className="font-medium mb-4 text-[1.6rem]">Hours</h3>
              <p className="body-md leading-[1.7]">
                Monday - Friday<br/>
                10:00 AM - 6:00 PM
              </p>
              <p className="text-accent-soft pt-15">
                Secure telehealth available across California.
              </p>
            </div>
          </Animated>
        
          <div className="relative w-full rounded-xl overflow-hidden h-105 sm:h-125">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.7943930607395!2d-118.49394164100819!3d34.01365263873559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d1962aea15%3A0x414bf7875c4afe69!2sSanta%20Monica%20Place!5e0!3m2!1sen!2sin!4v1770158464498!5m2!1sen!2sin"
            title="Office Location"
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 grayscale contrast-90">
            </iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
}