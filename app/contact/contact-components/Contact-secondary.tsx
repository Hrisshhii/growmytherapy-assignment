"use client";

export default function ContactSecondary(){
  return(
    <section className="bg-muted text-primary">
      <div className="min-h-screen flex flex-col items-center px-6">
        <h2 className="mt-32 text-center heading-lg">
          Book an appointment.
        </h2>
        <p className="m-6 max-w-220 font-normal text-[1.25rem] leading-normal">
          Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
        </p>
        <div className="flex-1 flex items-center my-30">
          <div className="bg-white  w-full max-w-100 sm:max-w-120 px-6 py-8 sm:px-14 sm:py-12 text-center shadow-sm">
            <h3 className="font-bold mb-4 text-[1.3rem] sm:text-[1.4rem]">This page is not active</h3>
            <p className="mb-8 max-w-100 text-[0.8rem] sm:text-[1rem] leading-[1.6]">
              If you&apos;re the owner, please log into your account to start a free trial or subscribe.
            </p>
            <button className="bg-black text-white px-8 py-4 text-sm tracking-wide hover:opacity-80 transition cursor-pointer">GO TO ACCOUNT</button>
          </div>
        </div>
        <div className="pb-24 text-center text-[1rem] text-black">
          <p className="mb-2">Powered by</p>
          <p className="font-bold text-[1.2rem]">acuity:scheduling</p>
        </div>
      </div>
    </section>
  );
}
