import Footer from "../Components/Footer";
import ContactPrimary from "./contact-components/Contact-primary";
import ContactSecondary from "./contact-components/Contact-secondary";
import ContactMap from "./contact-components/ContactMap";
import ContactSocial from "./contact-components/ContactSocial";

export default function ContactPage() {
  return (
    <main>
      <ContactPrimary />
      <ContactSecondary />
      <ContactMap />
      <ContactSocial />
      <Footer />
    </main>
  );
}
