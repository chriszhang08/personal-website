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
const HOME_SIZE = 22;
const LOGO_SIZE = 26;

// TODO: replace with the actual uploaded filename for the Michigan M asset.
const MICHIGAN_M_SRC = "/michigan-m.png";

const PROFESSIONAL_IDS = new Set(["houston", "jupiter"]);
const TRAVEL_IDS = new Set(["calgary", "prague"]);
const HOME_IDS = new Set(["london"]);
const LOGO_IDS = new Set(["annarbor"]);

function dotMarkup(color, size) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,.85);box-shadow:0 2px 6px rgba(0,0,0,.5);transition:transform .15s;transform-origin:center;"></div>`;
}

function starMarkup(size) {
  // Inline SVG star — drop shadow + white stroke so it pops against land/ocean.
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" style="display:block;filter:drop-shadow(0 2px 4px rgba(0,0,0,.55));transition:transform .15s;transform-origin:center;"><path d="M12 2.5l2.95 6 6.6.96-4.78 4.66 1.13 6.58L12 17.6l-5.9 3.1 1.13-6.58L2.45 9.46l6.6-.96L12 2.5z" fill="#f5c542" stroke="rgba(255,255,255,.9)" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
}

function logoMarkup(src, size) {
  return `<img src="${src}" alt="" width="${size}" height="${size}" style="display:block;width:${size}px;height:${size}px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,.55));transition:transform .15s;transform-origin:center;" />`;
}

function buildPinElement(city, onClick) {
  // react-globe.gl writes `transform` on this wrapper every frame to
  // position the pin — do NOT mutate transform/opacity here.
  const wrap = document.createElement("div");

  let innerHTML;
  let size = PIN_SIZE;
  if (LOGO_IDS.has(city.id)) {
    size = LOGO_SIZE;
    innerHTML = logoMarkup(MICHIGAN_M_SRC, size);
  } else if (HOME_IDS.has(city.id)) {
    size = HOME_SIZE;
    innerHTML = starMarkup(size);
  } else if (TRAVEL_IDS.has(city.id)) {
    innerHTML = dotMarkup("#1e90ff", size);
  } else if (PROFESSIONAL_IDS.has(city.id)) {
    innerHTML = dotMarkup("#000", size);
  } else {
    innerHTML = dotMarkup("#000", size);
  }

  wrap.style.cssText = `width:${size}px;height:${size}px;cursor:pointer;pointer-events:auto;`;
  wrap.innerHTML = innerHTML;
  const marker = wrap.firstElementChild;

  wrap.addEventListener("mouseenter", () => {
    if (marker) marker.style.transform = "scale(1.25)";
  });
  wrap.addEventListener("mouseleave", () => {
    if (marker) marker.style.transform = "scale(1)";
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
