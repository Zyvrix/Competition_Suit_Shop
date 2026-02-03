import { useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedSearch from "@/components/AnimatedSearch";
import {
  Phone,
  User,
  Heart,
  ShoppingBag,
  Search,
  ChevronDown,
  Menu,
  X,
  Headset,
  Truck,
  ShieldCheck,
  Star,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="w-full bg-background border-b border-border font-montserrat">
      {/* TOP INFO BAR */}
      <div className="w-full bg-pink-light">
        <div className="mx-auto max-w-[1600px] px-6 py-2 text-center text-sm text-muted-foreground">
          Reach us on Instagram @competitionsuitshop, and our seasoned experts
          will personally guide you
        </div>
      </div>

      {/* ROW 1: PHONE · LOGO · ICONS */}
      <div className="w-full">
        <div className="mx-auto max-w-[1600px] px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Phone (desktop) */}
            <div className="hidden md:flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 646 755 9535</span>
            </div>

            {/* Mobile menu */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <a href="/" className="flex justify-center">
              <img
                src={logo}
                alt="CompetitionSuitShop"
                className="h-6 sm:h-7 md:h-8"
              />
            </a>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <User className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-primary hidden sm:block" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 CART PAGE ONLY – INFO STRIP (FIGMA MATCH) */}
      {isCartPage && (
        <div className="hidden lg:block w-full border-t border-border font-montserrat">
          <div className="mx-auto max-w-[1600px] px-6 py-4 grid grid-cols-4 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Headset className="w-4 h-4 text-foreground" />
              <div>
                <p className="font-medium text-foreground">Customer Support 24/7</p>
                <p className="text-xs">Highest rated customer service</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-foreground" />
              <div>
                <p className="font-medium text-foreground">Free Shipping</p>
                <p className="text-xs">Free shipping worldwide!</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-foreground" />
              <div>
                <p className="font-medium text-foreground">Secured Payments</p>
                <p className="text-xs">100% secured payments</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-foreground" />
              <div>
                <p className="font-medium text-foreground">
                  Athletes Love Our Suits
                </p>
                <p className="text-xs">Experience our 5 stars service</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ROW 2: NAV + SEARCH (DESKTOP) */}
      <div className="hidden lg:block w-full border-t border-border ">
        <div className="mx-auto max-w-[1600px] px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <button className="nav-link flex items-center gap-1">
              Competition Suit <ChevronDown className="w-4 h-4" />
            </button>
            <button className="nav-link flex items-center gap-1">
              Style & Measurement Guide <ChevronDown className="w-4 h-4" />
            </button>
            <button className="nav-link">Buy now, Design later</button>
            <button className="nav-link">Schedule a Consult</button>
            <button className="nav-link">Blog</button>
          </nav>

          <AnimatedSearch />
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your Competition Suit"
                className="search-input w-full pr-10"
              />
              <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            <nav className="flex flex-col gap-3">
              <button className="nav-link flex justify-between py-2">
                Competition Suit <ChevronDown className="w-4 h-4" />
              </button>
              <button className="nav-link flex justify-between py-2">
                Style & Measurement Guide <ChevronDown className="w-4 h-4" />
              </button>
              <button className="nav-link py-2 text-left">
                Buy now, Design later
              </button>
              <button className="nav-link py-2 text-left">
                Schedule a Consult
              </button>
              <button className="nav-link py-2 text-left">Blog</button>
            </nav>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 646 755 9535</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
