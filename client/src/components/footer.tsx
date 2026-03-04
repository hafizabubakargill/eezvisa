import { Link } from "wouter";
import { Plane, Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Plane className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                EEZ<span className="text-primary">Visa</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional visit visa services for foreign students and residents abroad. Making your travel dreams a reality with expert guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-muted-foreground transition-colors" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="X" className="text-muted-foreground transition-colors" data-testid="link-twitter">
                <SiX className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-services">Our Services</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/book-consultation" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-booking">Book Consultation</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Visa Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Tourist Visa</li>
              <li className="text-sm text-muted-foreground">Business Visa</li>
              <li className="text-sm text-muted-foreground">Family Visit Visa</li>
              <li className="text-sm text-muted-foreground">Transit Visa</li>
              <li className="text-sm text-muted-foreground">Medical Visa</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@eezvisa.com" className="text-sm text-muted-foreground" data-testid="link-email">info@eezvisa.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+447456583652" className="text-sm text-muted-foreground" data-testid="link-phone">+44 7456 583652</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-xs text-muted-foreground" data-testid="text-copyright">
                &copy; {new Date().getFullYear()} EEZVisa. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Powered by{" "}
                <a
                  href="https://rankitglobally.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary transition-colors"
                  data-testid="link-powered-by"
                >
                  Rank It Globally
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-xs text-muted-foreground transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-muted-foreground transition-colors" data-testid="link-footer-terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
