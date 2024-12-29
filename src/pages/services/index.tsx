import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import BusinessTechStack from "../../components/solutions/BusinessTechStack";

interface ServicePreview {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: React.ReactNode;
}

const ServicesIndex: React.FC = () => {
  const services: ServicePreview[] = [
    {
      title: "Ihre Website",
      description:
        "Ihre persönliche digitale Visitenkarte - professionell & einzigartig",
      features: [
        "Einfach selbst zu pflegen",
        "Geschützter Kundenbereich",
        "Newsletter & Kontaktmöglichkeiten",
        "Alles-inklusive-Betreuung",
      ],
      link: "/services/web-development",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Individuelle Lösungen",
      description: "Spezielle Funktionen für Ihre besonderen Anforderungen",
      features: [
        "Maßgeschneiderte Entwicklung",
        "Genau auf Sie zugeschnitten",
        "Einfach zu bedienen",
        "Zukunftssicher gebaut",
      ],
      link: "/services/app-development",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Zeit sparen",
      description: "Lassen Sie Ihre Routineaufgaben automatisch erledigen",
      features: [
        "Automatische Arbeitsabläufe",
        "E-Mails & Terminbuchungen",
        "Alles greift ineinander",
        "Mehr Zeit fürs Wesentliche",
      ],
      link: "/services/automation",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  return (
    <DefaultLayout>
      {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"> */}
      {/*   <div className="container mx-auto px-6"> */}
      {/*     <h1 className="text-4xl md:text-5xl font-bold mb-6"> */}
      {/*       Ihre digitale Zukunft */}
      {/*     </h1> */}
      {/*     <p className="text-xl">Gemeinsam finden wir die perfekte Lösung für Sie</p> */}
      {/*   </div> */}
      {/* </div> */}
      {/**/}
      {/* <div className="container mx-auto px-6 py-16"> */}
      {/*   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {/*     {services.map((service, index) => ( */}
      {/*       <Link */}
      {/*         key={index} */}
      {/*         to={service.link} */}
      {/*         className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" */}
      {/*       > */}
      {/*         <div className="p-6"> */}
      {/*           <div className="text-blue-600 mb-4">{service.icon}</div> */}
      {/*           <h2 className="text-2xl font-bold mb-4">{service.title}</h2> */}
      {/*           <p className="text-gray-600 mb-4">{service.description}</p> */}
      {/*           <div className="border-t border-gray-100 pt-4"> */}
      {/*             <ul className="space-y-2"> */}
      {/*               {service.features.map((feature, idx) => ( */}
      {/*                 <li key={idx} className="flex items-center text-gray-600"> */}
      {/*                   <svg */}
      {/*                     className="w-4 h-4 text-blue-600 mr-2" */}
      {/*                     fill="none" */}
      {/*                     stroke="currentColor" */}
      {/*                     viewBox="0 0 24 24" */}
      {/*                   > */}
      {/*                     <path */}
      {/*                       strokeLinecap="round" */}
      {/*                       strokeLinejoin="round" */}
      {/*                       strokeWidth={2} */}
      {/*                       d="M5 13l4 4L19 7" */}
      {/*                     /> */}
      {/*                   </svg> */}
      {/*                   {feature} */}
      {/*                 </li> */}
      {/*               ))} */}
      {/*             </ul> */}
      {/*           </div> */}
      {/*           <div className="mt-6 text-blue-600 font-medium"> */}
      {/*             Mehr erfahren → */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </Link> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* </div> */}
      {/**/}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <BusinessTechStack />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ServicesIndex;

