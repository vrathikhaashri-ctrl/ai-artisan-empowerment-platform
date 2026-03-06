import { motion } from "motion/react";
import { useState } from "react";
import {
  BookMarked, Star, Quote, ArrowRight, Search,
  MapPin, Filter, Heart, Share2, ChevronRight
} from "lucide-react";

const categories = ["All", "Tailoring", "Embroidery", "Pottery", "Beauty", "Jewelry", "Baking"];

const stories = [
  {
    id: 1,
    name: "Priya Sharma",
    craft: "Embroidery",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1772411535836-493bfc9b6f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "Priya started embroidering at 16 as a hobby. After joining a SHG and using CraftBloom's AI analyzer, she turned her passion into a ₹3 lakh/year business.",
    lesson: "Your traditional skill is your biggest competitive advantage in today's market.",
    result: "₹3L/year revenue",
    months: 8,
    featured: true,
    rating: 5,
    quote: "CraftBloom helped me see my embroidery as a business, not just a hobby. The AI told me what patterns were trending — I couldn't believe how accurate it was!",
    tags: ["Embroidery", "SHG"],
    color: "#C1694F",
  },
  {
    id: 2,
    name: "Rekha Menon",
    craft: "Tailoring",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1768745888568-b3ef7c7ba366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "A homemaker who learned tailoring through CraftBloom's roadmap, Rekha now runs 'Silk & Soul' boutique with 200+ happy customers and a waitlist for bridal orders.",
    lesson: "Starting small is fine. Starting is what matters.",
    result: "200+ customers",
    months: 10,
    featured: true,
    rating: 5,
    quote: "The brand builder gave me a name and tagline I could be proud of. Silk & Soul felt like me — traditional and warm.",
    tags: ["Tailoring", "Boutique"],
    color: "#7C9E87",
  },
  {
    id: 3,
    name: "Fatima Khan",
    craft: "Beauty",
    location: "Lucknow, UP",
    image: "https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "Fatima was a stay-at-home mom with a passion for makeup. After getting her learning path from CraftBloom, she grew her Instagram from 200 to 15,000 followers in 6 months.",
    lesson: "Social media is the shop window for creative businesses. Use it confidently.",
    result: "15K Instagram followers",
    months: 6,
    featured: true,
    rating: 5,
    quote: "The trending style suggestions were gold. I shifted to Boho Bride looks and my bookings tripled in two months.",
    tags: ["Beauty", "Instagram"],
    color: "#D4A853",
  },
  {
    id: 4,
    name: "Sunita Devi",
    craft: "Pottery",
    location: "Khurja, UP",
    image: "https://images.unsplash.com/photo-1767476106226-ff48f2e12286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "Sunita's family had been making pottery for generations, but sales were declining. CraftBloom's trend analyzer helped her pivot to modern-minimalist designs that sell online.",
    lesson: "Tradition + Modern design = A winning combination for today's buyers.",
    result: "3x online sales",
    months: 5,
    featured: false,
    rating: 5,
    quote: "I never thought my village pottery could sell to people in Delhi and Mumbai. CraftBloom made it possible.",
    tags: ["Pottery", "E-commerce"],
    color: "#8B6FA0",
  },
  {
    id: 5,
    name: "Anita Patel",
    craft: "Jewelry",
    location: "Surat, Gujarat",
    image: "https://images.unsplash.com/photo-1722963295947-c6f8f1c50de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "Anita used her Mudra loan (found through CraftBloom's Support section) to buy better tools and materials. Her handmade silver jewelry now ships across India and the UAE.",
    lesson: "Government support is there for you — you just need to know where to look.",
    result: "Ships to UAE",
    months: 12,
    featured: false,
    rating: 5,
    quote: "I applied for a Mudra loan through a link CraftBloom provided. Got ₹50,000 in 3 weeks. It changed everything.",
    tags: ["Jewelry", "Export"],
    color: "#C1694F",
  },
  {
    id: 6,
    name: "Meena Kumari",
    craft: "Baking",
    location: "Indore, MP",
    image: "https://images.unsplash.com/photo-1739430514990-a2896a43786a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    summary: "Meena baked for her family every day. CraftBloom's brand builder helped her create 'Mithaas by Meena' — a home-based cake and mithai brand with 50+ regular customers.",
    lesson: "What you make for love, others will pay for. Believe in your gift.",
    result: "50+ regular customers",
    months: 4,
    featured: false,
    rating: 5,
    quote: "Before CraftBloom, I thought my baking was just for family. Now Mithaas by Meena has its own Instagram page!",
    tags: ["Baking", "Home Business"],
    color: "#7C9E87",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const filteredStories = stories.filter((s) => {
    const matchCat = activeCategory === "All" || s.craft === activeCategory || s.tags.includes(activeCategory);
    const matchSearch =
      searchQuery === "" ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const featuredStory = stories.find((s) => s.featured);

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0EAE0 0%, #EAE0D8 50%, #F5EBE0 100%)" }}
      >
        <div
          className="absolute top-0 left-0 w-80 h-80 orb opacity-20"
          style={{ background: "radial-gradient(circle, rgba(193,105,79,0.5), transparent)" }}
        />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: "rgba(193,105,79,0.12)", color: "#C1694F" }}
          >
            <BookMarked className="w-4 h-4" /> Artisan Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2D1B0E", fontWeight: 700 }}
          >
            Stories That{" "}
            <span style={{ color: "#C1694F" }}>Inspire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "#7A4C2E" }}
          >
            Real artisans, real journeys. Read how women across India transformed their skills into successful businesses using CraftBloom and their own determination.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured story */}
        {featuredStory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4" style={{ color: "#D4A853" }} />
              <span className="text-sm font-medium" style={{ color: "#D4A853" }}>Featured Story</span>
            </div>
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ border: "1px solid rgba(193,105,79,0.15)" }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative" style={{ minHeight: "320px" }}>
                  <img
                    src={stories[0].image}
                    alt={stories[0].name}
                    className="w-full h-full object-cover"
                    style={{ position: "absolute", inset: 0 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(193,105,79,0.6), rgba(45,27,14,0.4))",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs text-white mb-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      {stories[0].craft}
                    </span>
                    <h3 className="font-display text-white text-xl font-bold">{stories[0].name}</h3>
                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <MapPin className="w-3 h-3" />
                      {stories[0].location}
                    </div>
                  </div>
                </div>
                <div className="p-8" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
                  <div className="flex gap-3 mb-5">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "rgba(193,105,79,0.1)", color: "#C1694F" }}
                    >
                      {stories[0].result}
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: "rgba(124,158,135,0.1)", color: "#5A7A65" }}
                    >
                      {stories[0].months} months journey
                    </div>
                  </div>
                  <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: "#C1694F" }} />
                  <p
                    className="font-lora italic mb-5 leading-relaxed"
                    style={{ color: "#5C3D2E", fontSize: "1.05rem" }}
                  >
                    "{stories[0].quote}"
                  </p>
                  <p className="text-sm mb-5" style={{ color: "#8C6B52", lineHeight: 1.7 }}>
                    {stories[0].summary}
                  </p>
                  <div
                    className="p-4 rounded-xl mb-5"
                    style={{ backgroundColor: "rgba(193,105,79,0.06)", border: "1px solid rgba(193,105,79,0.12)" }}
                  >
                    <p className="text-xs font-medium mb-1" style={{ color: "#C1694F" }}>Key Lesson</p>
                    <p className="text-sm" style={{ color: "#5C3D2E" }}>{stories[0].lesson}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: stories[0].rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#D4A853" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#8C6B52" }}
            />
            <input
              type="text"
              placeholder="Search by name, craft, or location…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                border: "1.5px solid rgba(193,105,79,0.2)",
                color: "#2D1B0E",
              }}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 flex-shrink-0" style={{ color: "#8C6B52" }} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs whitespace-nowrap font-medium transition-all flex-shrink-0"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#C1694F", color: "white" }
                    : { backgroundColor: "rgba(193,105,79,0.1)", color: "#A0513A" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm mb-6" style={{ color: "#8C6B52" }}>
          Showing {filteredStories.length} stor{filteredStories.length !== 1 ? "ies" : "y"}
        </p>

        {/* Story grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredStories.map((story, i) => {
            const isExpanded = expandedStory === story.id;
            const isLiked = liked.has(story.id);
            return (
              <motion.div
                key={story.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden hover-lift card-glow"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(193,105,79,0.1)",
                }}
              >
                {/* Image */}
                <div className="relative" style={{ height: "200px" }}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 40%, rgba(45,27,14,0.7) 100%)" }}
                  />
                  {/* Result badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: story.color }}
                  >
                    {story.result}
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold text-sm">{story.name}</h3>
                    <div className="flex items-center gap-1 text-white/75 text-xs">
                      <MapPin className="w-3 h-3" />
                      {story.location}
                    </div>
                  </div>
                  {/* Like btn */}
                  <button
                    onClick={() => toggleLike(story.id)}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <Heart
                      className="w-4 h-4"
                      style={{ color: isLiked ? "#C1694F" : "white", fill: isLiked ? "#C1694F" : "transparent" }}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(193,105,79,0.1)", color: "#A0513A" }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "rgba(124,158,135,0.1)", color: "#5A7A65" }}
                    >
                      {story.months}m journey
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#5C3D2E" }}>
                    {isExpanded ? story.summary : story.summary.slice(0, 100) + "..."}
                  </p>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <div
                        className="p-3 rounded-xl mb-3"
                        style={{ backgroundColor: "rgba(193,105,79,0.06)", border: "1px solid rgba(193,105,79,0.1)" }}
                      >
                        <Quote className="w-4 h-4 mb-1 opacity-40" style={{ color: story.color }} />
                        <p className="font-lora italic text-xs" style={{ color: "#5C3D2E" }}>"{story.quote}"</p>
                      </div>
                      <div
                        className="p-3 rounded-xl mb-3"
                        style={{ backgroundColor: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.12)" }}
                      >
                        <p className="text-xs font-medium mb-1" style={{ color: "#A07830" }}>Key Lesson</p>
                        <p className="text-xs" style={{ color: "#5C3D2E" }}>{story.lesson}</p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                      className="flex items-center gap-1 text-xs font-medium"
                      style={{ color: story.color }}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                      <ChevronRight
                        className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: story.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-current" style={{ color: "#D4A853" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Share your story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2D1B0E 0%, #4A2C15 100%)" }}
        >
          <div className="absolute top-0 right-0 opacity-5">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <circle cx="250" cy="50" r="200" fill="white" />
            </svg>
          </div>
          <div className="relative z-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "linear-gradient(135deg, #C1694F, #D4A853)" }}
            >
              <Share2 className="w-7 h-7 text-white" />
            </div>
            <h3
              className="font-display text-white mb-3"
              style={{ fontWeight: 700, fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}
            >
              Share Your Story
            </h3>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Have you used CraftBloom or your own determination to build something beautiful? Share your journey and inspire thousands of artisans across India.
            </p>
            <button
              className="inline-flex items-center gap-2 px-7 py-4 bg-white rounded-2xl text-sm font-medium"
              style={{ color: "#C1694F" }}
            >
              Submit Your Story <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
