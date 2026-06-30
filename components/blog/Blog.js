import * as React from "react";
import { LinkCardBlock } from "../CityPopup";

export default function Blog() {
  return (
    <div style={{ maxWidth: 560, width: "100%", margin: "0 auto" }}>
      <LinkCardBlock
        href="https://open.substack.com/pub/chriszhang08/p/hydrogen-storage-isnt-a-battery-and?r=17stkd&utm_campaign=post-expanded-share&utm_medium=post%20viewer"
        eyebrow="From my Substack"
        eyebrowColor="#ff8c5a"
        title="Hydrogen Storage Isn't a Battery — And That Changes Everything"
        description="What my Master's thesis found when I pitted liquid H2, ammonia, methanol, and LOHC against each other using a Monte Carlo market simulator and a reinforcement-learning trading agent."
        body="Round-trip friction is everything: hydrogen prices need to swing by ~10% before storage even activates, so the universal 'long-duration battery' framing is wrong. Ammonia wins — but the real takeaway is that hydrogen's value lives in industrial value chains, not in soaking up spare renewables."
        cta="Read on Substack →"
      />
      <LinkCardBlock
        href="https://substack.com/@chriszhang08/p-162276873?utm_source=profile&utm_medium=reader2"
        eyebrow="From my Substack"
        eyebrowColor="#ff8c5a"
        title="Hydrogen, a Commodity Perspective"
        description="Why hydrogen — three times more energy-dense than diesel — still only serves 3% of global energy demand, and what production, transport, and end-use barriers stand between it and a real tradable commodity."
        body="Green hydrogen is still 3–9x more expensive than its fossil-derived equivalent, and the molecule is small enough to leak through steel. The wedge industries that could pull it through anyway: green steel and heavy mining, where electrification simply isn't an option."
        cta="Read on Substack →"
      />
      <LinkCardBlock
        href="https://substack.com/@chriszhang08/p-196593076?utm_source=profile&utm_medium=reader2"
        eyebrow="From my Substack"
        eyebrowColor="#ff8c5a"
        title="A Poor Man's Guide to CPD-Maxing at Tesco"
        description="The second edition of my calorie-per-dollar analysis — recast in pounds for the UK — with three high-protein, low-cost Tesco recipes engineered for the protein-maxing era."
        body="Insta-Kibble clocks in at £4.50 for 1,750 kcal and 140g of protein, less than half the cost of a meal deal. Man-Kibble and Gourmet-Kibble scale up from there, the latter hitting 4,100 kcal / 210g protein over 6–7 servings for £14."
        cta="Read on Substack →"
      />
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
