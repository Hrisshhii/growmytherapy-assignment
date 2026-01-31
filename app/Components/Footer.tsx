import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#fbf7f2] text-[#223614]">
      <div className="mx-auto max-w-[1600px] px-[3.75vw] pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          <div>
            <h3 className="text-2xl font-medium mb-6">
              Lilac Template
            </h3>
            <p className="text-[1.05rem] leading-[1.7]">
              123 Example Road <br />
              Minneapolis, MN
            </p>
            <div className="mt-6 space-y-2 text-[1.05rem]">
              <a href="mailto:email@example.com" className="underline block">email@example.com</a>
              <a href="tel:5555555555" className="underline block">(555) 555-5555</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-6">Hours</h4>
            <p className="text-[1.05rem] leading-[1.7]">
              Monday-Friday<br />
              10am - 6pm
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-5">Find</h4>
            <ul className="space-y-3 text-[1.05rem]">
              <li><Link href="/" className="underline">Home</Link></li>
              <li><Link href="/contact" className="underline">Contact</Link></li>
              <li><Link href="/blog" className="underline">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}