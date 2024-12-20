// src/pages/Home.tsx
import React from "react";
import DefaultLayout from "../layouts/default/DefaultLayout";
import Hero from "../components/common/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import ContactForm from "../components/common/ContactForm";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Services />
      <About />
      <ContactForm />
    </DefaultLayout>
  );
};

export default Home;
