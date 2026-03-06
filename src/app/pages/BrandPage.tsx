import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star, Sparkles, Copy, Check, RefreshCw, Palette,
  Tag, MessageSquare, ShoppingBag, ArrowRight, ChevronRight,
  Image as ImageIcon, Package, Instagram
} from "lucide-react";

const craftTypes = [
  { value: "textile", label: "Textiles & Weaving", emoji: "🧶" },
  { value: "fashion", label: "Fashion & Tailoring", emoji: "👗" },
  { value: "jewelry", label: "Jewelry & Accessories", emoji: "💍" },
  { value: "pottery", label: "Pottery & Ceramics", emoji: "🏺" },
  { value: "beauty", label: "Beauty & Wellness", emoji: "✨" },
  { value: "food", label: "Food & Baking", emoji: "🍰" },
  { value: "art", label: "Painting & Art", emoji: "🎨" },
  { value: "candle", label: "Candle & Soap", emoji: "🕯️" },
];

const styleOptions = [
  { value: "traditional", label: "Traditional & Heritage" },
  { value: "modern", label: "Modern & Minimalist" },
  { value: "boho", label: "Bohemian & Free-spirited" },
  { value: "luxury", label: "Luxury & Premium" },
  { value: "eco", label: "Eco & Sustainable" },
];

const brandSuggestions: Record<string, Record<string, { name: string; tagline: string; palette: string[]; paletteNames: string[]; tips: string[] }[]>> = {
  textile: {
    traditional: [
      {
        name: "Kesari Threads",
        tagline: "Woven with heritage, worn with pride",
        palette: ["#C1694F", "#D4A853", "#F5EFE6", "#2D1B0E"],
        paletteNames: ["Terracotta", "Gold", "Cream", "Walnut"],
        tips: ["Use antique props in photography", "Package in eco kraft paper with wax seal", "Tell the story of your weaving tradition"],
      },
      {
        name: "Meera's Loom",
        tagline: "Every thread tells a story",
        palette: ["#8B6FA0", "#D4A853", "#F5EFE6", "#3A2250"],
        paletteNames: ["Mauve", "Saffron", "Cream", "Plum"],
        tips: ["Show the hands behind the craft", "Use regional patterns as your identity", "Collaborate with local artisan groups"],
      },
    ],
    modern: [
      {
        name: "Weave & Co.",
        tagline: "Timeless craft, modern soul",
        palette: ["#2D1B0E", "#7C9E87", "#F5EFE6", "#D4A853"],
        paletteNames: ["Espresso", "Sage", "Oat", "Amber"],
        tips: ["Clean white background photography", "Minimal packaging with bold typography", "Focus on texture close-up shots"],
      },
    ],
  },
  fashion: {
    traditional: [
      {
        name: "Silkroots Atelier",
        tagline: "Tradition stitched with style",
        palette: ["#C1694F", "#8B6FA0", "#FDF6EC", "#2D1B0E"],
        paletteNames: ["Rust", "Lavender", "Ivory", "Cocoa"],
        tips: ["Shoot in natural light with ethnic backgrounds", "Offer customization as a USP", "Partner with local event planners"],
      },
      {
        name: "Elegant Threads Studio",
        tagline: "Where culture meets couture",
        palette: ["#D4A853", "#C1694F", "#2D1B0E", "#F5EFE6"],
        paletteNames: ["Gold", "Terracotta", "Dark Brown", "Cream"],
        tips: ["Create a signature stitch or pattern", "Offer bridal packages", "Build a lookbook each season"],
      },
    ],
    modern: [
      {
        name: "Threadform",
        tagline: "Wear less. Mean more.",
        palette: ["#2D1B0E", "#F5EFE6", "#7C9E87", "#C1694F"],
        paletteNames: ["Ebony", "Linen", "Sage", "Terra"],
        tips: ["Capsule wardrobe messaging", "Sustainable fabric sourcing story", "Flat-lay product photography"],
      },
    ],
  },
  beauty: {
    boho: [
      {
        name: "Bloom & Glow Studio",
        tagline: "Beauty that blooms from within",
        palette: ["#D4A853", "#C1694F", "#A8C5B0", "#FDF6EC"],
        paletteNames: ["Honey", "Rose Rust", "Mint", "Pearl"],
        tips: ["Before & after transformations are powerful", "Behind-the-scenes reels perform well", "Partner with brides and events"],
      },
    ],
    luxury: [
      {
        name: "La Belle Artiste",
        tagline: "Luxury beauty, artisan touch",
        palette: ["#2D1B0E", "#D4A853", "#F5EFE6", "#8B6FA0"],
        paletteNames: ["Noir", "Gold", "Champagne", "Amethyst"],
        tips: ["Premium packaging creates premium perception", "Video testimonials from clients", "Build a signature look portfolio"],
      },
    ],
  },
};

const defaultBrands = [
  {
    name: "Craft & Bloom Studio",
    tagline: "Handmade with heart, sold with purpose",
    palette: ["#C1694F", "#D4A853", "#7C9E87", "#F5EFE6"],
    paletteNames: ["Terracotta", "Gold", "Sage", "Cream"],
    tips: ["Tell your personal origin story", "Use your name as a brand asset", "Show your process, not just the product"],
  },
  {
    name: "Artisana",
    tagline: "Real craft. Real people. Real value.",
    palette: ["#2D1B0E", "#C1694F", "#D4A853", "#FDF6EC"],
    paletteNames: ["Walnut", "Rust", "Amber", "Ivory"],
    tips: ["Community is your biggest marketing channel", "Create a signature product hero", "Consistency in posting builds trust"],
  },
];

type FormStep = "craft" | "style" | "name" | "result";

export function BrandPage() {
  const [step, setStep] = useState<FormStep>("craft");
  const [craft, setCraft] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [artisanName, setArtisanName] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);

  const getBrands = () => {
    const craftBrands = brandSuggestions[craft || ""];
    if (craftBrands) {
      const styleBrands = craftBrands[style || "traditional"] || craftBrands[Object.keys(craftBrands)[0]];
      if (styleBrands) return styleBrands;
    }
    return defaultBrands;
  };

  const brands = getBrands();
  const selectedBrand = brands[selectedBrandIndex % brands.length];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const steps: FormStep[] = ["craft", "style", "name", "result"];

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0EAD8 0%, #E8DCC8 50%, #F5E8D8 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 orb opacity-25"
          style={{ background: "radial-gradient(circle, rgba(212,168,83,0.6), transparent)" }}
        />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: "rgba(212,168,83,0.2)", color: "#A07830" }}
          >
            <Star className="w-4 h-4" /> Brand Builder
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2D1B0E", fontWeight: 700 }}
          >
            Build Your <span style={{ color: "#D4A853" }}>Brand Identity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "#7A5C30" }}
          >
            Tell us about your craft and style, and our AI will suggest a beautiful brand name, tagline, color palette, and product presentation tips.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="h-1.5 flex-1 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    steps.indexOf(step) >= i ? "#D4A853" : "rgba(212,168,83,0.2)",
                }}
              />
              {i < steps.length - 1 && (
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-500"
                  style={{
                    backgroundColor:
                      steps.indexOf(step) > i ? "#D4A853" : "rgba(212,168,83,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Craft type */}
          {step === "craft" && (
            <motion.div
              key="craft"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2
                className="font-display mb-2"
                style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
              >
                What's your craft?
              </h2>
              <p className="text-sm mb-6" style={{ color: "#8C6B52" }}>
                Select the type of product or service you create
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {craftTypes.map((c) => (
                  <motion.button
                    key={c.value}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCraft(c.value)}
                    className="p-4 rounded-2xl text-center transition-all"
                    style={
                      craft === c.value
                        ? { background: "linear-gradient(135deg, #D4A853, #C1694F)", color: "white", border: "2px solid transparent" }
                        : {
                            backgroundColor: "rgba(255,255,255,0.75)",
                            border: "2px solid rgba(212,168,83,0.2)",
                            color: "#5C3D2E",
                          }
                    }
                  >
                    <div className="text-2xl mb-2">{c.emoji}</div>
                    <div className="text-xs font-medium">{c.label}</div>
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => craft && setStep("style")}
                disabled={!craft}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm"
                style={{
                  background: craft ? "linear-gradient(135deg, #D4A853, #C1694F)" : "rgba(212,168,83,0.2)",
                  color: craft ? "white" : "#A07830",
                  cursor: craft ? "pointer" : "not-allowed",
                }}
              >
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Style */}
          {step === "style" && (
            <motion.div
              key="style"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2
                className="font-display mb-2"
                style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
              >
                What's your brand style?
              </h2>
              <p className="text-sm mb-6" style={{ color: "#8C6B52" }}>
                Choose the personality and aesthetic of your brand
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {styleOptions.map((s) => (
                  <motion.button
                    key={s.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStyle(s.value)}
                    className="p-4 rounded-2xl text-left transition-all"
                    style={
                      style === s.value
                        ? { background: "linear-gradient(135deg, #D4A853, #C1694F)", color: "white", border: "2px solid transparent" }
                        : {
                            backgroundColor: "rgba(255,255,255,0.75)",
                            border: "2px solid rgba(212,168,83,0.2)",
                            color: "#5C3D2E",
                          }
                    }
                  >
                    <div className="text-sm font-medium">{s.label}</div>
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("craft")}
                  className="px-5 py-3 rounded-xl text-sm"
                  style={{ border: "1.5px solid rgba(212,168,83,0.3)", color: "#8C6B52" }}
                >
                  Back
                </button>
                <button
                  onClick={() => style && setStep("name")}
                  disabled={!style}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm"
                  style={{
                    background: style ? "linear-gradient(135deg, #D4A853, #C1694F)" : "rgba(212,168,83,0.2)",
                    color: style ? "white" : "#A07830",
                    cursor: style ? "pointer" : "not-allowed",
                  }}
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Name */}
          {step === "name" && (
            <motion.div
              key="name"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2
                className="font-display mb-2"
                style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
              >
                What's your name?
              </h2>
              <p className="text-sm mb-6" style={{ color: "#8C6B52" }}>
                Optional: We can incorporate your name into brand suggestions
              </p>
              <input
                type="text"
                placeholder="e.g. Priya, Rekha, Fatima…"
                value={artisanName}
                onChange={(e) => setArtisanName(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl text-sm mb-8 outline-none transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  border: "2px solid rgba(212,168,83,0.25)",
                  color: "#2D1B0E",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#D4A853")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.25)")}
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("style")}
                  className="px-5 py-3 rounded-xl text-sm"
                  style={{ border: "1.5px solid rgba(212,168,83,0.3)", color: "#8C6B52" }}
                >
                  Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep("result")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #D4A853, #C1694F)" }}
                >
                  <Sparkles className="w-4 h-4" />
                  Generate My Brand
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Results */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2
                    className="font-display"
                    style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.2rem" }}
                  >
                    Your Brand Suggestions
                  </h2>
                  <p className="text-sm" style={{ color: "#8C6B52" }}>{brands.length} brand concept{brands.length > 1 ? "s" : ""} generated</p>
                </div>
                <button
                  onClick={() => setStep("craft")}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl"
                  style={{ border: "1.5px solid rgba(212,168,83,0.3)", color: "#A07830" }}
                >
                  <RefreshCw className="w-4 h-4" /> Regenerate
                </button>
              </div>

              {/* Brand card selector */}
              {brands.length > 1 && (
                <div className="flex gap-2 mb-6">
                  {brands.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedBrandIndex(i)}
                      className="flex-1 py-2 rounded-xl text-xs font-medium transition-all"
                      style={
                        selectedBrandIndex === i
                          ? { background: "linear-gradient(135deg, #D4A853, #C1694F)", color: "white" }
                          : { backgroundColor: "rgba(212,168,83,0.1)", color: "#A07830" }
                      }
                    >
                      Concept {i + 1}
                    </button>
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBrandIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main brand card */}
                  <div
                    className="rounded-3xl overflow-hidden shadow-xl mb-6"
                    style={{ border: "1px solid rgba(212,168,83,0.2)" }}
                  >
                    {/* Brand header */}
                    <div
                      className="p-8 text-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${selectedBrand.palette[0]}, ${selectedBrand.palette[1]})`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="350" cy="50" r="120" fill="white" />
                          <circle cx="50" cy="180" r="100" fill="white" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-4" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}>
                          <Sparkles className="w-3 h-3" /> AI Generated Brand
                        </div>
                        <h3
                          className="font-display text-white mb-2"
                          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}
                        >
                          {selectedBrand.name}
                        </h3>
                        <p
                          className="font-lora italic text-white/85"
                          style={{ fontSize: "1rem" }}
                        >
                          "{selectedBrand.tagline}"
                        </p>
                        <div className="flex gap-2 justify-center mt-3">
                          <button
                            onClick={() => handleCopy(selectedBrand.name, "name")}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition-all"
                            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                          >
                            {copied === "name" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            Copy Name
                          </button>
                          <button
                            onClick={() => handleCopy(selectedBrand.tagline, "tagline")}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition-all"
                            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                          >
                            {copied === "tagline" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            Copy Tagline
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Color palette */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Palette className="w-4 h-4" style={{ color: "#D4A853" }} />
                            <span className="text-sm font-semibold" style={{ color: "#2D1B0E" }}>Your Color Palette</span>
                          </div>
                          <div className="flex gap-2">
                            {selectedBrand.palette.map((color, i) => (
                              <div key={i} className="flex-1">
                                <div
                                  className="rounded-xl mb-1"
                                  style={{ backgroundColor: color, aspectRatio: "1" }}
                                />
                                <p className="text-xs text-center" style={{ color: "#8C6B52" }}>
                                  {selectedBrand.paletteNames[i]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tagline */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Tag className="w-4 h-4" style={{ color: "#C1694F" }} />
                            <span className="text-sm font-semibold" style={{ color: "#2D1B0E" }}>Brand Voice</span>
                          </div>
                          <div
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: "rgba(212,168,83,0.08)", border: "1px solid rgba(212,168,83,0.2)" }}
                          >
                            <p className="font-lora italic text-sm" style={{ color: "#5C3D2E" }}>
                              "{selectedBrand.tagline}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Presentation tips */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {selectedBrand.tips.map((tip, i) => {
                      const icons = [ImageIcon, Package, Instagram];
                      const Icon = icons[i % icons.length];
                      const colors = ["#C1694F", "#D4A853", "#7C9E87"];
                      const bgs = ["rgba(193,105,79,0.1)", "rgba(212,168,83,0.1)", "rgba(124,158,135,0.1)"];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="p-4 rounded-2xl hover-lift"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.8)",
                            border: "1px solid rgba(212,168,83,0.12)",
                          }}
                        >
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                            style={{ backgroundColor: bgs[i % bgs.length] }}
                          >
                            <Icon className="w-4 h-4" style={{ color: colors[i % colors.length] }} />
                          </div>
                          <p className="text-xs leading-relaxed" style={{ color: "#5C3D2E" }}>{tip}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Social bio suggestion */}
                  <div
                    className="p-5 rounded-2xl mb-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "1px solid rgba(193,105,79,0.12)" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" style={{ color: "#C1694F" }} />
                        <span className="text-sm font-semibold" style={{ color: "#2D1B0E" }}>Suggested Instagram Bio</span>
                      </div>
                      <button
                        onClick={() => handleCopy(`✨ ${selectedBrand.name} | ${selectedBrand.tagline}\n🎨 Handcrafted with love\n📍 India | Shipping Worldwide\n👇 Shop below`, "bio")}
                        className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: "rgba(193,105,79,0.1)", color: "#C1694F" }}
                      >
                        {copied === "bio" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        Copy
                      </button>
                    </div>
                    <div
                      className="p-3 rounded-xl font-mono text-xs"
                      style={{ backgroundColor: "#F5EFE6", color: "#5C3D2E", lineHeight: 1.8 }}
                    >
                      ✨ {selectedBrand.name} | {selectedBrand.tagline}<br />
                      🎨 Handcrafted with love<br />
                      📍 India | Shipping Worldwide<br />
                      👇 Shop below
                    </div>
                  </div>

                  {/* Next steps */}
                  <div
                    className="p-5 rounded-2xl text-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,168,83,0.08), rgba(193,105,79,0.08))",
                      border: "1px solid rgba(212,168,83,0.15)",
                    }}
                  >
                    <p className="text-sm mb-4" style={{ color: "#5C3D2E" }}>
                      Ready to get training and government support for your new brand?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="/support"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm"
                        style={{ background: "linear-gradient(135deg, #D4A853, #C1694F)" }}
                      >
                        Find Support Programs <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/analyze"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm"
                        style={{ border: "1.5px solid rgba(212,168,83,0.3)", color: "#A07830" }}
                      >
                        Analyze My Work
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inspiration cards (always visible) */}
        {step !== "result" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h3
              className="font-display mb-6 text-center"
              style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Brand Inspiration Examples
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {defaultBrands.map((brand, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-md hover-lift"
                >
                  <div
                    className="p-6 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${brand.palette[0]}, ${brand.palette[1]})`,
                    }}
                  >
                    <h4
                      className="font-display text-white mb-1"
                      style={{ fontWeight: 600, fontSize: "1.1rem" }}
                    >
                      {brand.name}
                    </h4>
                    <p className="font-lora italic text-white/80 text-sm">"{brand.tagline}"</p>
                    <div className="flex gap-2 justify-center mt-3">
                      {brand.palette.map((color, j) => (
                        <div
                          key={j}
                          className="w-6 h-6 rounded-full border-2 border-white/30"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
                    <p className="text-xs text-center" style={{ color: "#8C6B52" }}>Example brand concept</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
