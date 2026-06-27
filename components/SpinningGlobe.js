import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import cities, { citiesById } from "../constants/cities";
import CityPopup from "./CityPopup";

const PALETTE = {
  ocean: "#15294d",
  land: "#5cba8e",
  edge: "#3f9a72",
  atmosphere: "#5fd0e0",
};

const COUNTRIES_URL =
  "https://unpkg.com/three-globe/example/country-polygons/ne_110m_admin_0_countries.geojson";

const PIN_SIZE = 14;

function buildPinElement(city, onClick) {
  // react-globe.gl writes `transform` on this wrapper every frame to
  // position the pin — do NOT mutate transform/opacity here.
  const wrap = document.createElement("div");
  wrap.style.cssText = `width:${PIN_SIZE}px;height:${PIN_SIZE}px;cursor:pointer;pointer-events:auto;`;

  const dot = document.createElement("div");
  dot.style.cssText = `width:100%;height:100%;border-radius:50%;background:#000;border:2px solid rgba(255,255,255,.85);box-shadow:0 2px 6px rgba(0,0,0,.5);transition:transform .15s;transform-origin:center;`;
  wrap.appendChild(dot);

  wrap.addEventListener("mouseenter", () => {
    dot.style.transform = "scale(1.25)";
  });
  wrap.addEventListener("mouseleave", () => {
    dot.style.transform = "scale(1)";
  });
  wrap.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick(city.id);
  });

  return wrap;
}

export default function SpinningGlobe() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState([]);
  const [activeId, setActiveId] = useState(null);

  // Stable click handler exposed to vanilla DOM events.
  const handlersRef = useRef({ onPinClick: () => {} });
  handlersRef.current.onPinClick = (id) => {
    const c = citiesById[id];
    if (!c) return;
    setActiveId(id);
    const g = globeRef.current;
    if (g) {
      const controls = g.controls && g.controls();
      if (controls) controls.autoRotate = false;
      if (typeof g.pointOfView === "function") {
        g.pointOfView({ lat: c.lat, lng: c.lon, altitude: 2.4 }, 800);
      }
    }
  };

  const closePopup = () => {
    setActiveId(null);
    const g = globeRef.current;
    if (g) {
      const controls = g.controls && g.controls();
      if (controls) controls.autoRotate = true;
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch(COUNTRIES_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setCountries(data.features || []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color(PALETTE.ocean),
        shininess: 8,
      }),
    []
  );

  const handleReady = () => {
    const g = globeRef.current;
    if (!g || typeof g.controls !== "function") return;
    const controls = g.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
    }
    g.pointOfView({ lat: 20, lng: 20, altitude: 2.4 }, 0);
  };

  const activeCity = activeId ? citiesById[activeId] : null;

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {size.width > 0 && (
          <Globe
            ref={globeRef}
            width={size.width}
            height={size.height}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere
            atmosphereColor={PALETTE.atmosphere}
            atmosphereAltitude={0.18}
            showGlobe
            globeMaterial={globeMaterial}
            polygonsData={countries}
            polygonAltitude={0.005}
            polygonCapColor={() => PALETTE.land}
            polygonSideColor={() => "rgba(0,0,0,0)"}
            polygonStrokeColor={() => PALETTE.edge}
            htmlElementsData={cities}
            htmlLat={(d) => d.lat}
            htmlLng={(d) => d.lon}
            htmlAltitude={0.01}
            htmlElement={(d) =>
              buildPinElement(d, (id) => handlersRef.current.onPinClick(id))
            }
            htmlElementVisibilityModifier={(el, isVisible) => {
              el.style.opacity = isVisible ? "1" : "0";
              el.style.pointerEvents = isVisible ? "auto" : "none";
            }}
            onGlobeReady={handleReady}
          />
        )}
      </div>

      <CityPopup city={activeCity} onClose={closePopup} />
    </>
  );
}
