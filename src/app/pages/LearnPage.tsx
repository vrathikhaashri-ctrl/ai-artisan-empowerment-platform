import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen, Sparkles, ChevronRight, Play, ExternalLink,
  Check, Clock, Users, Star, ArrowRight, Lightbulb
} from "lucide-react";
import { Link } from "react-router";

const skillOptions = [
  { value: "tailoring", label: "Tailoring & Fashion Design", emoji: "🧵" },
  { value: "embroidery", label: "Embroidery & Textile Art", emoji: "🪡" },
  { value: "makeup", label: "Makeup & Beauty", emoji: "💄" },
  { value: "pottery", label: "Pottery & Ceramics", emoji: "🏺" },
  { value: "jewelry", label: "Jewelry Making", emoji: "💍" },
  { value: "candle", label: "Candle & Soap Making", emoji: "🕯️" },
  { value: "painting", label: "Painting & Art", emoji: "🎨" },
  { value: "baking", label: "Baking & Confectionery", emoji: "🍰" },
];

const identityOptions = [
  { value: "homemaker", label: "I'm a Homemaker", emoji: "🏠" },
  { value: "artisan", label: "I'm an Artisan / Crafter", emoji: "🎭" },
  { value: "student", label: "I'm a Student", emoji: "📚" },
  { value: "professional", label: "I'm a Working Professional", emoji: "💼" },
];

const learningPaths: Record<string, {
  beginner: { title: string; desc: string; duration: string }[];
  intermediate: { title: string; desc: string; duration: string }[];
  advanced: { title: string; desc: string; duration: string }[];
  resources: { title: string; channel: string; duration: string; views: string }[];
}> = {
  tailoring: {
    beginner: [
      { title: "Understanding Fabrics", desc: "Learn about cotton, silk, chiffon, and their best uses.", duration: "1 week" },
      { title: "Basic Hand Stitching", desc: "Master running stitch, backstitch, and whip stitch.", duration: "2 weeks" },
      { title: "Reading Patterns", desc: "Understand sewing patterns, sizes, and symbols.", duration: "1 week" },
    ],
    intermediate: [
      { title: "Machine Stitching Basics", desc: "Operate a sewing machine, set tension, make straight seams.", duration: "2 weeks" },
      { title: "Garment Construction", desc: "Sew your first blouse or salwar — from cutting to finishing.", duration: "3 weeks" },
      { title: "Fitting & Alterations", desc: "Learn to measure, adjust, and perfect a fit.", duration: "2 weeks" },
    ],
    advanced: [
      { title: "Design & Draping", desc: "Create original designs using draping techniques.", duration: "4 weeks" },
      { title: "Bridal & Occasion Wear", desc: "Work with heavy fabrics, zardosi, and embellishments.", duration: "4 weeks" },
      { title: "Launch Your Boutique", desc: "Pricing, marketing, and building your client base.", duration: "Ongoing" },
    ],
    resources: [
      { title: "Learn Tailoring From Scratch", channel: "Stitch With Concepts", duration: "45 min", views: "2.3M" },
      { title: "Blouse Cutting For Beginners", channel: "Tailoring With Usha", duration: "32 min", views: "1.8M" },
      { title: "Salwar Suit Making Tutorial", channel: "Fashion Craft", duration: "58 min", views: "940K" },
    ],
  },
  makeup: {
    beginner: [
      { title: "Skin Types & Prep", desc: "Understand your skin type and build the perfect base routine.", duration: "1 week" },
      { title: "Foundation & Concealer", desc: "Learn shade matching and application techniques.", duration: "2 weeks" },
      { title: "Eye Basics", desc: "Master eyeliner, mascara, and natural eye looks.", duration: "1 week" },
    ],
    intermediate: [
      { title: "Contouring & Highlighting", desc: "Sculpt and enhance facial features with light and shadow.", duration: "2 weeks" },
      { title: "Eye Makeup Artistry", desc: "Smokey eyes, cut crease, and graphic liner looks.", duration: "3 weeks" },
      { title: "Bridal Makeup Basics", desc: "Long-wear techniques and traditional bridal looks.", duration: "3 weeks" },
    ],
    advanced: [
      { title: "Airbrush & HD Makeup", desc: "Professional quality finish for photography and film.", duration: "4 weeks" },
      { title: "Freelance Business Setup", desc: "Build a portfolio, set pricing, and find clients.", duration: "2 weeks" },
      { title: "Social Media & Brand Building", desc: "Grow your beauty brand on Instagram and YouTube.", duration: "Ongoing" },
    ],
    resources: [
      { title: "Makeup for Beginners — Full Guide", channel: "BeautyByMinali", duration: "38 min", views: "3.1M" },
      { title: "Indian Bridal Makeup Tutorial", channel: "Kaushal Beauty", duration: "52 min", views: "2.7M" },
      { title: "Freelance Makeup Artist Tips", channel: "Glamour Decoded", duration: "25 min", views: "680K" },
    ],
  },
  default: {
    beginner: [
      { title: "Foundations of Your Craft", desc: "Learn the core materials, tools, and basic techniques.", duration: "1-2 weeks" },
      { title: "Your First Project", desc: "Complete a simple project from start to finish with guidance.", duration: "2 weeks" },
      { title: "Quality & Consistency", desc: "Understand how to maintain quality and build a practice routine.", duration: "1 week" },
    ],
    intermediate: [
      { title: "Advanced Techniques", desc: "Dive deeper into specialized skills and complex methods.", duration: "3 weeks" },
      { title: "Style Development", desc: "Find your unique style and artistic voice.", duration: "2 weeks" },
      { title: "Creating Collections", desc: "Build a cohesive collection that can be sold or exhibited.", duration: "3 weeks" },
    ],
    advanced: [
      { title: "Market Your Craft", desc: "Photograph, price, and present your work professionally.", duration: "2 weeks" },
      { title: "Build Your Brand", desc: "Create a brand identity, online presence, and customer base.", duration: "4 weeks" },
      { title: "Scale & Grow", desc: "Take custom orders, run workshops, and grow your income.", duration: "Ongoing" },
    ],
    resources: [
      { title: "Getting Started With Your Craft", channel: "Creative Academy", duration: "40 min", views: "1.2M" },
      { title: "Selling Handmade Products Online", channel: "Craft Biz India", duration: "35 min", views: "890K" },
      { title: "Building a Craft Business in 2026", channel: "Artisan Growth", duration: "48 min", views: "560K" },
    ],
  },
};

const levelColors = {
  beginner: { color: "#7C9E87", bg: "rgba(124,158,135,0.1)", label: "Beginner" },
  intermediate: { color: "#D4A853", bg: "rgba(212,168,83,0.1)", label: "Intermediate" },
  advanced: { color: "#C1694F", bg: "rgba(193,105,79,0.1)", label: "Advanced" },
};

export function LearnPage() {
  const [identity, setIdentity] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeLevel, setActiveLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const handleSubmit = () => {
    if (identity && skill) setSubmitted(true);
  };

  const pathData = learningPaths[skill || ""] || learningPaths.default;
  const currentLevel = pathData[activeLevel];

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EBF0EC 0%, #D8E8DC 50%, #E8F2EC 100%)" }}
      >
        <div
          className="absolute top-0 left-0 w-72 h-72 orb opacity-30"
          style={{ background: "radial-gradient(circle, rgba(124,158,135,0.5), transparent)" }}
        />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: "rgba(124,158,135,0.2)", color: "#5A7A65" }}
          >
            <BookOpen className="w-4 h-4" /> Learning Path Generator
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2D1B0E", fontWeight: 700 }}
          >
            Your Personal{" "}
            <span style={{ color: "#7C9E87" }}>Learning Roadmap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "#5A7A65" }}
          >
            Tell us who you are and what you want to learn. We'll create a structured roadmap from Beginner to Advanced, with curated resources just for you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Who are you? */}
              <div className="mb-10">
                <h3
                  className="font-display mb-5 flex items-center gap-2"
                  style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.15rem" }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-white"
                    style={{ backgroundColor: "#7C9E87" }}
                  >
                    1
                  </span>
                  I am a…
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {identityOptions.map((opt) => (
                    <motion.button
                      key={opt.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIdentity(opt.value)}
                      className="p-4 rounded-2xl text-center transition-all"
                      style={
                        identity === opt.value
                          ? { backgroundColor: "#7C9E87", color: "white", border: "2px solid #7C9E87" }
                          : {
                              backgroundColor: "rgba(255,255,255,0.7)",
                              border: "2px solid rgba(124,158,135,0.2)",
                              color: "#5C3D2E",
                            }
                      }
                    >
                      <div className="text-2xl mb-2">{opt.emoji}</div>
                      <div className="text-xs font-medium">{opt.label}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* What skill? */}
              <div className="mb-10">
                <h3
                  className="font-display mb-5 flex items-center gap-2"
                  style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.15rem" }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm text-white"
                    style={{ backgroundColor: "#7C9E87" }}
                  >
                    2
                  </span>
                  I want to learn…
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skillOptions.map((opt) => (
                    <motion.button
                      key={opt.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSkill(opt.value)}
                      className="p-4 rounded-2xl text-center transition-all"
                      style={
                        skill === opt.value
                          ? { backgroundColor: "#C1694F", color: "white", border: "2px solid #C1694F" }
                          : {
                              backgroundColor: "rgba(255,255,255,0.7)",
                              border: "2px solid rgba(193,105,79,0.15)",
                              color: "#5C3D2E",
                            }
                      }
                    >
                      <div className="text-2xl mb-2">{opt.emoji}</div>
                      <div className="text-xs font-medium">{opt.label}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: identity && skill ? 1.03 : 1 }}
                  whileTap={{ scale: identity && skill ? 0.97 : 1 }}
                  onClick={handleSubmit}
                  disabled={!identity || !skill}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white transition-all"
                  style={{
                    background:
                      identity && skill
                        ? "linear-gradient(135deg, #C1694F, #D4856A)"
                        : "rgba(193,105,79,0.2)",
                    color: identity && skill ? "white" : "#A07060",
                    cursor: identity && skill ? "pointer" : "not-allowed",
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Generate My Learning Path
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                {(!identity || !skill) && (
                  <p className="text-sm mt-3" style={{ color: "#8C6B52" }}>
                    Please select both your identity and a skill to continue
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {/* Selection summary */}
              <div
                className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-2xl"
                style={{ backgroundColor: "rgba(124,158,135,0.08)", border: "1px solid rgba(124,158,135,0.2)" }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: "#7C9E87" }} />
                  <span className="text-sm" style={{ color: "#5C3D2E" }}>
                    {identityOptions.find((o) => o.value === identity)?.emoji}{" "}
                    {identityOptions.find((o) => o.value === identity)?.label}
                  </span>
                </div>
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "#8C6B52" }}
                />
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: "#C1694F" }} />
                  <span className="text-sm" style={{ color: "#5C3D2E" }}>
                    {skillOptions.find((o) => o.value === skill)?.emoji}{" "}
                    {skillOptions.find((o) => o.value === skill)?.label}
                  </span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="ml-auto text-xs underline"
                  style={{ color: "#8C6B52" }}
                >
                  Change
                </button>
              </div>

              {/* Level selector */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
                {(["beginner", "intermediate", "advanced"] as const).map((level) => {
                  const lc = levelColors[level];
                  return (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all"
                      style={
                        activeLevel === level
                          ? { backgroundColor: lc.color, color: "white" }
                          : { backgroundColor: lc.bg, color: lc.color, border: `1px solid ${lc.color}33` }
                      }
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeLevel === level ? "white" : lc.color }}
                      />
                      {lc.label}
                    </button>
                  );
                })}
              </div>

              {/* Level flow indicator */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
                {(["beginner", "intermediate", "advanced"] as const).map((level, i) => {
                  const lc = levelColors[level];
                  const isActive = activeLevel === level;
                  return (
                    <>
                      <div
                        key={level}
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: isActive ? lc.bg : "transparent",
                          color: isActive ? lc.color : "#8C6B52",
                          border: isActive ? `1px solid ${lc.color}44` : "none",
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: isActive ? lc.color : "#C8B09A" }}
                        />
                        {lc.label}
                      </div>
                      {i < 2 && <ArrowRight className="w-3 h-3 flex-shrink-0 opacity-30" />}
                    </>
                  );
                })}
              </div>

              {/* Steps timeline */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="relative"
                >
                  <div className="space-y-4">
                    {currentLevel.map((step, i) => {
                      const lc = levelColors[activeLevel];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12 }}
                          className="flex gap-4"
                        >
                          {/* Step indicator */}
                          <div className="flex flex-col items-center">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                              style={{ backgroundColor: lc.color }}
                            >
                              {i + 1}
                            </div>
                            {i < currentLevel.length - 1 && (
                              <div
                                className="w-0.5 flex-1 my-1"
                                style={{ backgroundColor: `${lc.color}33` }}
                              />
                            )}
                          </div>
                          {/* Content */}
                          <div
                            className="flex-1 p-4 rounded-2xl hover-lift mb-4"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.8)",
                              border: `1px solid ${lc.color}22`,
                            }}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-semibold" style={{ color: "#2D1B0E" }}>{step.title}</h4>
                              <span
                                className="flex items-center gap-1 text-xs px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                                style={{ backgroundColor: lc.bg, color: lc.color }}
                              >
                                <Clock className="w-3 h-3" />
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-sm mt-1 leading-relaxed" style={{ color: "#8C6B52" }}>{step.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* AI Tip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-5 rounded-2xl flex items-start gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(193,105,79,0.06), rgba(212,168,83,0.06))",
                  border: "1px solid rgba(193,105,79,0.15)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
                >
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#2D1B0E" }}>AI Mentor Tip</p>
                  <p className="text-sm" style={{ color: "#8C6B52" }}>
                    Consistency is key! Even 30 minutes of daily practice will transform your skill in 90 days. 
                    Join local artisan groups to get feedback and stay motivated. Upload your progress photos to CraftBloom for AI feedback!
                  </p>
                </div>
              </motion.div>

              {/* YouTube resources */}
              <div className="mt-12">
                <h3
                  className="font-display mb-6 flex items-center gap-2"
                  style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  <Play className="w-5 h-5" style={{ color: "#C1694F" }} />
                  Recommended Learning Resources
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {pathData.resources.map((res, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="p-4 rounded-2xl hover-lift cursor-pointer group"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(193,105,79,0.12)",
                      }}
                    >
                      {/* Video thumbnail placeholder */}
                      <div
                        className="rounded-xl mb-3 flex items-center justify-center relative overflow-hidden"
                        style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #2D1B0E, #4A2C15)" }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                        >
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs text-white px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                          {res.duration}
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold mb-1" style={{ color: "#2D1B0E" }}>{res.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-xs" style={{ color: "#8C6B52" }}>{res.channel}</p>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#8C6B52" }}>
                          <Users className="w-3 h-3" /> {res.views}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs" style={{ color: "#C1694F" }}>
                        <ExternalLink className="w-3 h-3" /> Watch on YouTube
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next step CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 text-center"
              >
                <p className="text-sm mb-4" style={{ color: "#8C6B52" }}>Ready to start building your brand alongside your learning?</p>
                <Link
                  to="/brand"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)" }}
                >
                  Build My Brand <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
