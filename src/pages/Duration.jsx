import Hero from "../components/Hero";

export default function DurationPage() {
  return (
    <main>
      <Hero />
      <section
        style={{
          color: "#222",
          padding: "48px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            letterSpacing: 0.5,
            display: "inline-block",
          }}
        >
          Time Required
        </h1>
        <div
          style={{
            height: "3px",
            background: "#f0c419",
            borderRadius: "2px",
            width: "11%",
            margin: "10px auto 0",
          }}
        />
      </section>

      <section
        className="container"
        style={{ padding: "24px 0 64px", margin: "0 auto" }}
      >
        <p style={{ color: "#727272", lineHeight: 1.8, textAlign: "center" }}>
          Minimum period required for treatment is 90 to 120 days and may be
          extended if required (for example in strong denial, dual diagnosis, or
          any psychiatric issues).
        </p>
      </section>
    </main>
  );
}
