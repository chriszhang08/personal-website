// Supported block types: header | title | subtitle | paragraph | image | link-card | iframe
const calgary = {
  id: "calgary",
  label: "Calgary",
  lat: 51.0447,
  lon: -114.0719,
  accent: "#f5c542",
  blocks: [
    {
      type: "header",
      text: "Calgary, Canada · 2025",
    },
    {
      type: "title",
      text: "Canadian Hydrogen Convention",
    },
    {
      type: "subtitle",
      text: "Grand Prize Winner — Global Hydrogen Case Competition",
    },
    {
      type: "paragraph",
      text: `One of my proudest achievements, worked tirelessly on this one with my incredibly talented
      teammates Andres and Bella. We developed a comprehensive case study for hydrogen implementation in
      the Canadian mining industry, presenting to industry leaders from Air Liquide, Linde, and Edmonton Global.
      An unforgettable experience that deepened my understanding of the hydrogen economy and its role to play in the upcoming in the energy transition.`,
    },
    // {
    //   type: "image",
    //   src: "travelpics/calgary-hydrogen.jpg",
    //   alt: "Me at the Canadian Hydrogen Convention",
    // },
    {
      type: "link-card",
      href: "https://edmontonglobal.ca/news/media-release-global-student-teams-compete-for-10000-prize-in-hydrogen-innovation-challenge/",
      eyebrow: "In the news",
      eyebrowColor: "#e63946",
      title:
        "Team Hydrocore wins $10,000 at the Global Hydrogen Case Competition",
      description:
        "Three finalist teams from Calgary, Michigan, and Mexico presented live at the Canadian Hydrogen Convention.",
      body: "Run by the University of Alberta's Interdisciplinary Consulting Association, the GHCC challenges student teams to design scalable, real-world hydrogen solutions. Since 2023...",
      cta: "Read the press release →",
    },
  ],
};

export default calgary;
