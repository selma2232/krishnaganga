import Hero from "../components/Hero";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <main style={{ padding: "32px 20px" }}>
        <About />
      </main>
    </>
  );
}
