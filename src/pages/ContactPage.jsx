import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main>
      <section
        className="container"
        style={{
          padding: "48px 20px 64px",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>Contact Us</h1>
        <p style={{ color: "#777", marginTop: 6 }}>Home / Contact Us</p>
      </section>
      <Contact />
    </main>
  );
}
