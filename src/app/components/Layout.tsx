import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles, Home, Search, BookOpen, Star, Heart, BookMarked,
  Menu, X, Flower2, Instagram, Twitter, Facebook, Mail
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/analyze", label: "Analyze Work", icon: Search },
  { to: "/learn", label: "Learn Skills", icon: BookOpen },
  { to: "/brand", label: "Build Brand", icon: Star },
  { to: "/support", label: "Support Programs", icon: Heart },
  { to: "/stories", label: "Stories", icon: BookMarked },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
              >
                <Flower2 className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-display text-xl"
                style={{ color: "#2D1B0E", fontWeight: 600 }}
              >
                Craft<span style={{ color: "#C1694F" }}>Bloom</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    location.pathname === link.to
                      ? "bg-terracotta-10 font-medium"
                      : "hover:bg-black/5"
                  }`}
                  style={{
                    color:
                      location.pathname === link.to
                        ? "#C1694F"
                        : "#5C3D2E",
                    backgroundColor:
                      location.pathname === link.to
                        ? "rgba(193,105,79,0.1)"
                        : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/analyze"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)" }}
              >
                <Sparkles className="w-4 h-4" />
                Try AI
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: "#5C3D2E" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden navbar-blur border-t"
              style={{ borderColor: "rgba(193,105,79,0.12)" }}
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                      style={{
                        color: location.pathname === link.to ? "#C1694F" : "#5C3D2E",
                        backgroundColor:
                          location.pathname === link.to
                            ? "rgba(193,105,79,0.08)"
                            : undefined,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page content */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2D1B0E", color: "#F5EFE6" }} className="mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
                >
                  <Flower2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-xl font-semibold text-white">
                  Craft<span style={{ color: "#D4A853" }}>Bloom</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed opacity-75 max-w-xs">
                Empowering artisans, homemakers, and skilled workers to grow their craft and build thriving brands using AI guidance. Your skill is valuable — we help you show it to the world.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4" />
                <span>hello@craftbloom.ai</span>
              </div>
              <p className="text-sm opacity-50 mt-4">
                Built with ❤️ for the <span style={{ color: "#D4A853" }}>Hackathon 2026</span>
              </p>
              <p className="text-sm opacity-50 mt-1">Team CraftBloom</p>
            </div>
          </div>

          <div
            className="mt-12 pt-6 text-sm opacity-40 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            © 2026 CraftBloom. All rights reserved. Empowering artisans with AI.
          </div>
        </div>
      </footer>
    </div>
  );
}
