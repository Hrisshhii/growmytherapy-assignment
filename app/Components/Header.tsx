"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header(){
  useEffect(() => {
    let lastY=window.scrollY;
    let anchorY=lastY;

    const THRESHOLD=60;

    const onScroll =()=>{
      const y=window.scrollY;
      const direction=y>lastY?"down":"up";

      if (y < 10) {
        document.body.classList.remove("tweak-fixed-header");
        anchorY=y;
        lastY=y;
        return;
      }

      if (direction==="down" && y-anchorY > THRESHOLD && y > 80) {
        document.body.classList.add("tweak-fixed-header");
        anchorY=y;
      }

      if (direction==="up" && anchorY-y>THRESHOLD) {
        document.body.classList.remove("tweak-fixed-header");
        anchorY=y;
      }

      lastY=y;
    };

    window.addEventListener("scroll",onScroll,{passive:true });
    return ()=>window.removeEventListener("scroll",onScroll);
  }, []);

  return(
    <header className="header bg-[#fbf7f2]">
      <div className="header-inner slide-in w-full">
        <div className="flex items-baseline justify-between">

          <div className="header-title">
            <Link href="/" className="font-medium text-[calc((2-1)*1.2vw+1rem)] leading-none tracking-[0em] text-[#223614]">
              Lilac Template
            </Link>
          </div>

          <div className="header-nav">
            <nav className="flex gap-12 text-[calc((1.2-1)*1.2vw+1rem)] font-normal leading-[1.4] text-[#223614]">
              <Link href="/blog" className="hover:opacity-70 transition">
                Blog
              </Link>
              <Link href="/contact" className="hover:opacity-70 transition">
                Contact
              </Link>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}