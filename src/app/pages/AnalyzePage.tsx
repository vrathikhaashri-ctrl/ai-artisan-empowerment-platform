import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Upload, Image, Sparkles, Zap, TrendingUp, Tag, Palette,
  Check, Star, RefreshCw, ChevronRight, Camera, FileImage
} from "lucide-react";
import { Link } from "react-router";

const mockResults = {
  improvements: [
    { title: "Color Harmony", desc: "Try pairing your terracotta tones with sage green accents for a balanced, modern palette that sells well online.", score: 88 },
    { title: "Texture Detail", desc: "Highlight the fine texture of your stitchwork in photography — use natural morning light for maximum impact.", score: 75 },
    { title: "Composition", desc: "Place your product at the rule-of-thirds intersection. Add minimal props like dried flowers or rustic wood.", score: 82 },
  ],
  trends: [
    { tag: "Boho Chic Revival", hot: true },
    { tag: "Earthy Neutrals", hot: true },
    { tag: "Handcrafted Minimalism", hot: false },
    { tag: "Maximalist Embroidery", hot: true },
    { tag: "Sustainable Craft", hot: false },
    { tag: "Folk Art Fusion", hot: false },
  ],
  branding: [
    { icon: Tag, title: "Brand Name Idea", value: '"Earthy Threads Studio"', desc: "A warm, memorable name that conveys authenticity and craftsmanship." },
    { icon: Star, title: "Tagline Suggestion", value: '"Woven with love, crafted with purpose"', desc: "Emotionally resonant and shareable across social media." },
    { icon: Palette, title: "Color Palette", value: "Terracotta + Ivory + Sage", desc: "This palette tests well with women 25–45 shopping handmade products." },
  ],
};

const demoImages = [
  "https://images.unsplash.com/photo-1772411535836-493bfc9b6f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwaGFuZGljcmFmdCUyMGNvbG9yZnVsJTIwdGV4dGlsZXxlbnwxfHx8fDE3NzI3OTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1767476106226-ff48f2e12286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBjZXJhbWljJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzI3OTI0ODF8MA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1722963295947-c6f8f1c50de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwYXJ0aXNhbiUyMHdvcmtzaG9wJTIwaGFuZGNyYWZ0fGVufDF8fHx8MTc3Mjc5MjQ4NXww&ixlib=rb-4.1.0&q=80&w=400",
];

type AnalyzeState = "idle" | "uploading" | "analyzing" | "done";

export function AnalyzePage() {
  const [state, setState] = useState<AnalyzeState>("idle");
  const [dragOver, setDragOver] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<"improvements" | "trends" | "branding">("improvements");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    startAnalysis();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const useDemoImage = (url: string) => {
    setPreviewImage(url);
    startAnalysis();
  };

  const startAnalysis = () => {
    setState("uploading");
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setState("done"), 400);
      }
      setAnalyzeProgress(Math.min(progress, 100));
      if (progress < 40) setState("uploading");
      else setState("analyzing");
    }, 350);
  };

  const reset = () => {
    setState("idle");
    setPreviewImage(null);
    setAnalyzeProgress(0);
    setActiveTab("improvements");
  };

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EDE4D8 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 orb opacity-30"
          style={{ background: "radial-gradient(circle, rgba(193,105,79,0.4), transparent)" }}
        />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: "rgba(193,105,79,0.12)", color: "#C1694F" }}
          >
            <Sparkles className="w-4 h-4" /> AI Work Analyzer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2D1B0E", fontWeight: 700 }}
          >
            Analyze Your <span style={{ color: "#C1694F" }}>Craft Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "#8C6B52" }}
          >
            Upload any photo of your craft — embroidery, pottery, jewellery, garments — and get instant AI-powered insights on how to improve and market your work.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Upload state */}
          {state === "idle" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Drop zone */}
              <div
                className={`upload-zone rounded-3xl p-12 text-center cursor-pointer transition-all ${dragOver ? "drag-over" : ""}`}
                style={{ backgroundColor: dragOver ? "rgba(193,105,79,0.04)" : "rgba(255,255,255,0.6)" }}
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInput}
                />
                <motion.div
                  animate={{ scale: dragOver ? 1.05 : 1 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(193,105,79,0.15), rgba(212,168,83,0.15))" }}
                >
                  <Camera className="w-10 h-10" style={{ color: "#C1694F" }} />
                </motion.div>
                <h3
                  className="font-display mb-2"
                  style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.2rem" }}
                >
                  Drop your craft photo here
                </h3>
                <p className="text-sm mb-4" style={{ color: "#8C6B52" }}>
                  Supports JPG, PNG, WEBP • Max 10MB
                </p>
                <div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)" }}
                >
                  <Upload className="w-4 h-4" />
                  Choose from Gallery
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(193,105,79,0.15)" }} />
                <span className="text-sm" style={{ color: "#8C6B52" }}>or try with a sample</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(193,105,79,0.15)" }} />
              </div>

              {/* Demo images */}
              <div className="grid grid-cols-3 gap-4">
                {demoImages.map((img, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => useDemoImage(img)}
                    className="relative rounded-2xl overflow-hidden group"
                    style={{ aspectRatio: "1", border: "2px solid rgba(193,105,79,0.15)" }}
                  >
                    <img src={img} alt="Sample craft" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-medium" style={{ color: "#C1694F" }}>
                        Use Sample
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Loading state */}
          {(state === "uploading" || state === "analyzing") && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              {previewImage && (
                <div className="w-48 h-48 rounded-2xl overflow-hidden mx-auto mb-8 shadow-xl">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              <h3
                className="font-display mb-2"
                style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
              >
                {state === "uploading" ? "Uploading your work…" : "AI is analyzing…"}
              </h3>
              <p className="text-sm mb-6" style={{ color: "#8C6B52" }}>
                {state === "uploading"
                  ? "Getting your beautiful craft ready"
                  : "Checking design trends, branding opportunities, and improvements"}
              </p>

              {/* Progress bar */}
              <div className="max-w-xs mx-auto">
                <div
                  className="h-2 rounded-full overflow-hidden mb-2"
                  style={{ backgroundColor: "rgba(193,105,79,0.15)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #C1694F, #D4A853)",
                      width: `${analyzeProgress}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs" style={{ color: "#8C6B52" }}>
                  {Math.round(analyzeProgress)}% complete
                </p>
              </div>

              {/* Steps */}
              <div className="flex items-center justify-center gap-6 mt-8">
                {[
                  { label: "Upload", done: analyzeProgress >= 30 },
                  { label: "Analyze", done: analyzeProgress >= 65 },
                  { label: "Insights", done: analyzeProgress >= 100 },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-all"
                      style={{
                        backgroundColor: step.done ? "#C1694F" : "rgba(193,105,79,0.15)",
                      }}
                    >
                      {step.done ? (
                        <Check className="w-3 h-3 text-white" />
                      ) : (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(193,105,79,0.4)" }} />
                      )}
                    </div>
                    <span className="text-xs" style={{ color: step.done ? "#C1694F" : "#8C6B52" }}>{step.label}</span>
                    {i < 2 && <ChevronRight className="w-3 h-3 opacity-30" />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results state */}
          {state === "done" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {previewImage && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                      <img src={previewImage} alt="Analyzed" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#C1694F" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "#C1694F" }}>Analysis Complete!</span>
                    </div>
                    <h3 className="font-display" style={{ color: "#2D1B0E", fontWeight: 600 }}>
                      Your AI Craft Report
                    </h3>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all hover:opacity-80"
                  style={{ border: "1.5px solid rgba(193,105,79,0.3)", color: "#C1694F", backgroundColor: "rgba(193,105,79,0.06)" }}
                >
                  <RefreshCw className="w-4 h-4" /> Analyze Another
                </button>
              </div>

              {/* Tabs */}
              <div
                className="flex gap-1 p-1 rounded-xl mb-8"
                style={{ backgroundColor: "rgba(193,105,79,0.08)", width: "fit-content" }}
              >
                {(["improvements", "trends", "branding"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all"
                    style={
                      activeTab === tab
                        ? { backgroundColor: "#C1694F", color: "white" }
                        : { color: "#8C6B52" }
                    }
                  >
                    {tab === "improvements" ? "Improvements" : tab === "trends" ? "Trending Styles" : "Branding Tips"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Improvements */}
                {activeTab === "improvements" && (
                  <motion.div
                    key="imp"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="grid sm:grid-cols-3 gap-5"
                  >
                    {mockResults.improvements.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className="p-5 rounded-2xl hover-lift"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(193,105,79,0.12)",
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold" style={{ color: "#2D1B0E" }}>{item.title}</span>
                          <span
                            className="text-xs px-2 py-1 rounded-full font-medium"
                            style={{ backgroundColor: "rgba(193,105,79,0.12)", color: "#C1694F" }}
                          >
                            {item.score}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full overflow-hidden mb-3" style={{ backgroundColor: "rgba(193,105,79,0.12)" }}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, #C1694F, #D4A853)" }}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.score}%` }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                          />
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "#8C6B52" }}>{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Trends */}
                {activeTab === "trends" && (
                  <motion.div
                    key="trends"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <div
                      className="p-6 rounded-2xl mb-5"
                      style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "1px solid rgba(193,105,79,0.12)" }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5" style={{ color: "#C1694F" }} />
                        <h4 className="font-semibold" style={{ color: "#2D1B0E" }}>Trending in Your Category</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {mockResults.trends.map((trend, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                            style={
                              trend.hot
                                ? { background: "linear-gradient(135deg, #C1694F, #D4856A)", color: "white" }
                                : { backgroundColor: "rgba(193,105,79,0.1)", color: "#A0513A" }
                            }
                          >
                            {trend.hot && <Zap className="w-3 h-3" />}
                            {trend.tag}
                            {trend.hot && <span className="text-xs opacity-80">🔥</span>}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="p-5 rounded-2xl flex items-center gap-4"
                      style={{ backgroundColor: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(212,168,83,0.2)" }}>
                        <Star className="w-5 h-5" style={{ color: "#D4A853" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#2D1B0E" }}>AI Insight</p>
                        <p className="text-xs" style={{ color: "#8C6B52" }}>
                          "Boho Chic Revival" is trending 42% higher this month. Your color palette aligns perfectly — consider adding this tag to your Etsy listings!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Branding */}
                {activeTab === "branding" && (
                  <motion.div
                    key="branding"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="grid sm:grid-cols-3 gap-5"
                  >
                    {mockResults.branding.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="p-5 rounded-2xl hover-lift"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.8)",
                            border: "1px solid rgba(193,105,79,0.12)",
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                            style={{ backgroundColor: "rgba(193,105,79,0.1)" }}
                          >
                            <Icon className="w-5 h-5" style={{ color: "#C1694F" }} />
                          </div>
                          <p className="text-xs mb-1" style={{ color: "#8C6B52" }}>{item.title}</p>
                          <p className="font-display font-semibold mb-2" style={{ color: "#2D1B0E" }}>{item.value}</p>
                          <p className="text-xs" style={{ color: "#A07060" }}>{item.desc}</p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(193,105,79,0.08), rgba(212,168,83,0.08))",
                  border: "1px solid rgba(193,105,79,0.12)",
                }}
              >
                <p className="text-sm mb-4" style={{ color: "#5C3D2E" }}>
                  Want to build a full brand based on these insights?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/brand"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm"
                    style={{ background: "linear-gradient(135deg, #C1694F, #D4856A)" }}
                  >
                    Build My Brand <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/learn"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm"
                    style={{ border: "1.5px solid rgba(193,105,79,0.25)", color: "#C1694F" }}
                  >
                    Get Learning Path <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
