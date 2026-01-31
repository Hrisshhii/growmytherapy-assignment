const specialties = [
  {
    title: "Self-Esteem",
    text:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/specialty-1.jpg",
  },
  {
    title: "Relationships",
    text:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/specialty-2.jpg",
  },
  {
    title: "Burnout",
    text:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/specialty-3.jpg",
  },
];

export default function Specialties(){
  return (
    <section className="bg-[#fbf7f2]">
      <div className="mx-auto max-w-[1600px] px-[3.75vw]  pt-[140px] pb-[120px]">

        <h2 className="mb-[96px] text-center text-[3rem] font-medium text-[#223614] mb-[80px]">
          My Specialties
        </h2>

        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className="border border-[#223614] bg-[#e9e4dc] p-[32] flex flex-col">
              <h3 className="text-[1.5] font-medium text-[#223614]">{item.title}</h3>
              <p className="mt-4 text-[1rem] leading-[1.6] max-w-[420px]">{item.text}</p>
              <div className="mt-auto pt-[48px]">
                <div className="mx-auto w-[260px] h-[260px] rounded-full overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}