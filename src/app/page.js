// import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import WhyNGU from "@/components/whyNGU/WhyNGU";
import BookAFreeTrial from "@/components/bookAFreeTrial/BookAFreeTrial";
import Membership from "@/components/membership/Membership";
import Contact from "@/components/contact/Contact";
import Timetable from "@/components/timetable/Timetable";
import WhatWeOffer from "@/components/whatWeOffer/WhatWeOffer";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyNGU/>
      <BookAFreeTrial/>
      <WhatWeOffer/>
      <Membership/>
      <Contact/>
      <Timetable/>
    </div>
  );
}
