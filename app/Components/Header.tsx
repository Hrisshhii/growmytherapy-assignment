import Link from "next/link";

export default function Header(){
  return(
    <header className="absolute top-0 left-0 z-20 w-full bg-[#fbf7f2] pointer-events-none">
      <div className="slide-in mx-auto max-w-[1500px] px-[3.75vw] py-[1vw] pointer-events-auto">
        <div className="flex items-baseline justify-between">
          <div className="header-title">
            <Link href="/" className="font-serif text-[20.5px] leading-[1] tracking-[0em] text-[#223614]">
              Lilac Template
            </Link>
          </div>
          <div className="header-nav">
            <nav className="flex gap-[48px] text-[16px] leading-[1.4] text-[#223614]">
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