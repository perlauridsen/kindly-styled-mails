import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, TrendingUp, Shield, Clock, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import carsLot from "@/assets/cars-lot.jpg";
import carHandover from "@/assets/car-handover.jpg";
import HeroSlider from "@/components/HeroSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Landing = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://dev.altoure.com/webform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-foreground text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src="/images/logo-white.png" alt="Altoure" className="h-8" />
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <button onClick={() => scrollTo("about")} className="opacity-70 hover:opacity-100 transition-opacity">About</button>
            <button onClick={() => scrollTo("features")} className="opacity-70 hover:opacity-100 transition-opacity">Platform</button>
            <button onClick={() => scrollTo("signup")} className="opacity-70 hover:opacity-100 transition-opacity">Early Access</button>
            <button onClick={() => scrollTo("contact")} className="opacity-70 hover:opacity-100 transition-opacity">Contact</button>
          </div>
          <Button
            onClick={() => scrollTo("signup")}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlider />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 text-xs tracking-widest uppercase text-primary">
            Coming Soon
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            The Future of
            <br />
            <span className="text-primary">Automotive Remarketing</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Altoure is building the next-generation platform for remarketing new and young used vehicles — smarter, faster, and more transparent.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              onClick={() => scrollTo("signup")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base"
            >
              Join the Waitlist
            </Button>
          </motion.div>
        </motion.div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">About Altoure</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Reinventing how the automotive industry remarkets vehicles
              </h2>
              <p className="opacity-70 leading-relaxed mb-6">
                Altoure is a digital remarketing platform designed specifically for new and young used cars. We connect OEMs, fleet companies, leasing providers, and dealers through a seamless, data-driven marketplace.
              </p>
              <p className="opacity-70 leading-relaxed">
                Our mission is to bring transparency, efficiency, and competitive pricing to every vehicle transaction — turning complex remarketing workflows into a streamlined digital experience.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <img
                src={carsLot}
                alt="Automotive remarketing lot"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">B2B</p>
                <p className="text-sm opacity-80">Platform</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-foreground/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Platform Features</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the modern automotive market</h2>
            <p className="opacity-60 max-w-xl mx-auto">Everything you need to buy and sell new and young used vehicles at scale.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { icon: Car, title: "Smart Inventory", desc: "AI-powered vehicle matching and pricing recommendations for optimal remarketing." },
              { icon: TrendingUp, title: "Market Analytics", desc: "Real-time market data and trends to make informed buying and selling decisions." },
              { icon: Shield, title: "Trusted Network", desc: "Verified dealers and partners in a secure, professional marketplace." },
              { icon: Clock, title: "Fast Turnaround", desc: "Streamlined processes to reduce days-to-sell and maximize vehicle value." },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-foreground/80 border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={carHandover} alt="Car transaction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your remarketing?</h2>
          <p className="opacity-70 text-lg mb-8">Be among the first to experience a smarter way to buy and sell vehicles.</p>
          <Button
            onClick={() => scrollTo("signup")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base"
          >
            Sign Up for Early Access
          </Button>
        </motion.div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Early Access</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get on the waitlist</h2>
              <p className="opacity-60">Be the first to know when Altoure launches. No spam, just updates.</p>
            </motion.div>

            {submitted ? (
              <motion.div variants={fadeUp} className="text-center py-12 bg-primary/10 border border-primary/20 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                <p className="opacity-60">We'll be in touch when we're ready to launch.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeUp} onSubmit={handleSignup} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-foreground/50 border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                />
                <Input
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-foreground/50 border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-foreground/50 border-primary/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-xl text-base"
                >
                  {submitting ? "Submitting..." : "Join the Waitlist"}
                </Button>
                <p className="text-xs opacity-40 text-center">We respect your privacy. Unsubscribe anytime.</p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-foreground/50 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
              <p className="opacity-60 leading-relaxed mb-8">
                Have questions about Altoure or want to learn more about our platform? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm opacity-50">Email</p>
                    <a href="mailto:info@altoure.com" className="hover:text-primary transition-colors">info@altoure.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm opacity-50">Phone</p>
                    <a href="tel:+32478279658" className="hover:text-primary transition-colors">+32 478 27 96 58</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm opacity-50">Location</p>
                    <p>Bruges, Belgium</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center">
              <img src="/images/logo-white.png" alt="Altoure" className="h-16 opacity-30" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-40">
          <p>© {new Date().getFullYear()} Altoure Automotive. All rights reserved.</p>
          <p>altoure.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
