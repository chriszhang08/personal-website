import houston from "./houston";
import annarbor from "./annarbor";
import london from "./london";
import prague from "./prague";
import calgary from "./calgary";
import jupiter from "./jupiter";
import deerfield from "./deerfield";

const cities = [houston, annarbor, london, prague, calgary, jupiter];

export const citiesById = cities.reduce((acc, c) => {
  acc[c.id] = c;
  return acc;
}, {});

export default cities;
