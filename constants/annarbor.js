// Supported block types: header | title | subtitle | paragraph | image | link-card | iframe
const annarbor = {
  id: "annarbor",
  label: "Ann Arbor",
  lat: 42.28,
  lon: -83.74,
  accent: "#FFCB05",
  blocks: [
    {
      type: "header",
      text: "Ann Arbor, Michigan · Class of '24, '26",
    },
    {
      type: "title",
      text: "University of Michigan",
    },
    {
      type: "subtitle",
      text: "B.S.E. & M.S. — Go Blue",
    },
    {
      type: "paragraph",
      text: `Two degrees and a deep dive into business, engineering, 
      and the messy economics of getting to net zero. Started with a double degree
      in Computer Science and Environmental Engineering, but
      decided to focus on what I knew the best - technology.
      I was an instructor for EECS 280 to 3,000+ students annually, which taught me way 
      more about communication than any lecture could.`,
    },
    {
      type: "paragraph",
      text: `Built my Master's thesis around hydrogen storage optimization using RL — 
      turns out methanol is actually kind of promising for the energy transition. Who knew?`,
    },
    {
      type: "link-card",
      href: "https://substack.com/home/post/p-149740497",
      eyebrow: "From my Substack",
      eyebrowColor: "#ff8c5a",
      title: "Free Solar Panels… if you sign up",
      description:
        "How you might play a role in the innovative way Ann Arbor is trying to reach their net-zero goals.",
      body: "A case for voting yes on Prop A — letting the city install solar through a community-owned utility co-op.",
      cta: "Read on Substack →",
    },
  ],
};

export default annarbor;
