import Footer from "@/app/Components/Footer";
import Link from "next/link";

export default function Disclaimer(){
  return (
    <section className="bg-secondary text-primary py-32">
      <div className="mx-auto max-w-450 section-x body-md text-primary">
        <p>The information provided on this website is for educational and informational purposes only and is not a substitute for professional mental health care.</p>
        <p>Engaging with this website, submitting a contact request, or sending an email does not create a therapeutic relationship.</p>
        <p>If you are experiencing a mental health emergency, please call 911, contact your local emergency services, or visit the nearest emergency room.</p>
        <p>This practice does not provide crisis services through this website.</p>
        <p className="mt-6">
          You can return to our homepage by <Link href="/" className="underline">clicking here</Link>
          , or you can try searching for the content you are seeking by <Link href="/legal/search" className="underline">clicking here</Link> .
        </p>
      </div>
      <Footer />
    </section>
  );
}