import { usePageMeta } from "@/hooks/use-page-meta";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Fee Reimbursed",
    description: "The consultation fee is fully refunded when you proceed with your visa application through EEZVisa.",
  },
  {
    icon: Clock,
    title: "30-Minute Session",
    description: "A focused, comprehensive consultation covering your visa requirements, documents needed, and timeline.",
  },
  {
    icon: Shield,
    title: "Expert Advice",
    description: "Speak directly with an experienced visa consultant who specializes in your destination country.",
  },
];

export default function BookConsultation() {
  usePageMeta(
    "Book a Free Visa Consultation | EEZVisa",
    "Schedule a one-on-one consultation with our visa experts. Get personalized guidance on your visa application. Consultation fee reimbursed when you proceed with us."
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-booking-title">
              Book Your Consultation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-booking-desc">
              Schedule a one-on-one session with our visa experts. Get personalized guidance on your 
              visa application, required documents, and the best approach for approval.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              Consultation fee reimbursed when you continue with us
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-16" data-testid="section-benefits">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Card key={benefit.title} className="hover-elevate" data-testid={`card-benefit-${i}`}>
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24" data-testid="section-calendly">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/eezvisa/consultation"
                  style={{ minWidth: "280px", height: "700px" }}
                  data-testid="widget-calendly"
                />
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By booking a consultation, you agree to our terms of service. 
              The consultation fee will be reimbursed when you proceed with your visa application through EEZVisa.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
