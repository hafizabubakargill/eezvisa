import { usePageMeta } from "@/hooks/use-page-meta";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | EEZVisa - How We Protect Your Data",
    "Learn how EEZVisa collects, uses, and protects your personal information when you use our visa consultation and application services."
  );

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-privacy-title">
              Privacy Policy
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
            <h2>1. Introduction</h2>
            <p>
              EEZVisa ("we," "our," or "us") is committed to protecting the privacy and security of your personal 
              information. This Privacy Policy explains how we collect, use, store, and protect your data when you 
              use our website (eezvisa.com) and visa application services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <h3>2.1 Personal Information</h3>
            <ul>
              <li>Full name, date of birth, and nationality</li>
              <li>Email address and phone number</li>
              <li>Passport details and travel history</li>
              <li>Current address and residency status</li>
              <li>Employment and educational information</li>
              <li>Financial documentation (as required for visa applications)</li>
            </ul>
            <h3>2.2 Technical Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referral source and navigation patterns</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process your visa application and provide consultation services</li>
              <li>Communicate with you regarding your application status</li>
              <li>Schedule and manage consultation appointments via Calendly</li>
              <li>Send important updates about visa regulations and requirements</li>
              <li>Improve our services and website functionality</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share your data with:
            </p>
            <ul>
              <li>Embassies and consulates as required for visa processing</li>
              <li>Trusted third-party service providers who assist in our operations (e.g., Calendly for scheduling)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Staff training on data protection practices</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              policy, typically for a period of 3 years after the completion of your visa application. After this 
              period, your data will be securely deleted unless retention is required by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data (subject to legal obligations)</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Object to the processing of your data for marketing purposes</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on 
              your device. We use essential cookies for website functionality and analytical cookies to understand 
              how visitors use our site. You can manage cookie preferences through your browser settings.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review their privacy policies before providing 
              any personal information.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed at individuals under the age of 18. We do not knowingly collect personal 
              information from minors. If we become aware that we have collected data from a minor, we will take 
              steps to delete it promptly.
            </p>

            <h2>11. International Data Transfers</h2>
            <p>
              As we serve clients globally, your data may be transferred to and processed in countries other than 
              your country of residence. We ensure that appropriate safeguards are in place to protect your data 
              in accordance with applicable data protection laws.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an 
              updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@eezvisa.com">info@eezvisa.com</a></li>
              <li>Phone: +44 7456 583652</li>
              <li>Website: <a href="https://eezvisa.com">eezvisa.com</a></li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
