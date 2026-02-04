import Footer from "@/app/Components/Footer";
import Link from "next/link";

export default function TermsConditions(){
  return (
    <section className="bg-secondary text-primary py-32">
      <div className="mx-auto max-w-450 section-x body-md text-primary">
        <p>Your privacy is important to us. This website is designed to provide information about therapy services while respecting the confidentiality of every visitor.</p>
        <ul className="list-disc pl-6 my-4">
          <li className="ml-10"><strong>Information We Collect:</strong> If you choose to contact us through this website, we may collect personal information such as your name, email address, phone number, or any details you voluntarily provide.</li>
          <li className="ml-10"><strong>How Your Information Is Used: </strong> Information is used solely to respond to inquiries, provide requested services, and improve the website experience. Your information is never sold, rented, or shared for marketing purposes.</li>
          <li className="ml-10"><strong>Cookies:</strong> This website may use basic cookies to enhance functionality and understand general site traffic. Cookies do not collect personally identifying information.</li>
          <li className="ml-10"><strong>Confidentiality: </strong> While reasonable measures are taken to protect your information, communication through this website does not establish a therapist-client relationship and may not be fully secure. Please avoid sharing sensitive clinical information through contact forms or email.</li>
          <li className="ml-10"><strong>Third-Party Services</strong> Embedded tools such as maps or scheduling platforms may collect data according to their own privacy policies.</li>
        </ul>
        <p className="mt-6">
          By using this website, you consent to this privacy policy.<br/>
          You can return to our homepage by <Link href="/" className="underline">clicking here</Link>
          , or you can try searching for the content you are seeking by <Link href="/legal/search" className="underline">clicking here</Link> .
        </p>
      </div>
      <Footer />
    </section>
  );
}