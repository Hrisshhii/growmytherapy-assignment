import Footer from "@/app/Components/Footer";
import Link from "next/link";

export default function GoodFaithEstimate(){
  return (
    <section className="bg-secondary text-primary py-32">
      <div className="mx-auto max-w-450 section-x body-md text-primary">
        <p>Under federal law, healthcare providers are required to provide clients who do not have insurance or who are not using insurance with an estimate of expected charges for services.</p>
        <ul className="list-disc pl-6 my-4">
          <li className="ml-10">You have the right to receive a “Good Faith Estimate” explaining the anticipated cost of therapy services.</li>
          <li className="ml-10">If you schedule services, you may request a written estimate at any time prior to your appointment.</li>
          <li className="ml-10">If you receive a bill that is at least $400 more than your estimate, you have the right to dispute the charges.</li>
          <li className="ml-10">For questions or to request your Good Faith Estimate, please contact the office directly.</li>
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