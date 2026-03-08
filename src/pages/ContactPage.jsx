import Contact from "../components/Contact";


export default function ContactPage() {
  return (
    <main>
     <section
  style={{
    background: "#f0c419",
    padding: "40px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1152px",
      margin: "0 auto",
      padding: "0 16px",
    }}
  >
    <h1
      style={{
        margin: 0,
        fontSize: "36px",
        fontWeight: 700,
      }}
    >
      Contact
    </h1>
  </div>
</section>
 <Contact />
    </main>
  );
}
