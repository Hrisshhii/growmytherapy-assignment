import ContactPrimary from "./contact-components/Contact-primary";
import ContactSecondary from "./contact-components/Contact-secondary";
import ContactMap from "./contact-components/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <ContactPrimary />
      <ContactSecondary />
      <ContactMap />
    </main>
  );
}
