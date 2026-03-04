import { usePageMeta } from "@/hooks/use-page-meta";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  nationality: z.string().min(2, "Please enter your nationality"),
  destinationCountry: z.string().min(1, "Please select a destination country"),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@eezvisa.com",
    href: "mailto:info@eezvisa.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+44 7456 583652",
    href: "tel:+447456583652",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Available Worldwide",
    href: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri, 9AM - 5PM",
    href: null,
  },
];

const destinationCountries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "UAE",
  "Saudi Arabia",
  "Japan",
  "South Korea",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Singapore",
  "New Zealand",
  "Other",
];

const visaTypes = [
  "Tourist Visa",
  "Family Visit Visa",
  "Business Visa",
  "Transit Visa",
  "Medical Visa",
  "Conference & Event Visa",
  "Other",
];

export default function Contact() {
  usePageMeta(
    "Contact Us - Get Help With Your Visa Application | EEZVisa",
    "Have questions about your visa application? Contact EEZVisa for personalized guidance. We respond within 24 hours."
  );

  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      nationality: "",
      destinationCountry: "",
      visaType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await apiRequest("POST", "/api/inquiries", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for reaching out. Our team will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormData) {
    mutation.mutate(data);
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-contact-title">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-desc">
              Have questions about your visa application? Fill out the form below and our team 
              will get back to you within 24 hours with personalized guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" data-testid="section-contact-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div {...fadeUp}>
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-xl font-semibold" data-testid="text-form-title">Send Us an Inquiry</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill in your details and we will provide a free initial assessment.
                    </p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} data-testid="input-full-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 234 567 890" {...field} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="nationality"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nationality</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Indian, Nigerian" {...field} data-testid="input-nationality" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="destinationCountry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Destination Country</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-destination">
                                      <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {destinationCountries.map((country) => (
                                      <SelectItem key={country} value={country}>
                                        {country}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="visaType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Visa Type</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-visa-type">
                                      <SelectValue placeholder="Select visa type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {visaTypes.map((type) => (
                                      <SelectItem key={type} value={type}>
                                        {type}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Message (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us more about your travel plans, timeline, or any specific concerns..."
                                  className="min-h-[100px] resize-none"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full gap-2 sm:w-auto"
                          disabled={mutation.isPending}
                          data-testid="button-submit-inquiry"
                        >
                          {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                          {!mutation.isPending && <Send className="h-4 w-4" />}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div key={info.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Card className="hover-elevate" data-testid={`card-contact-info-${i}`}>
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{info.title}</h3>
                        {info.href ? (
                          <a href={info.href} className="mt-0.5 text-sm text-muted-foreground">
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.4 }}>
                <Card data-testid="card-response-time">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm">Quick Response Promise</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      We respond to all inquiries within 24 hours. For urgent visa matters, 
                      call us directly or book an instant consultation through our scheduling system.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
