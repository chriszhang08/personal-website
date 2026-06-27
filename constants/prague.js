// Supported block types: header | title | subtitle | paragraph | image | link-card | iframe
const prague = {
  id: "prague",
  label: "Prague",
  lat: 50.08,
  lon: 14.42,
  accent: "#f5c542",
  blocks: [
    {
      type: "header",
      text: "Prague, Czech Republic · 2024",
    },
    {
      type: "title",
      text: "IFSA Butler",
    },
    {
      type: "subtitle",
      text: "Sokolská 1792/52, 120 00 Nové Město, Prague 2",
    },
    {
      type: "paragraph",
      text: `Was privileged to study abroad in Prague, immersing myself in the 
        local culture and learning to appreciate the diversity of culture which
        exists in the world, and how it shapes our understanding of global issues.`,
    },
    {
      type: "image",
      src: "/travelpics/prague-film.jpg",
      alt: "Me directing a short film in Prague",
    },
    {
      type: "paragraph",
      text: `Fun fact about Prague: huge film presence. So many movies are filmed here
      (pretty much whenever the story calls for a European city, Prague is the go-to). 
      So I decided to make a short film while I was here.
      It's not really meant for a wide audience, but here's a picture of me directing the set.`,
    },
  ],
};

export default prague;
