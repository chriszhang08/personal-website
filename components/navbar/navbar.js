import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const linkBase = {
  textDecoration: "none",
  fontSize: 13,
  padding: "8px 12px",
  borderRadius: 8,
  letterSpacing: ".01em",
  fontFamily: "Manrope, system-ui, sans-serif",
  transition: "color .15s, background .15s",
};

const NavLink = ({ href, active, children }) => (
  <Link
    href={href}
    style={{
      ...linkBase,
      fontWeight: active ? 600 : 500,
      color: active ? "#fff" : "rgba(255,255,255,.72)",
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.background = "rgba(255,255,255,.07)";
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.color = "rgba(255,255,255,.72)";
        e.currentTarget.style.background = "transparent";
      }
    }}
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, title, hoverColor, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    title={title}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 34,
      height: 34,
      borderRadius: 9,
      color: "rgba(255,255,255,.78)",
      border: "1px solid rgba(255,255,255,.12)",
      transition: "color .15s, border-color .15s, background .15s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = hoverColor.color;
      e.currentTarget.style.borderColor = hoverColor.border;
      e.currentTarget.style.background = hoverColor.bg;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "rgba(255,255,255,.78)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
      e.currentTarget.style.background = "transparent";
    }}
  >
    {children}
  </a>
);

const Navbar = () => {
  const router = useRouter();
  const path = router?.pathname || "/";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 26px",
        zIndex: 20,
        background:
          "linear-gradient(to bottom, rgba(8,6,18,.72), rgba(8,6,18,0))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        fontFamily: "Manrope, system-ui, sans-serif",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.08,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 16,
            color: "#fff",
            letterSpacing: ".01em",
          }}
        >
          Chris Zhang
        </span>
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,.5)",
            letterSpacing: ".02em",
          }}
        >
          Advancing the energy transition
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <NavLink href="/" active={path === "/"}>
          Home
        </NavLink>
        <NavLink
          href="/save-the-world"
          active={path === "/save-the-world"}
        >
          Save the World
        </NavLink>
        <NavLink href="/bio" active={path === "/bio"}>
          Archive
        </NavLink>

        <div
          style={{
            width: 1,
            height: 22,
            background: "rgba(255,255,255,.14)",
            margin: "0 8px",
          }}
        />

        <SocialIcon
          href="https://github.com/chriszhang08"
          title="GitHub"
          hoverColor={{
            color: "#f5c542",
            border: "rgba(245,197,66,.5)",
            bg: "rgba(245,197,66,.08)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/in/chriszhang08/"
          title="LinkedIn"
          hoverColor={{
            color: "#5fd0e0",
            border: "rgba(95,208,224,.5)",
            bg: "rgba(95,208,224,.08)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </SocialIcon>

        <SocialIcon
          href="https://substack.com/@chriszhang08"
          title="Substack"
          hoverColor={{
            color: "#ff8c5a",
            border: "rgba(255,140,90,.5)",
            bg: "rgba(255,140,90,.08)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
        </SocialIcon>
      </div>
    </nav>
  );
};

export default Navbar;
