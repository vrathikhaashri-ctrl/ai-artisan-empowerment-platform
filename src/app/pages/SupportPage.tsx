import { motion } from "motion/react";
import {
  Shield, ArrowRight, CheckCircle, ExternalLink,
  GraduationCap, Wrench, DollarSign, Users, Heart,
  ChevronDown, ChevronUp, Star, Lightbulb, Phone
} from "lucide-react";
import { useState } from "react";

const programs = [
  {
    icon: GraduationCap,
    title: "Free Skill Training Programs",
    subtitle: "Ministry of Skill Development",
    color: "#7C9E87",
    bg: "rgba(124,158,135,0.1)",
    badge: "Government",
    desc: "Access hundreds of free vocational training courses in tailoring, embroidery, beauty, and handicrafts. Earn government-recognized certificates.",
    benefits: [
      "Free training at local centers",
      "Certificate recognized by employers",
      "Training allowance during course",
      "Job placement assistance",
    ],
    eligibility: "Women 18–45 | BPL card holders get priority | No education requirement",
    cta: "Apply for Free Training",
  },
  {
    icon: DollarSign,
    title: "Mudra Yojana Micro Loans",
    subtitle: "Pradhan Mantri Mudra Yojana",
    color: "#C1694F",
    bg: "rgba(193,105,79,0.1)",
    badge: "Financial Aid",
    desc: "Get collateral-free loans from ₹10,000 to ₹10 lakh to start or expand your craft business. No guarantor required for Shishu category.",
    benefits: [
      "Loan from ₹10,000 to ₹10 lakh",
      "No collateral required (up to ₹10L)",
      "Low interest rates (7-12% p.a.)",
      "Available through all major banks",
    ],
    eligibility: "Any Indian citizen with a business plan | Age 18+ | Valid bank account",
    cta: "Apply for Mudra Loan",
  },
  {
    icon: Wrench,
    title: "Free Tool & Equipment Support",
    subtitle: "National Handicraft Board",
    color: "#D4A853",
    bg: "rgba(212,168,83,0.1)",
    badge: "Equipment",
    desc: "Eligible artisans can receive subsidized or free tools such as sewing machines, embroidery hoops, pottery wheels, and beauty kits.",
    benefits: [
      "50–100% subsidy on equipment",
      "Quality certified tools provided",
      "Maintenance support included",
      "Replacement warranty for 2 years",
    ],
    eligibility: "Registered artisan card holders | Women-led businesses get preference | Annual income below ₹3 lakh",
    cta: "Check Equipment Eligibility",
  },
  {
    icon: Users,
    title: "Self Help Group (SHG) Support",
    subtitle: "National Rural Livelihood Mission",
    color: "#8B6FA0",
    bg: "rgba(139,111,160,0.1)",
    badge: "Community",
    desc: "Join or form a Self Help Group to access group loans, shared resources, marketing support, and government subsidies as a collective.",
    benefits: [
      "Group loans at 4% interest",
      "Shared marketing & sales platforms",
      "Collective bargaining power",
      "Access to fairs & exhibitions",
    ],
    eligibility: "Groups of 10–20 women | Rural or semi-urban areas | Active savings for 6 months",
    cta: "Find SHG Near You",
  },
  {
    icon: Heart,
    title: "Women Entrepreneurship Fund",
    subtitle: "Ministry of Women & Child Development",
    color: "#C1694F",
    bg: "rgba(193,105,79,0.08)",
    badge: "Grant",
    desc: "Grants and seed funding for women entrepreneurs in creative and handicraft sectors. Includes mentorship, market access, and exhibition support.",
    benefits: [
      "Seed grant up to ₹2 lakh",
      "1-year mentorship program",
      "National exhibition participation",
      "Digital marketing support",
    ],
    eligibility: "Women entrepreneurs | Business operational for 1+ year | Age 21–55",
    cta: "Apply for Grant",
  },
];

const faqs = [
  {
    q: "Do I need any documents to apply?",
    a: "Basic documents like Aadhaar, bank account, and a simple business description are usually enough. Many programs have simplified applications for rural women.",
  },
  {
    q: "Can I apply for multiple programs at once?",
    a: "Yes! Most programs are designed to complement each other. For example, you can receive skill training AND a Mudra loan simultaneously.",
  },
  {
    q: "Is there any age limit?",
    a: "Most programs serve women aged 18–55. However, some programs have no upper age limit if you are actively running a business.",
  },
  {
    q: "How long does approval take?",
    a: "Training programs can start within 2–4 weeks. Loan approvals typically take 2–6 weeks depending on the bank and program.",
  },
];

const steps = [
  { step: "01", title: "Check Eligibility", desc: "Browse programs above and see which ones match your profile." },
  { step: "02", title: "Prepare Documents", desc: "Gather Aadhaar, bank details, and a brief business description." },
  { step: "03", title: "Apply Online or Offline", desc: "Visit the program website or your nearest Common Service Centre (CSC)." },
  { step: "04", title: "Receive Support", desc: "Get training, tools, funding, or mentorship and start growing!" },
];

export function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EBF0EC 0%, #DDE8E0 50%, #E8F0EA 100%)" }}
      >
        <div
          className="absolute bottom-0 right-0 w-80 h-80 orb opacity-25"
          style={{ background: "radial-gradient(circle, rgba(90,122,101,0.4), transparent)" }}
        />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: "rgba(90,122,101,0.15)", color: "#3A6048" }}
          >
            <Shield className="w-4 h-4" /> Government Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2D1B0E", fontWeight: 700 }}
          >
            Support Programs for{" "}
            <span style={{ color: "#5A7A65" }}>Artisans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
            style={{ color: "#3A6048" }}
          >
            You may qualify for free training, equipment, loans, and grants designed specifically for artisans and homemakers like you. Explore what's available.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* How to Apply Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2
            className="font-display mb-8 text-center"
            style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
          >
            How to Apply — It's Simple
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl text-center hover-lift"
                style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "1px solid rgba(90,122,101,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 font-display font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #5A7A65, #7C9E87)", fontSize: "1rem" }}
                >
                  {s.step}
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#2D1B0E" }}>{s.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#8C6B52" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programs */}
        <div className="mb-14">
          <h2
            className="font-display mb-8"
            style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.3rem" }}
          >
            Available Support Programs
          </h2>
          <div className="space-y-4">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              const isExpanded = expandedProgram === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl overflow-hidden hover-lift"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.85)",
                    border: `1px solid ${isExpanded ? prog.color + "44" : "rgba(90,122,101,0.12)"}`,
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Card header */}
                  <button
                    className="w-full p-5 flex items-start gap-4 text-left"
                    onClick={() => setExpandedProgram(isExpanded ? null : i)}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: prog.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: prog.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold" style={{ color: "#2D1B0E" }}>{prog.title}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: prog.bg, color: prog.color }}
                        >
                          {prog.badge}
                        </span>
                      </div>
                      <p className="text-xs mb-1" style={{ color: "#8C6B52" }}>{prog.subtitle}</p>
                      <p className="text-sm" style={{ color: "#5C3D2E" }}>{prog.desc}</p>
                    </div>
                    <div className="flex-shrink-0 mt-1" style={{ color: prog.color }}>
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5"
                    >
                      <div
                        className="pt-4"
                        style={{ borderTop: "1px solid rgba(90,122,101,0.1)" }}
                      >
                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Benefits */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "#2D1B0E" }}>
                              <CheckCircle className="w-4 h-4" style={{ color: prog.color }} />
                              What You Get
                            </h4>
                            <ul className="space-y-2">
                              {prog.benefits.map((b, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#5C3D2E" }}>
                                  <div
                                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: prog.bg }}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prog.color }} />
                                  </div>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Eligibility */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "#2D1B0E" }}>
                              <Star className="w-4 h-4" style={{ color: prog.color }} />
                              Who Can Apply
                            </h4>
                            <div
                              className="p-3 rounded-xl text-sm"
                              style={{ backgroundColor: prog.bg, color: prog.color }}
                            >
                              {prog.eligibility}
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                          <button
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-medium"
                            style={{ backgroundColor: prog.color }}
                          >
                            {prog.cta}
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm"
                            style={{ border: `1.5px solid ${prog.color}44`, color: prog.color }}
                          >
                            <Phone className="w-4 h-4" />
                            Get Help Applying
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI Guidance banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl mb-14 flex flex-col sm:flex-row items-start gap-5"
          style={{
            background: "linear-gradient(135deg, rgba(90,122,101,0.12), rgba(124,158,135,0.08))",
            border: "1px solid rgba(90,122,101,0.2)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #5A7A65, #7C9E87)" }}
          >
            <Lightbulb className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-display mb-2" style={{ color: "#2D1B0E", fontWeight: 600 }}>
              Not sure which program is right for you?
            </h3>
            <p className="text-sm mb-4" style={{ color: "#5C3D2E" }}>
              Our AI can help you identify the best government support programs based on your craft, location, and income. Just answer a few simple questions and we'll guide you.
            </p>
            <button
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm"
              style={{ background: "linear-gradient(135deg, #5A7A65, #7C9E87)" }}
            >
              Find My Best Program <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="mb-12">
          <h2
            className="font-display mb-6"
            style={{ color: "#2D1B0E", fontWeight: 600, fontSize: "1.2rem" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(90,122,101,0.12)",
                }}
              >
                <button
                  className="w-full p-4 flex items-center justify-between text-left"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium" style={{ color: "#2D1B0E" }}>{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "#5A7A65" }} />
                  ) : (
                    <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#5A7A65" }} />
                  )}
                </button>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-4 pb-4 text-sm"
                    style={{ color: "#8C6B52" }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, #5A7A65, #7C9E87)",
          }}
        >
          <h3 className="font-display text-white mb-3" style={{ fontWeight: 700, fontSize: "1.4rem" }}>
            Take the First Step Today
          </h3>
          <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
            Thousands of artisans have already used these programs to grow their businesses. Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl text-sm font-medium"
              style={{ color: "#5A7A65" }}
            >
              Learn How to Apply <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
              style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "white" }}
            >
              <Phone className="w-4 h-4" />
              Talk to a Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
