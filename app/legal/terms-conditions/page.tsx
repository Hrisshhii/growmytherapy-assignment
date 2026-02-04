import Footer from "@/app/Components/Footer";
import Link from "next/link";

export default function TermsConditions(){
  return (
    <section className="bg-secondary text-primary py-32">
      <div className="mx-auto max-w-450 section-x body-md text-primary">
        <p>By accessing this website, you agree to use it for informational purposes only.</p>
        <ul className="list-disc pl-6 my-4">
          <li className="ml-10">The content provided is not intended to replace professional psychological, medical, or legal advice.</li>
          <li className="ml-10">Viewing this website or contacting the practice does not establish a therapist-client relationship.</li>
          <li className="ml-10">All website content — including text, branding, and design — is the property of this practice and may not be reproduced without permission.</li>
          <li className="ml-10">We reserve the right to update website content at any time without notice.</li>
        </ul>
        <p className="mt-6">
          You can return to our homepage by <Link href="/" className="underline">clicking here</Link>
          , or you can try searching for the content you are seeking by <Link href="/legal/search" className="underline">clicking here</Link> .
        </p>
      </div>
      <Footer />
    </section>
  );
}