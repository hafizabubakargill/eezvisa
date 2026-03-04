import { Link } from "wouter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Plane,
  Shield,
  Clock,
  Users,
  FileCheck,
  Globe,
  ArrowRight,
  Star,
  CheckCircle2,
  MessageCircle,
  BadgeDollarSign,
  Headphones,
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

const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description: "Visit your dream destinations with our hassle-free tourist visa application service. We handle everything from documentation to submission.",
  },
  {
    icon: Users,
    title: "Family Visit Visa",
    description: "Reunite with your loved ones. We simplify the family visit visa process so you can focus on what matters most - spending time together.",
  },
  {
    icon: Globe,
    title: "Business Visa",
    description: "Expand your professional horizons. Our business visa services ensure smooth travel for meetings, conferences, and business opportunities.",
  },
  {
    icon: FileCheck,
    title: "Transit Visa",
    description: "Seamless transit through any country. We arrange all necessary transit visa documentation for your connecting journeys.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book Free Consultation",
    description: "Schedule a free consultation call with our visa experts. Discuss your travel plans, visa requirements, and get personalized advice.",
  },
  {
    step: "02",
    title: "Document Preparation",
    description: "Our team guides you through every document you need. We review and verify all paperwork to ensure accuracy and completeness.",
  },
  {
    step: "03",
    title: "Application Submission",
    description: "We handle the entire submission process, from form filling to embassy appointment scheduling. Sit back while we do the heavy lifting.",
  },
  {
    step: "04",
    title: "Visa Approval",
    description: "Track your application status in real-time. We follow up with authorities and keep you informed every step of the way.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Student in Germany",
    content: "EEZVisa made my family visit visa process incredibly smooth. The consultation was thorough and my visa was approved within 2 weeks!",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    role: "Professional in UAE",
    content: "I was struggling with my tourist visa application until I found EEZVisa. Their experts handled everything perfectly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Resident in Canada",
    content: "The team at EEZVisa is professional and responsive. They guided me through every step and my business visa was approved without any issues.",
    rating: 5,
  },
];

const stats = [
  { value: "1,000+", label: "Applicants Served" },
  { value: "1,000+", label: "Visas Approved" },
  { value: "50+", label: "Countries Covered" },
  { value: "98%", label: "Success Rate" },
];

const faqs = [
  {
    q: "How does the consultation booking work?",
    a: "You can book a free consultation through our Calendly scheduling system. During the call, our visa experts will assess your situation, explain the requirements, and provide a clear roadmap for your visa application. The consultation fee is fully reimbursed when you proceed with our services.",
  },
  {
    q: "What documents do I need for a visit visa?",
    a: "Required documents vary by country but typically include a valid passport, passport-size photos, proof of financial means, travel itinerary, accommodation details, and an invitation letter (for family visits). Our experts will provide you with a personalized checklist during your consultation.",
  },
  {
    q: "How long does the visa application process take?",
    a: "Processing times vary by country and visa type. Tourist visas typically take 5-15 business days, while family visit visas may take 2-4 weeks. We always aim for the fastest possible processing and keep you updated throughout.",
  },
  {
    q: "Is the consultation fee refundable?",
    a: "Yes! The consultation fee is fully reimbursed when you decide to continue your visa application with us. We believe in earning your trust first, which is why we offer this risk-free consultation experience.",
  },
  {
    q: "Can you help with visa applications from any country?",
    a: "We specialize in helping foreign students and residents in countries worldwide. Whether you're studying in Europe, working in the Middle East, or residing in North America, our experts can guide you through the visa process for your desired destination.",
  },
  {
    q: "What happens if my visa is rejected?",
    a: "While our 98% success rate speaks for itself, in the rare case of a rejection, we provide a free assessment of the rejection reasons and guide you on the reapplication process. We stand by our clients through every step.",
  },
];

export default function Home() {
  usePageMeta(
    "EEZVisa - Expert Visit Visa Services for Students & Residents Abroad",
    "EEZVisa helps foreign students and residents abroad apply for visit visas with ease. Expert guidance, fast processing, and personalized consultation."
  );

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...fadeUp}>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground" data-testid="badge-hero-tag">
                <Globe className="h-3 w-3" />
                Trusted by 1,000+ applicants worldwide
              </span>
            </motion.div>
            <motion.h1
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-testid="text-hero-title"
            >
              Your Visit Visa,{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Made Easy
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-testid="text-hero-description"
            >
              Expert visa application services for foreign students and residents abroad. 
              We handle the paperwork, you plan the trip. Fast processing, high approval rates, 
              and personalized support every step of the way.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/book-consultation">
                <Button size="lg" className="gap-2 text-base" data-testid="button-hero-book">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-base" data-testid="button-hero-services">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                98% Success Rate
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                50+ Countries
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                Free Consultation
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4" data-testid="section-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-3xl font-bold text-primary sm:text-4xl" data-testid={`text-stat-value-${i}`}>{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" id="services" data-testid="section-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-services-title">
              Visa Services Tailored to Your Needs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you are a student, a working professional, or a resident abroad, we have the right visa solution for you.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div key={service.title} {...stagger} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full hover-elevate" data-testid={`card-service-${i}`}>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24" data-testid="section-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-process-title">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple 4-step process designed to get your visa approved quickly and stress-free.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative flex flex-col items-center text-center"
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-0.5 w-[calc(100%-5rem)] bg-border lg:block" />
                )}
                <h3 className="text-lg font-semibold" data-testid={`text-step-title-${i}`}>{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose EEZVisa?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We go above and beyond to make your visa application experience exceptional.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "98% Approval Rate",
                description: "Our meticulous preparation and expert review process ensures one of the highest visa approval rates in the industry.",
              },
              {
                icon: Clock,
                title: "Fast Processing",
                description: "We expedite your application with optimized document preparation and submission, saving you valuable time.",
              },
              {
                icon: BadgeDollarSign,
                title: "Consultation Reimbursed",
                description: "Your consultation fee is fully refunded when you proceed with your visa application through us. Zero risk, all reward.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Our dedicated support team is always available to answer your questions and address your concerns at any hour.",
              },
              {
                icon: MessageCircle,
                title: "Personalized Guidance",
                description: "Every applicant receives tailored advice and a customized document checklist based on their unique situation.",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "We assist with visa applications for 50+ countries, covering all major destinations worldwide.",
              },
            ].map((feature, i) => (
              <motion.div key={feature.title} {...stagger} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Card className="h-full hover-elevate" data-testid={`card-feature-${i}`}>
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-24" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thousands of happy travelers have trusted EEZVisa with their visa applications.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div key={testimonial.name} {...stagger} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full" data-testid={`card-testimonial-${i}`}>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">"{testimonial.content}"</p>
                    <div className="mt-auto pt-2">
                      <p className="font-semibold" data-testid={`text-testimonial-name-${i}`}>{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Got questions? We have answers. Find everything you need to know about our visa services.
            </p>
          </motion.div>
          <motion.div className="mt-10" {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-md border px-4" data-testid={`accordion-faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-16 sm:py-20" data-testid="section-cta">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl" data-testid="text-cta-title">
              Ready to Start Your Visa Application?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Book a free consultation today. Our experts will guide you through every step. 
              The consultation fee is fully reimbursed when you continue with us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/book-consultation">
                <Button size="lg" variant="secondary" className="gap-2 text-base" data-testid="button-cta-book">
                  Book Your Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground text-base" data-testid="button-cta-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
