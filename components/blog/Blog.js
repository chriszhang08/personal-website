import * as React from "react";
import { LinkCardBlock } from "../CityPopup";

export default function Blog() {
  return (
    <div style={{ maxWidth: 560, width: "100%", margin: "0 auto" }}>
      <LinkCardBlock
        href="https://open.substack.com/pub/chriszhang3/p/bridging-the-energy-divide-sustainable?r=17stkd&utm_campaign=post&utm_medium=web"
        eyebrow="From my Substack"
        eyebrowColor="#ff8c5a"
        title="Bridging the Energy Divide"
        description="Notes from Bhutan on what carbon-negative development actually looks like up close. [placeholder description — swap in the real summary]"
        body="The average person in the United States consumes ~12,000 kWh of electricity in a year. Per day, that comes down to 33 kWh, which is enough for ~10 full dryer loads..."
        cta="Read on Substack →"
      />
    </div>
  );
}
