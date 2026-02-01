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
                My Office
              </h2>
              <p className="body-md mb-8">
                123 Example Street<br/>
                Minneapolis, MN
              </p>
              <h3 className="font-medium mb-4 text-[1.6rem]">Hours</h3>
              <p className="body-md leading-[1.7]">
                Monday - Friday<br/>
                10am - 6pm
              </p>
            </div>
          </Animated>
        
          <div className="relative w-full overflow-hidden h-105 sm:h-125">
            <iframe src="https://www.google.com/maps?q=44.977753,-93.265011&z=12&output=embed" 
            title="Office Location" 
            className="w-full h-full border-0 grayscale contrast-[1.05]" 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>
    </div>
  );
}