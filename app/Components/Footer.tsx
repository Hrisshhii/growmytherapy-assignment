"use client";
import Link from "next/link";
import { useReveal } from "./hooks/useReveal";
import Animated from "./hooks/Animated";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const {ref,show}=useReveal(80);
  return (
    <footer className="bg-secondary text-primary" ref={ref}>
      <div className="mx-auto max-w-450 px-8 md:px-12 lg:px-16 pt-24 pb-20">

        {/* OUTER ROW */}
        <Animated show={show} delay={120}>
          <div className="flex flex-col md:flex-row gap-y-16">

            {/* LEFT BLOCK */}
            <div>
              <h3 className="font-medium text-[clamp(2.5rem,3vw,3.25rem)] text-primary">
                Lilac Template
              </h3>

              <p className="mt-4 body-sm">
                123 Example Road <br />
                Minneapolis, MN
              </p>

              <div className="mt-6 space-y-2 body-sm">
                <a href="mailto:email@example.com" className="underline block">
                  email@example.com
                </a>
                <a href="tel:5555555555" className="underline block">
                  (555) 555-5555
                </a>
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex gap-x-40 md:gap-x-56 lg:gap-x-64 ml-auto">

              {/* HOURS */}
              <div className="mr-15">
                <h4 className="font-medium text-[clamp(1.5rem,2vw,2.5rem)] text-primary">
                  Hours
                </h4>
                <p className="mt-2 text-[1.05rem] leading-[1.7]">
                  Monday-Friday <br />
                  10am - 6pm
                </p>
              </div>

              {/* FIND */}
              <div className="ml-15">
                <h4 className="font-medium text-[clamp(1.5rem,2vw,2.5rem)]">
                  Find
                </h4>
                <ul className="mt-2 space-y-3 body-sm">
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
