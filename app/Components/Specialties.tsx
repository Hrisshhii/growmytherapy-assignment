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
      <div className="mx-auto max-w-[1600px] px-0 pt-[140px] pb-[120px]">

        <h2 className="text-center font-medium text-[#223614] mb-[80px] leading-[1.15] text-[clamp(2.75rem,3.5vw,4rem)]">
          My Specialties
        </h2>

        <div className=" grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3">
          {specialties.map((item)=>(
            <div key={item.title} className=" flex w-full h-full flex-col border border-[#223614] bg-[#e9e4dc] p-[20px] ">
              <h2 className="p-[15px] mt-0 text-[1.25rem] font-medium text-[#223614]">{item.title}</h2>
              <p className="mt-[10px] text-[13.7px] leading-[1.6] text-[#223614] max-w-[529px]">{item.text}</p>
              <div className="mt-auto flex justify-center pt-[40px]">
                <div className="w-[397px] h-[397px] rounded-full overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full object-cover object-[65%_80%]"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}