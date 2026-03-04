import { Link } from "wouter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Award,
  Globe,
  Clock,
  Shield,
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

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To simplify the visa application process for foreign students and residents abroad, making international travel accessible and stress-free for everyone.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the world's most trusted visa consultation service, known for exceptional approval rates and outstanding customer experience.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Transparency, integrity, and dedication guide every interaction. We believe in honest advice and genuine care for each applicant's journey.",
  },
];

const milestones = [
  { icon: Award, value: "1,000+", label: "Successful Applications" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Clock, value: "5+", label: "Years of Experience" },
  { icon: Shield, value: "98%", label: "Approval Rate" },
];

export default function About() {
  usePageMeta(
    "About EEZVisa - Trusted Visa Consultation Experts Since 2020",
    "Learn about EEZVisa's mission to simplify visa applications for foreign students and residents abroad. 1,000+ successful applications and 98% approval rate."
  );

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-about-title">
              About EEZVisa
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-about-desc">
              We are a team of experienced visa consultants dedicated to helping foreign students 
              and residents abroad navigate the complex world of visa applications with confidence and ease.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" data-testid="text-story-title">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EEZVisa was founded with a simple belief: applying for a visit visa should not be stressful or confusing. 
                  As former international students ourselves, we experienced firsthand the challenges of navigating visa 
                  applications in foreign countries - the complicated forms, the unclear requirements, and the anxiety of 
                  waiting for approval.
                </p>
                <p>
                  That experience inspired us to create a service that takes the burden off applicants. We built EEZVisa 
                  to be the knowledgeable friend everyone deserves when applying for a visa - someone who understands the 
                  process inside out and genuinely cares about getting you approved.
                </p>
                <p>
                  Today, we have helped over 1,000 applicants from more than 50 countries successfully obtain their visit 
                  visas. Our team of experienced consultants stays up-to-date with the latest visa regulations and embassy 
                  requirements, ensuring that every application we submit meets the highest standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24" data-testid="section-values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <motion.div key={value.title} {...stagger} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full" data-testid={`card-value-${i}`}>
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-milestones">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.label}
                className="flex flex-col items-center gap-3 text-center"
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <milestone.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary" data-testid={`text-milestone-value-${i}`}>{milestone.value}</p>
                <p className="text-sm text-muted-foreground">{milestone.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Let Us Help You With Your Visa
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of satisfied clients who trusted EEZVisa with their visa applications.
            </p>
            <div className="mt-8">
              <Link href="/book-consultation">
                <Button size="lg" variant="secondary" className="gap-2 text-base" data-testid="button-about-cta">
                  Get Started Today
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
