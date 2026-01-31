export default function Hero(){
  return (
    <section className="min-h-screen w-full bg-[#fbf7f2]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 md:grid-cols-2">

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif">
              Live a fulfilling life
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              {`Life can be challenging-especially when you're trying to balance your personal and professional life.`}
            </p>
            <p className="mt-4 text-lg text-gray-700">
              {`I'm here to support you through it.`}
            </p>
            <div className="mt-8">
              <button className="border px-6 py-3 text-sm tracking-wide">
                Get in touch
              </button>
            </div>
          </div>

          <div className="h-[70vh] md:h-[80vh] w-full overflow-hidden">
            <img src="/hero-2.jpg" alt="" className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}