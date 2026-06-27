import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SpinningGlobe = dynamic(() => import("../components/SpinningGlobe"), {
  ssr: false,
});

function Stars({ count = 180 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const colors = [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#d9e6ff",
      "#fff0c2",
      "#cdeaf2",
    ];
    setStars(
      Array.from({ length: count }, () => {
        const size = (Math.random() * 1.8 + 0.6).toFixed(2);
        return {
          left: (Math.random() * 100).toFixed(2),
          top: (Math.random() * 100).toFixed(2),
          size,
          duration: (1.8 + Math.random() * 3.4).toFixed(2),
          delay: (Math.random() * 4).toFixed(2),
          color: colors[(Math.random() * colors.length) | 0],
        };
      })
    );
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: s.color,
            boxShadow: `0 0 ${(s.size * 2).toFixed(1)}px ${s.color}`,
            animation: `tw ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Zhang</title>
        <meta
          name="description"
          content="Chris Zhang — advancing the energy transition."
        />
      </Head>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          fontFamily: "Manrope, system-ui, sans-serif",
          background:
            "radial-gradient(ellipse 120% 90% at 50% 22%, #1c1636 0%, #110d24 38%, #08061333 64%, #050409 100%)",
        }}
      >
        <Stars />

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "53%",
            width: "min(82vh, 820px)",
            height: "min(82vh, 820px)",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            zIndex: 2,
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(95,208,224,.20) 0%, rgba(95,208,224,.06) 42%, rgba(95,208,224,0) 64%)",
            filter: "blur(4px)",
          }}
        />

        <SpinningGlobe />

        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 22,
            transform: "translateX(-50%)",
            zIndex: 6,
            fontSize: 12,
            letterSpacing: ".06em",
            color: "rgba(255,255,255,.4)",
            pointerEvents: "none",
            textTransform: "uppercase",
          }}
        >
          Drag to spin
        </div>
      </div>
    </>
  );
}
