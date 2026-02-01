/* eslint-disable @next/next/no-img-element */

export default function ContactPrimary() {
  return (
    <section className="pt-40 pb-32 bg-accent-soft text-primary">
      <div className="mx-auto max-w-450 section-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-start">

          <div>
            <h1 className="heading-xl mb-8">
              Let&apos;s Connect
            </h1>

            <p className="max-w-162.5 text-[1.15rem] leading-[1.6] mb-14">
              Starting therapy is courageous.
              <br />
              Get in touch for questions, or to book a free 15-minute consultation.
            </p>

            <div className="relative mt-20 w-fit">
              <div className="w-132.5 h-195 overflow-hidden rounded-t-full">
                <img
                  src="/about-main.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-12 -right-12 w-95 h-95 rounded-full overflow-hidden">
                <img
                  src="/about-circle.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="bg-primary text-secondary p-10 max-w-200">
              <p className="text-[1.05rem] leading-[1.7]">
                <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on
                your contact page this is not HIPAA-compliant.
                <br /><br />
                Instead, you can embed a HIPAA-compliant form, a link to your
                client portal, or simply put your email address.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
