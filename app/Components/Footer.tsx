"use client";
import Link from "next/link";
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const {ref,show}=useReveal(80);
  return (
    <footer className="bg-secondary text-primary" ref={ref}>
      <div className="mx-auto w-full max-w-450 px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20">

        <Animated show={show} delay={120}>
          <div className="flex flex-col md:flex-row gap-y-16">

            <div>
              <h3 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-primary">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p>Licensed Clinical Psychologist</p>

              <p className="mt-3 sm:mt-4 text-[1.3rem]">
                123th Street 45 W<br/>
                Santa Monica, CA 90401
              </p>

              <div className="mt-6 space-y-2 text-[1.3rem]">
                <a href="mailto:email@example.com" className="underline block">
                  drmayareynolds@example.com
                </a>
                <a href="tel:5555555555" className="underline block">
                  (555) 555-5555
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-12 sm:gap-x-24 lg:gap-x-40 sm:ml-auto">
              <div>
                <h4 className="font-medium text-[clamp(1.5rem,2vw,2.5rem)] text-primary">
                  Hours
                </h4>
                <p className="mt-2 text-[1.3rem] leading-[1.7]">
                  Monday-Friday <br />
                  10am - 6pm
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-[clamp(1.5rem,2vw,2.5rem)]">
                  Find
                </h4>
                <ul className="mt-2 space-y-3 text-[1.3rem] sm:text-right">
                  <li><Link href="/" className="underline">Home</Link></li>
                  <li><Link href="/contact" className="underline">Contact</Link></li>
                  <li><Link href="/blog" className="underline">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Animated>
        
      </div>
      <FooterBottom />
    </footer>
  );
}