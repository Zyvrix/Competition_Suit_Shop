import { useState } from "react";
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
} from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border">
      {/* TOP INFO BAR */}
      <div className="w-full bg-pink-light">
        <div className="mx-auto max-w-[1600px] px-6 py-2 text-center text-sm text-muted-foreground">
          Reach us on Instagram @competitionsuitshop, and our seasoned experts will personally guide you
        </div>
      </div>

      {/* ROW 1: PHONE · LOGO · ICONS */}
      <div className="w-full">
        <div className="mx-auto max-w-[1600px] px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Phone (desktop only) */}
            <div className="hidden md:flex items-center gap-2 text-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 646 755 9535</span>
            </div>

            {/* Mobile menu button */}
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
                className="h-6 sm:h-7 md:h-8 cursor-pointer"
              />
            </a>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <User className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-primary transition-colors hidden sm:block" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: NAV + SEARCH (DESKTOP) */}
      <div className="hidden lg:block w-full border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-4 flex items-center justify-between">
          {/* Navigation */}
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

          
          {/* Search Box */}
<div className="hidden lg:block">
  <AnimatedSearch />
</div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search your Competition Suit"
                className="search-input w-full pr-10"
              />
              <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col gap-3">
              <button className="nav-link flex items-center justify-between py-2">
                Competition Suit <ChevronDown className="w-4 h-4" />
              </button>
              <button className="nav-link flex items-center justify-between py-2">
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

            {/* Mobile Phone */}
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
