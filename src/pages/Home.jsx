import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import TechnologiesUsed from "../components/TechnologiesUsed";
import FAQ from "../components/Faq";

const Home = () => {
  return (
    <div>
      <WhyChooseUs />
      <TechnologiesUsed />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default Home;
