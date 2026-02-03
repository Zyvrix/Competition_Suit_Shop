import { Instagram, Youtube, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const companyLinks = [
  "Home", "Blogs", "About Us", "Best Time to Order", "Reviews & Testimonials"
];

const productLinks = [
  "Bikini Top Style", "Bikini Bottom Style", "Figuresuit Top Style", "Figuresuit Bottom Style"
];

const resourceLinks = [
  "My Account", "Custom Competition Suit", "NPC Bikini Competition Suits", "Gift Cards"
];

const resourceLinks2 = [
  "Measurement Guide", "Payment Plan", "Why choose us", "Fabrics"
];

const helpLinks = [
  "Contact Us", "Schedule a Consult", "Cancellation Policy", "Privacy Policy"
];

const helpLinks2 = [
  "FAQs", "Returns and Remake", "Refund Policy", "Payment & Delivery"
];

const helpLinks3 = [
  "Terms & Conditions"
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container-main px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Contact */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3">
            <img src={logo} alt="CompetitionSuitShop" className="h-6 sm:h-7 mb-4 sm:mb-6" />

            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="flex items-center gap-2 sm:gap-3 footer-link text-xs sm:text-sm">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                @competitionsuitshop
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 footer-link text-xs sm:text-sm">
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                Competition Suit Shop
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 footer-link text-xs sm:text-sm break-all">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                info@competitionsuitshop.com
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 footer-link text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                +1 646 755 9535
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="footer-heading text-sm sm:text-base mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <ul className="space-y-1.5 sm:space-y-2 mt-0 lg:mt-8">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="footer-heading text-sm sm:text-base mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources 2 */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <ul className="space-y-1.5 sm:space-y-2 mt-0 lg:mt-8">
              {resourceLinks2.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Help Center */}
        <div className="mb-8 sm:mb-12">
          <h3 className="footer-heading text-sm sm:text-base mb-3 sm:mb-4">Help Center</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ul className="space-y-1.5 sm:space-y-2">
              {helpLinks.slice(0, 2).map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5 sm:space-y-2">
              {helpLinks2.slice(0, 2).map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5 sm:space-y-2">
              {helpLinks.slice(2).map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5 sm:space-y-2">
              {helpLinks2.slice(2).map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-2">
            {helpLinks3.map((link) => (
              <li key={link}>
                <a href="#" className="footer-link text-xs sm:text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-border">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground order-3 sm:order-1">
            © 2025 Competition Suit Shop
          </p>

          

          {/* Payment Icons */}
          <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-3 flex-wrap justify-center">
            <span className="text-xs sm:text-sm font-bold text-foreground">VISA</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">mastercard</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">AMEX</span>
            <span className="text-xs sm:text-sm font-bold text-foreground hidden sm:inline">discover</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
