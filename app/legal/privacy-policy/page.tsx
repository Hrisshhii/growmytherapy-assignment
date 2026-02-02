import Footer from "@/app/Components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="bg-secondary text-primary py-32">
      <div className="mx-auto max-w-450 section-x body-md text-primary">
        <p>We couldn&apos;t find the page you were looking for. This is either because:</p>
        <ul className="list-disc pl-6 my-4">
          <li className="ml-10">There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li className="ml-10">The page you are looking for has been moved or deleted.</li>
        </ul>
        <p className="mt-6">
          You can return to our homepage by <Link href="/" className="underline">clicking here</Link>
          , or you can try searching for the content you are seeking by <Link href="/search" className="underline">clicking here</Link> .
        </p>
      </div>
      <Footer />
    </section>
  );
}
