import About from "./Components/About";
import Background from "./Components/Background";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
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
        <FAQ />
        <Background />
        <GetStarted />
        <Footer />
      <div style={{ height: "200vh" }} />
    </main>
  );
}
