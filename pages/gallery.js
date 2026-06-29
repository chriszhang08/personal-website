// Archived creative gallery — frosted-card grid styled to match the home-page popups.
// Each entry: { src, title?, description?, href? } — render is uniform.
// `src` is a relative path resolved through media() — works against /public/ in dev
// (when NEXT_PUBLIC_MEDIA_URL is unset) and against Vercel Blob in production.
import Head from "next/head";
import { media } from "../lib/media";

const POSTERS = [
  {
    src: "movieposter/fmrfox.png",
    title: "Fantastic Mr. Fox",
    description:
      "My favorite Wes Anderson film, and my first movie poster ever made. I wanted it to capture his cinematography style, so I centered the tree per his framing.",
  },
  {
    src: "movieposter/coco.png",
    title: "Coco",
  },
  {
    src: "movieposter/rat.png",
    title: "Ratatouille",
  },
  {
    src: "movieposter/soul.png",
    title: "Soul",
  },
];

const MABYPARK_NOTE = `Maby Park and Hotel, Sweden — the kind of design choice you only notice on a layover. Shower and toilet detached from the room. Shower water shuts off after 20 seconds. Door handle so high you'd struggle if you were under 5'4". More sustainable than any comparable US facility, and I genuinely enjoyed it more.`;

function Card({ src, title, description, href, children }) {
  const inner = (
    <div
      style={{
        background: "rgba(15,12,28,.86)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.13)",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 24px 70px rgba(0,0,0,.35)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform .2s, border-color .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.13)";
      }}
    >
      {src && (
        <div style={{ background: "rgba(255,255,255,.04)" }}>
          <img
            src={media(src)}
            alt={title || ""}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      )}
      {(title || description || children) && (
        <div style={{ padding: 18 }}>
          {title && (
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                marginBottom: description || children ? 8 : 0,
                letterSpacing: ".01em",
              }}
            >
              {title}
            </div>
          )}
          {description && (
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.55,
                color: "rgba(255,255,255,.66)",
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", height: "100%" }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.5)",
          margin: 0,
          marginBottom: 20,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 18,
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Creative Gallery — Chris Zhang</title>
        <meta
          name="description"
          content="Archived creative work — movie poster designs and travel notes."
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          padding: "110px 26px 80px",
          background:
            "radial-gradient(ellipse 120% 90% at 50% 22%, #1c1636 0%, #110d24 38%, #08061333 64%, #050409 100%)",
          fontFamily: "Manrope, system-ui, sans-serif",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <header style={{ marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.4)",
                marginBottom: 8,
              }}
            >
              Archive · Creative Gallery
            </div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Things I've made on the side.
            </h1>
          </header>

          <Section title="Movie Poster Collection">
            {POSTERS.map((p) => (
              <Card key={p.src} {...p} />
            ))}
          </Section>

          <Section title="Travel Notes">
            <Card title="Maby Park · Sweden" description={MABYPARK_NOTE} />
          </Section>
        </div>
      </main>
    </>
  );
}
