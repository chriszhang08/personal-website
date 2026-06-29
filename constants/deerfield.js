// Supported block types: header | title | subtitle | paragraph | image | link-card | iframe
const deerfield = {
  id: "deerfield",
  label: "Deerfield",
  lat: 42.1542,
  lon: -87.9075,
  accent: "#f5c542",
  blocks: [
    {
      type: "header",
      text: "Deerfield, Illinois · 2023",
    },
    {
      type: "title",
      text: "Oracle Energy and Water Global Business Unit",
    },
    {
      type: "subtitle",
      text: "Research and Development Intern",
    },
    {
      type: "paragraph",
      text: `Went to big tech for a bit, working at Oracle's innovation lab in the suburbs of Chicago.
      Spent the summer building a full-stack web application that allowed users to visualize and 
      analyze energy consumption data from smart appliances, and helping out with customer visits to the 
      innovation lab. Working on the lab was so cool, they had so many business units and products under one roof, 
      so I got to play with so many different technologies and tools like drones and smart police cars.`,
    },
    {
      type: "image",
      src: "travelpics/prague-film.jpg",
      alt: "Me directing a short film in Prague",
    },
  ],
};

export default deerfield;
