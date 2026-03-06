import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sparkles, Brain, TrendingUp, Tag, BookOpen, Shield,
  ArrowRight, Star, Quote, Upload, ChevronRight, Flower2,
  Zap, Users, Award, Heart
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Skill Mentor",
    desc: "Get personalized guidance from an AI that understands your craft. Ask questions, get feedback, and improve daily.",
    color: "#C1694F",
    bg: "rgba(193,105,79,0.1)",
    link: "/analyze",
  },
  {
    icon: TrendingUp,
    title: "Design Trend Analyzer",
    desc: "Upload your work and discover what's trending in your market. Stay ahead with real-time style insights.",
    color: "#D4A853",
    bg: "rgba(212,168,83,0.1)",
    link: "/analyze",
  },
  {
    icon: Tag,
    title: "Business Branding",
    desc: "Create a brand identity that tells your story — from name to tagline to product presentation.",
    color: "#7C9E87",
    bg: "rgba(124,158,135,0.1)",
    link: "/brand",
  },
  {
    icon: BookOpen,
    title: "Learning Path Generator",
    desc: "Get a step-by-step roadmap from Beginner to Expert, tailored specifically to your skill and goals.",
    color: "#8B6FA0",
    bg: "rgba(139,111,160,0.1)",
    link: "/learn",
  },
  {
    icon: Shield,
    title: "Government Support Finder",
    desc: "Discover grants, subsidies, and programs designed to help artisans and homemakers grow their business.",
    color: "#5A7A65",
    bg: "rgba(90,122,101,0.1)",
    link: "/support",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    skill: "Hand Embroidery Artist",
    location: "Jaipur, Rajasthan",
    story: "I used CraftBloom to understand what modern buyers look for. Within 3 months I started selling my dupattas online!",
    avatar: "P",
    color: "#C1694F",
    rating: 5,
  },
  {
    name: "Rekha Menon",
    skill: "Tailor & Designer",
    location: "Kochi, Kerala",
    story: "The brand builder helped me name my boutique 'Silk & Soul'. Now I have 200+ happy customers.",
    avatar: "R",
    color: "#7C9E87",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    skill: "Henna Artist",
    location: "Lucknow, UP",
    story: "The AI analyzed my portfolio and suggested trending patterns. My Instagram following grew 3x!",
    avatar: "F",
    color: "#D4A853",
    rating: 5,
  },
];

const stats = [
  { value: "10,000+", label: "Artisans Empowered", icon: Users },
  { value: "95%", label: "Satisfaction Rate", icon: Star },
  { value: "500+", label: "Skills Covered", icon: Award },
  { value: "50+", label: "Support Programs", icon: Heart },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(145deg, #FDF6EC 0%, #F5EFE6 40%, #EDE8E0 70%, #F0E4D8 100%)" }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-20 right-8 sm:right-20 w-64 h-64 orb"
          style={{ background: "radial-gradient(circle, rgba(193,105,79,0.35), transparent)" }}
        />
        <div
          className="absolute bottom-20 left-8 sm:left-20 w-80 h-80 orb"
          style={{ background: "radial-gradient(circle, rgba(212,168,83,0.3), transparent)", animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 orb"
          style={{ background: "radial-gradient(circle, rgba(124,158,135,0.2), transparent)", animationDelay: "5s" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
                style={{ backgroundColor: "rgba(193,105,79,0.12)", color: "#C1694F" }}
              >
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered for Artisans</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display mb-4"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: 1.2,
                  color: "#2D1B0E",
                  fontWeight: 700,
                }}
              >
                Turn Your Skill Into a{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C1694F, #D4A853)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Thriving Brand
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "#5C3D2E", maxWidth: "480px" }}
              >
                CraftBloom helps artisans, homemakers, and skilled workers grow their craft using AI guidance. Upload your work, learn from experts, and build a brand that the world will love.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/analyze"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)", fontSize: "1rem" }}
                >
                  <Sparkles className="w-5 h-5" />
                  Start Exploring
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/stories"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: "2px solid rgba(193,105,79,0.35)",
                    color: "#C1694F",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    fontSize: "1rem",
                  }}
                >
                  See Artisan Stories
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 mt-8"
              >
                <div className="flex -space-x-2">
                  {["P", "R", "F", "M"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-semibold"
                      style={{
                        backgroundColor: ["#C1694F", "#7C9E87", "#D4A853", "#8B6FA0"][i],
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm" style={{ color: "#8C6B52" }}>
                  <strong style={{ color: "#5C3D2E" }}>10,000+</strong> artisans growing with CraftBloom
                </p>
              </motion.div>
            </div>

            {/* Right: Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main image */}
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{ height: "440px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1752718070948-be9bae3960c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29tYW4lMjBjcmFmdGluZyUyMGhhbmRtYWRlfGVufDF8fHx8MTc3Mjc5MjQ3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Artisan crafting"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(45,27,14,0.4) 100%)",
                    }}
                  />
                </div>

                {/* Floating AI card */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-10 glass-card rounded-2xl p-4 shadow-xl"
                  style={{ minWidth: "180px" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(193,105,79,0.15)" }}
                    >
                      <Brain className="w-4 h-4" style={{ color: "#C1694F" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#2D1B0E" }}>AI Analyzing…</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#F5EFE6" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #C1694F, #D4A853)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#8C6B52" }}>78% Style Match Found</p>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 bottom-24 glass-card rounded-2xl p-3 shadow-xl flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #D4A853, #E8C070)" }}
                  >
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "#2D1B0E" }}>Top Seller</p>
                    <p className="text-xs" style={{ color: "#8C6B52" }}>Priya's Embroidery</p>
                  </div>
                </motion.div>

                {/* Floating skill tag */}
                <motion.div
                  animate={{ y: [-3, 7, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-4 bottom-8 glass-card rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" style={{ color: "#D4A853" }} />
                  <span className="text-sm font-medium" style={{ color: "#2D1B0E" }}>Skill → Brand in 30 days</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="#FDF6EC"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14" style={{ backgroundColor: "#FDF6EC" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center p-5 rounded-2xl glass-card hover-lift"
                  style={{ border: "1px solid rgba(193,105,79,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "linear-gradient(135deg, #C1694F22, #D4A85322)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#C1694F" }} />
                  </div>
                  <div
                    className="font-display text-2xl font-bold mb-1"
                    style={{ color: "#2D1B0E" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "#8C6B52" }}>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#F5EFE6" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
              style={{ backgroundColor: "rgba(193,105,79,0.12)", color: "#C1694F" }}
            >
              Everything you need
            </span>
            <h2
              className="font-display mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#2D1B0E", fontWeight: 700 }}
            >
              AI Tools Built for{" "}
              <span style={{ color: "#C1694F" }}>Your Craft</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#8C6B52" }}>
              From skill development to business branding, CraftBloom gives you everything you need to turn your passion into a profitable business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link to={f.link} className="block h-full">
                    <div
                      className="h-full p-6 rounded-2xl card-glow hover-lift transition-all duration-300 group cursor-pointer"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.8)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: f.bg }}
                      >
                        <Icon className="w-6 h-6" style={{ color: f.color }} />
                      </div>
                      <h3
                        className="font-display mb-2"
                        style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.05rem" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#8C6B52" }}>
                        {f.desc}
                      </p>
                      <div
                        className="flex items-center gap-1 text-sm font-medium transition-gap"
                        style={{ color: f.color }}
                      >
                        Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upload CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#FDF6EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #C1694F 0%, #D4856A 50%, #D4A853 100%)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M47.7,-61.8C61.4,-50.2,71.9,-35.3,74.7,-19.3C77.5,-3.3,72.6,13.8,64.1,28.3C55.7,42.8,43.7,54.6,29.4,62.1C15.1,69.6,-1.6,72.8,-18.5,70.1C-35.4,67.4,-52.5,58.8,-63.5,45.3C-74.6,31.8,-79.7,13.3,-77.3,-3.8C-74.9,-21,-65,-36.8,-52,-48.1C-39,-59.3,-22.9,-66,-5.7,-68.3C11.5,-70.5,34,-73.4,47.7,-61.8Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M38.9,-51.3C50.4,-40.5,59.6,-28.1,64.4,-13.3C69.2,1.5,69.6,18.8,63.1,33.5C56.6,48.2,43.2,60.3,28,66.5C12.8,72.7,-5.2,73,-21.7,67.5C-38.3,62,-53.4,50.7,-63.4,35.7C-73.4,20.7,-78.3,2,-75.3,-15.2C-72.2,-32.5,-61.2,-48.2,-47.1,-58.9C-33,-69.6,-16.5,-75.2,-1.1,-74C14.3,-72.7,27.3,-62.1,38.9,-51.3Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h2
                className="font-display mb-4 text-white"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700 }}
              >
                Ready to Bloom?
              </h2>
              <p className="text-white/85 text-base mb-8 max-w-lg mx-auto">
                Upload your craft work and let our AI analyze it. Get personalized suggestions to make your art stand out in the market.
              </p>
              <Link
                to="/analyze"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ color: "#C1694F", fontSize: "1rem" }}
              >
                <Upload className="w-5 h-5" />
                Upload Your Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: "#F5EFE6" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm mb-4"
              style={{ backgroundColor: "rgba(124,158,135,0.15)", color: "#5A7A65" }}
            >
              Success Stories
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#2D1B0E", fontWeight: 700 }}
            >
              Artisans Who{" "}
              <span style={{ color: "#7C9E87" }}>Bloomed</span> with Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl hover-lift card-glow"
                style={{
                  backgroundColor: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: t.color }} />
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5C3D2E" }}>
                  "{t.story}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#D4A853" }} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#2D1B0E" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#8C6B52" }}>{t.skill} • {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ color: "#C1694F", border: "1.5px solid rgba(193,105,79,0.3)", backgroundColor: "rgba(193,105,79,0.05)" }}
            >
              Read More Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #2D1B0E 0%, #4A2C15 50%, #3D2512 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
            >
              <Flower2 className="w-7 h-7 text-white" />
            </div>
            <h2
              className="font-display mb-6 text-white"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
            >
              Your skill is valuable.
            </h2>
            <p
              className="font-lora text-lg italic mb-3"
              style={{ color: "#D4A853", lineHeight: 1.7 }}
            >
              "With the right guidance and AI tools, you can build a successful brand — no matter where you start."
            </p>
            <p className="text-sm opacity-60 text-white">— The CraftBloom Mission</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/learn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-white font-medium transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)" }}
              >
                Start Learning Today
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-medium transition-all hover:-translate-y-0.5"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                Find Support Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
