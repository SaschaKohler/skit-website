import { ArrowRight, Calendar, Users, HeartHandshake } from "lucide-react";

const JaZumLebenSection = () => {
  const nextCourseDate = "04.02.25";

  const features = [
    {
      title: "Bachblüten & Mindset",
      description:
        "Einzigartige Kombination aus der sanften Kraft der Bachblüten und modernen Mindset-Techniken",
      icon: HeartHandshake,
    },
    {
      title: "14 Wochen Begleitung",
      description:
        "Intensive persönliche Betreuung mit wöchentlichen Live-Calls",
      icon: Calendar,
    },
    {
      title: "Erfahrene Mentoren",
      description:
        "Gerda als Bachblüten-Expertin und Sascha als NLP-Master verbinden ihre Expertise",
      icon: Users,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ja zum Leben Werkstatt
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ein neues Kapitel in der persönlichen Entwicklung
          </p>
        </div>

        {/* Hauptbeschreibung */}
        <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-600">
          <p>
            Die "Ja zum Leben" Werkstatt ist ein einzigartiges Projekt, das
            Anfang 2024 aus der Synergie zwischen Gerda Ahorner und Sascha
            Kohler entstanden ist. Wir verbinden die heilsame Kraft der
            Bachblüten mit modernem Mindset-Training für Ihre persönliche
            Transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative p-6 bg-gray-50 rounded-xl">
              <div className="absolute -top-4 left-4">
                <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-medium text-gray-900 mt-4">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nächster Kursstart */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Nächster Kursstart: {nextCourseDate}
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Immer dienstags von 19-21 Uhr
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Zum Infogespräch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JaZumLebenSection;

