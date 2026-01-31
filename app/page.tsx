import Primary from "./Components/Primary";
import Secondary from "./Components/Secondary";
import Specialties from "./Components/Specialties";

export default function Home() {
  return (
    <main>
        <Primary />
        <Secondary />
        <Specialties />
      <div style={{ height: "200vh" }} />


      {/* Services */}
      <section>
        Services
      </section>

      {/* About */}
      <section>
        About
      </section>
    </main>
  );
}
