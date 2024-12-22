// src/pages/Home.tsx
import React from "react";
import DefaultLayout from "../layouts/default/DefaultLayout";
import Hero from "../components/common/Hero";
import Services from "../components/sections/Services";
import PricingPackages from "../components/sections/PricingPackages";
import About from "../components/sections/About";
import ContactForm from "../components/common/ContactForm";
import MaintenancePage from "./Maintenance";

const Home: React.FC = () => {
  return <MaintenancePage />;

  {
    /* <DefaultLayout> */
  }

  {
    /*   <Hero /> */
  }
  {
    /*   <Services /> */
  }
  {
    /*   <About /> */
  }
  {
    /*   <PricingPackages /> */
  }
  {
    /*   <ContactForm /> */
  }
  // </DefaultLayout>
};

export default Home;

