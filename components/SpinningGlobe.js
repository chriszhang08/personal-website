import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const PALETTE = {
  ocean: "#15294d",
  land: "#5cba8e",
  edge: "#3f9a72",
  atmosphere: "#5fd0e0",
};

const COUNTRIES_URL =
  "https://unpkg.com/three-globe/example/country-polygons/ne_110m_admin_0_countries.geojson";

export default function SpinningGlobe() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState([]);

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

  return (
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
          onGlobeReady={handleReady}
        />
      )}
    </div>
  );
}
