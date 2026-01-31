import About from "./Components/About";
import Primary from "./Components/Primary";
import Secondary from "./Components/Secondary";
import Specialties from "./Components/Specialties";
import Tertiary from "./Components/Tertiary";

export default function Home() {
  return (
    <main>
        <Primary />
        <Secondary />
        <Specialties />
        <Tertiary />
        <About />
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
