import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main>
      <section
        style={{ padding: "32px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h1 style={{ margin: 0, fontSize: 28 }}>Contact Us</h1>
        <p style={{ color: "#777", marginTop: 6 }}>Home / Contact Us</p>
      </section>
      <Contact />
    </main>
  );
}
