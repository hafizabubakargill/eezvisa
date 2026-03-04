import { usePageMeta } from "@/hooks/use-page-meta";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function TermsOfService() {
  usePageMeta(
    "Terms of Service | EEZVisa - Visit Visa Application Services",
    "Read EEZVisa's terms of service governing the use of our visa consultation and application services for foreign students and residents abroad."
  );

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-tos-title">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: March 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div className="prose prose-sm max-w-none dark:prose-invert" {...fadeUp}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the EEZVisa website (eezvisa.com) and its services, you agree to be bound by these 
              Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              EEZVisa provides visa consultation and application assistance services for foreign students and residents 
              abroad seeking visit visas. Our services include but are not limited to:
            </p>
            <ul>
              <li>Visa consultation and eligibility assessment</li>
              <li>Document preparation and review</li>
              <li>Application form filling assistance</li>
              <li>Embassy appointment scheduling support</li>
              <li>Application status tracking</li>
            </ul>
            <p>
              We act as consultants and facilitators. We do not guarantee visa approval, as the final decision rests 
              with the respective embassy or consulate.
            </p>

            <h2>3. Consultation Booking and Fees</h2>
            <p>
              Consultation sessions are booked through our integrated Calendly scheduling system. The consultation fee 
              is fully reimbursable when you proceed with your visa application through EEZVisa. Reimbursement will be 
              applied as a credit toward the total service fee.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, complete, and up-to-date personal information</li>
              <li>Submit genuine and authentic documents</li>
              <li>Respond promptly to requests for additional information or documentation</li>
              <li>Inform us of any changes to your circumstances that may affect your application</li>
              <li>Not misrepresent your identity, nationality, or immigration history</li>
            </ul>

            <h2>5. Payment and Refund Policy</h2>
            <p>
              Service fees are communicated during the consultation and must be paid in full before we begin processing 
              your application. In the event of a visa rejection that is not due to incomplete or inaccurate information 
              provided by the applicant, we offer a free reassessment and guidance for reapplication.
            </p>
            <p>
              Refunds for service fees (excluding the consultation fee) may be considered on a case-by-case basis if 
              requested before application submission. Once submitted, service fees are non-refundable.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              EEZVisa shall not be held liable for visa rejections, delays in processing by embassies or consulates, 
              changes in immigration laws or policies, or any consequential damages arising from the use of our services. 
              Our liability is limited to the service fees paid by the client.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              We treat all personal information and documents shared with us with the highest level of confidentiality. 
              Your data will only be used for the purpose of processing your visa application and will not be shared 
              with unauthorized third parties.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on the EEZVisa website, including text, graphics, logos, and software, is the property of 
              EEZVisa and is protected by applicable intellectual property laws. You may not reproduce, distribute, or 
              create derivative works without our prior written consent.
            </p>

            <h2>9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend services to any client who violates these terms, provides 
              fraudulent information, or engages in behavior that is harmful to our business or other clients. In such 
              cases, no refund will be provided.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom. 
              Any disputes arising from these terms shall be resolved through good-faith negotiation or, if necessary, 
              through arbitration.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              EEZVisa reserves the right to update these Terms of Service at any time. Changes will be posted on this 
              page with an updated revision date. Continued use of our services after changes constitutes acceptance of 
              the revised terms.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:info@eezvisa.com">info@eezvisa.com</a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
