// Reusable popup that renders a city's `blocks` array.
// Block schema:
//   { type: 'header',     text, accent? }
//   { type: 'title',      text }
//   { type: 'subtitle',   text }
//   { type: 'paragraph',  text }
//   { type: 'image',      src, alt?, caption? }
//   { type: 'link-card',  href, eyebrow, eyebrowColor?, title, description?, body?, cta? }
//   { type: 'iframe',     src, title?, aspectRatio? }  // aspectRatio defaults to '16/9'
import React from "react";
import { media } from "../lib/media";

function HeaderBlock({ text, accent }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 14,
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: accent,
          boxShadow: `0 0 8px ${accent}`,
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: accent,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function TitleBlock({ text }) {
  return (
    <h2
      style={{
        fontSize: 23,
        fontWeight: 800,
        color: "#fff",
        lineHeight: 1.15,
        margin: 0,
        marginBottom: 4,
      }}
    >
      {text}
    </h2>
  );
}

function SubtitleBlock({ text }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 600,
        color: "rgba(255,255,255,.55)",
        marginBottom: 14,
      }}
    >
      {text}
    </div>
  );
}

function ParagraphBlock({ text }) {
  return (
    <p
      style={{
        fontSize: 14,
        lineHeight: 1.6,
        color: "rgba(255,255,255,.78)",
        margin: 0,
        marginBottom: 14,
      }}
    >
      {text}
    </p>
  );
}

function ImageBlock({ src, alt, caption }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,.12)",
          background: "rgba(255,255,255,.04)",
        }}
      >
        <img
          src={media(src)}
          alt={alt || ""}
          style={{ width: "100%", display: "block" }}
        />
      </div>
      {caption && (
        <div
          style={{
            fontSize: 12.5,
            lineHeight: 1.55,
            color: "rgba(255,255,255,.62)",
            marginTop: 8,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

export function LinkCardBlock({
  href,
  eyebrow,
  eyebrowColor = "#ff8c5a",
  title,
  description,
  body,
  cta,
}) {
  const ringBg = `${eyebrowColor}1a`; // ~10% alpha
  const ringBg2 = `${eyebrowColor}08`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        border: `1px solid ${eyebrowColor}4d`,
        background: `linear-gradient(180deg, ${ringBg}, ${ringBg2})`,
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        transition: "border-color .15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${eyebrowColor}99`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${eyebrowColor}4d`;
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: eyebrowColor,
            marginBottom: 9,
          }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: 5,
          }}
        >
          {title}
        </div>
      )}
      {description && (
        <div
          style={{
            fontSize: 12.5,
            fontWeight: 500,
            color: "rgba(255,255,255,.62)",
            lineHeight: 1.45,
            marginBottom: 9,
          }}
        >
          {description}
        </div>
      )}
      {body && (
        <div
          style={{
            fontSize: 12.5,
            lineHeight: 1.5,
            color: "rgba(255,255,255,.55)",
            marginBottom: 12,
          }}
        >
          {body}
        </div>
      )}
      {cta && (
        <span style={{ fontSize: 12.5, fontWeight: 700, color: eyebrowColor }}>
          {cta}
        </span>
      )}
    </a>
  );
}

function IframeBlock({ src, title, aspectRatio = "16/9" }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.12)",
        background: "rgba(0,0,0,.4)",
        marginBottom: 14,
      }}
    >
      <iframe
        src={src}
        title={title || "embedded content"}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}

function renderBlock(block, i, accent) {
  switch (block.type) {
    case "header":
      return (
        <HeaderBlock key={i} text={block.text} accent={block.accent || accent} />
      );
    case "title":
      return <TitleBlock key={i} text={block.text} />;
    case "subtitle":
      return <SubtitleBlock key={i} text={block.text} />;
    case "paragraph":
      return <ParagraphBlock key={i} text={block.text} />;
    case "image":
      return (
        <ImageBlock
          key={i}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
        />
      );
    case "link-card":
      return <LinkCardBlock key={i} {...block} />;
    case "iframe":
      return (
        <IframeBlock
          key={i}
          src={block.src}
          title={block.title}
          aspectRatio={block.aspectRatio}
        />
      );
    default:
      return null;
  }
}

export default function CityPopup({ city, onClose }) {
  if (!city) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 22,
        width: 368,
        maxWidth: "calc(100vw - 44px)",
        maxHeight: "calc(100vh - 110px)",
        overflowY: "auto",
        zIndex: 30,
        background: "rgba(15,12,28,.86)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.13)",
        borderRadius: 18,
        padding: 24,
        boxShadow: "0 24px 70px rgba(0,0,0,.55)",
        animation: "cityPopIn .34s cubic-bezier(.2,.7,.2,1)",
        fontFamily: "Manrope, system-ui, sans-serif",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.12)",
          color: "rgba(255,255,255,.7)",
          fontSize: 15,
          cursor: "pointer",
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,.14)";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,.06)";
          e.currentTarget.style.color = "rgba(255,255,255,.7)";
        }}
      >
        ✕
      </button>
      {city.blocks.map((b, i) => renderBlock(b, i, city.accent))}
    </div>
  );
}
