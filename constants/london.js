// Supported block types: header | title | subtitle | paragraph | image | link-card | iframe
const london = {
  id: "london",
  label: "London",
  lat: 51.51,
  lon: -0.13,
  accent: "#f5c542",
  blocks: [
    {
      type: "header",
      text: "London, United Kingdom · Currently",
    },
    {
      type: "title",
      text: "Mercuria Energy Trading SA",
    },
    {
      type: "subtitle",
      text: "Junior Software Engineer",
    },
    {
      type: "paragraph",
      text: `Moved to London a week after I graduated to work for Mercuria - 
      one of the largest commodities traders in the world. 
      Being on the front lines of the commodities industry has enabled me 
      to learn as much as possible about the opaque and risky problem of 
      moving energy around the world.`,
    },
    {
      type: "paragraph",
      text: `My time at Mercuria has been spent mostly with the freight desk,
       building algorithmic P&L attribution applications to give the desks more 
       clarity on the hundreds and thousands of open positions they have internally, 
       as well as some ADHOC data and AI engineering work.`,
    },
  ],
};

export default london;
