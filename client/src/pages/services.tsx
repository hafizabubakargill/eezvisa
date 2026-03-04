import { Link } from "wouter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Users,
  Globe,
  FileCheck,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const allServices = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description: "Planning a vacation or leisure trip? Our tourist visa service ensures you get your visa approved quickly with minimum hassle. We handle documentation for all major tourist destinations worldwide.",
    features: [
      "Personalized document checklist",
      "Application form assistance",
      "Embassy appointment scheduling",
      "Travel insurance guidance",
    ],
  },
  {
    icon: Users,
    title: "Family Visit Visa",
    description: "Reunite with your family members abroad. Whether it's visiting parents, siblings, or extended family, we streamline the entire family visit visa process with expert documentation support.",
    features: [
      "Invitation letter preparation",
      "Sponsorship documentation",
      "Financial proof compilation",
      "Priority processing available",
    ],
  },
  {
    icon: Globe,
    title: "Business Visa",
    description: "Attending conferences, meetings, or exploring business opportunities abroad? Our business visa service covers all requirements for professional travel across 50+ countries.",
    features: [
      "Corporate invitation handling",
      "Business itinerary planning",
      "Multi-entry visa support",
      "Urgent processing options",
    ],
  },
  {
    icon: FileCheck,
    title: "Transit Visa",
    description: "Need to pass through a country on your way to your destination? We arrange all necessary transit visa documentation to ensure smooth connections during your journey.",
    features: [
      "Route optimization advice",
      "Stopover documentation",
      "Airport transit permits",
      "Connection time planning",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Visa",
    description: "Seeking medical treatment abroad? We assist with medical visa applications, coordinating with healthcare facilities and ensuring all medical documentation meets embassy requirements.",
    features: [
      "Hospital appointment letters",
      "Medical records compilation",
      "Treatment plan documentation",
      "Companion visa support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Conference & Event Visa",
    description: "Attending academic conferences, seminars, or international events? We prepare your visa application with all necessary event documentation and institutional support letters.",
    features: [
      "Event registration support",
      "Institutional letter assistance",
      "Accommodation arrangements",
      "Return ticket guidance",
    ],
  },
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Belgium",
  "Austria",
  "Sweden",
  "Denmark",
  "Norway",
  "Finland",
  "Portugal",
  "Ireland",
  "Poland",
  "Czech Republic",
  "Greece",
  "Hungary",
  "UAE",
  "Saudi Arabia",
  "Japan",
  "South Korea",
  "Singapore",
  "New Zealand",
];

export default function Services() {
  usePageMeta(
    "Visa Services - Tourist, Business, Family & Transit Visas | EEZVisa",
    "Comprehensive visa application services for tourists, families, business travelers, and more. Expert documentation and embassy submission support for 50+ countries."
  );

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-services-page-title">
              Our Visa Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-services-page-desc">
              Comprehensive visa application services designed for foreign students and residents abroad. 
              From document preparation to embassy submission, we handle every detail with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-all-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {allServices.map((service, i) => (
              <motion.div key={service.title} {...stagger} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Card className="h-full hover-elevate" data-testid={`card-service-detail-${i}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                        <ul className="mt-4 space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24" data-testid="section-countries">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-countries-title">
              Countries We Cover
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We process visa applications for 50+ countries. Here are some of our most popular destinations.
            </p>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {countries.map((country, i) => (
              <motion.div
                key={country}
                className="flex items-center gap-2 rounded-md border bg-background p-3 text-sm font-medium"
                {...stagger}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                data-testid={`text-country-${i}`}
              >
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                {country}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Not Sure Which Visa You Need?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Book a free consultation with our visa experts. We will assess your situation and 
              recommend the best visa type for your travel plans.
            </p>
            <div className="mt-8">
              <Link href="/book-consultation">
                <Button size="lg" variant="secondary" className="gap-2 text-base" data-testid="button-services-cta">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
