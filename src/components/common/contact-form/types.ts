export type ServiceCategory = {
  id: string;
  title: string;
  options: string[];
};

export interface FormData {
  name: string;
  email: string;
  phone: string;
  selectedServices: string[];
  budget: string;
  timeframe: string;
  message: string;
  preferredContact: "email" | "phone" | "both";
}

export type FormStatus = "idle" | "sending" | "success" | "error";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web",
    title: "Web-Entwicklung",
    options: [
      "WordPress mit Divi Theme",
      "React/Vite Anwendung",
      "Custom Website",
      "E-Commerce Lösung",
      "Mitgliederbereich",
    ],
  },
  {
    id: "automation",
    title: "Automatisierung",
    options: [
      "Make.com Integration",
      "Brevo Email Automation",
      "Workflow Optimierung",
      "API Integration",
      "Custom Automation",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & SEO Services",
    options: [
      "Google Ads Managment",
      "Social Media Marketing",
      "SEO-Optimierung",
    ],
  },
];

export const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  selectedServices: [],
  budget: "",
  timeframe: "",
  message: "",
  preferredContact: "email",
};

export const contactOptions = [
  { value: "email" as const, label: "E-Mail" },
  { value: "phone" as const, label: "Telefon" },
  { value: "both" as const, label: "Beides" },
];

export const budgetOptions = [
  { value: "", label: "Bitte wählen" },
  { value: "< 1000", label: "Unter 1.000 €" },
  { value: "1000-3000", label: "1.000 € - 3.000 €" },
  { value: "3000-5000", label: "3.000 € - 5.000 €" },
  { value: "5000+", label: "Über 5.000 €" },
];

export const timeframeOptions = [
  { value: "", label: "Bitte wählen" },
  { value: "asap", label: "So schnell wie möglich" },
  { value: "1month", label: "Innerhalb eines Monats" },
  { value: "3months", label: "In den nächsten 3 Monaten" },
  { value: "flexible", label: "Flexibel" },
];

