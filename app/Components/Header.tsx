"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";
import { usePathname } from "next/navigation";

function MenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <span className="sr-only">Toggle menu</span>

      <div className="relative w-6 h-4">
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-full bg-[#223614]
          transition-all duration-500 ease-in-out
          ${open ? "rotate-45" : "-translate-y-2"}`}
        />
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-full bg-[#223614]
          transition-all duration-500 ease-in-out
          ${open ? "-rotate-45" : "translate-y-2"}`}
        />
      </div>
    </button>
  );
}


export default function Header() {
  const pathname=usePathname();
  const isContact=pathname==="/contact";
  const isBlog=pathname==="/blog";
  const { ref, show } = useReveal(80);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let anchorY = lastY;
    const THRESHOLD = 60;

    const onScroll = () => {
      const y = window.scrollY;
      const direction = y > lastY ? "down" : "up";

      if (y < 10) {
        document.body.classList.remove("tweak-fixed-header");
        anchorY = y;
        lastY = y;
        return;
      }

      if (direction === "down" && y - anchorY > THRESHOLD && y > 80) {
        document.body.classList.add("tweak-fixed-header");
        anchorY = y;
      }

      if (direction === "up" && anchorY - y > THRESHOLD) {
        document.body.classList.remove("tweak-fixed-header");
        anchorY = y;
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(()=>{
    const onResize=()=>{
      if(window.innerWidth>=768&&menuOpen){
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize",onResize);
    return ()=>window.removeEventListener("resize",onResize);
  },[menuOpen]);

  const headerBar =
    "flex items-center justify-between px-6 py-2.5 md:py-1";

  return (
    <>
      <header className={`header text-primary relative z-50 ${isContact ? "bg-accent-soft": "bg-secondary"}`}>
        <div className="header-inner slide-in w-full">
          <div className={`${headerBar} md:flex-row flex-row-reverse`}>
            <Link
              href="/"
              className="font-medium leading-tight text-[calc((2-1)*1.2vw+1rem)] text-primary"
            >
              Lilac Template
            </Link>

            <nav className="hidden md:flex gap-12 leading-tight text-primary text-[calc((1.2-1)*1.2vw+1rem)]">
              <Link href="/blog" className={`${isBlog?"underline underline-offset-8":"hover:opacity-60"}`}>Blog</Link>
              <Link href="/contact"className={`${isContact?"underline underline-offset-8":"hover:opacity-60"}`}>Contact</Link>
            </nav>
            <div className="md:hidden">
              <MenuToggle open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-secondary z-60 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`${headerBar} transition-all duration-700 py-3 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="md:hidden">
            <MenuToggle open={menuOpen} onClick={() => setMenuOpen(false)} />
          </div>

          <Link href="/" onClick={() => setMenuOpen(false)} className="font-medium text-[calc((2-1)*1.2vw+1rem)] text-primary">
            Lilac Template
          </Link>
        </div>

        <Animated show={menuOpen} delay={120}>
          <div className="flex flex-col items-center justify-center gap-10 text-3xl text-primary"  style={{height:"calc(100vh - 64px)"}}>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className={isBlog ? "underline" : "hover:opacity-40"}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={isContact ? "underline" : "hover:opacity-40"}>
              Contact
            </Link>
          </div>
        </Animated>
      </div>
    </>
  );
}
