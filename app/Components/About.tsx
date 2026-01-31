export default function About(){
  return (
    <section className="bg-[#e9e4dc]">
      <div className="mx-auto max-w-400 px-[3.75vw] lg:pl-[2vw] lg:pr-[3.75vw] pt-35 pb-30 lg:h-[120vh]">
        <div className="grid grid-col-1 lg:grid-cols-[1.2fr_1fr] gap-[8vw] items-center mx-0">
          <div>
            <h2 className="font-medium text-[#223614] leading-[1.15] text-[clamp(2.75rem,3.5vw,4rem)]">
              Hi, I&apos;m Lilac.
            </h2>
            <p className="mt-6 text-[1.35rem] leading-[1.7] text-[#223614]">
              I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
            </p>
            <div className="mt-10 flex justify-center items-center">
              <button className="border border-[#223614] px-6 py-3 text-sm tracking-wide transition-colors duration-300 hover:bg-[#223614] hover:text-white cursor-pointer">
                LET&apos;S CHAT →
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-132.5 h-195 overflow-hidden rounded-t-full">
              <img src="/about-main.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-15 -right-10 w-95 h-95 rounded-full overflow-hidden">
              <img src="/about-circle.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}