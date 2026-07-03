import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  
  Send,
  Sparkles,
  Star,
  Target,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Typewriter } from "@/components/portfolio/Typewriter";
import profileAsset from "@/assets/profile.png.asset.json";

const profile = profileAsset.url;


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative overflow-x-clip">
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-1.5 text-xs font-bold tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] animate-fade-up">
            HIRE ME
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Hello, I'm <br />
            <span className="text-gradient">Lolla Raj Venkata</span>
            <br />
            Apuroop
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            <Typewriter
              words={[
                "AI Enthusiast",
                "Full Stack Developer",
                "UI/UX Designer",
                "Problem Solver",
                "Tech Explorer",
              ]}
            />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'm a B.Tech Artificial Intelligence student passionate about web
            development, AI, and problem solving. I design and build scalable,
            user-focused digital solutions while continuously sharpening my
            skills through projects, internships, and hands-on learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-3 text-sm font-semibold hover:border-primary/60 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/rajlolla09-rajS" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/raj-venkata-apuroop-lolla-30410532b" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Andhra Pradesh, IN</span>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-30 blur-2xl" />
            <div className="relative h-80 w-80 sm:h-[26rem] sm:w-[26rem] rounded-[2rem] p-[2px] bg-[image:var(--gradient-primary)]">
              <div className="relative h-full w-full rounded-[calc(2rem-2px)] overflow-hidden bg-card glow-ring">
                <img
                  src={profile}
                  alt="Lolla Raj Venkata Apuroop"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
            </div>
            <div className="absolute -top-4 -right-2 glass rounded-2xl px-3 py-2 flex items-center gap-2 text-xs font-semibold animate-float">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open To Work
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float-slow">
              <div className="text-2xl font-display font-bold text-gradient">8.3</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</div>
            </div>
            <div className="absolute top-1/2 -right-10 glass rounded-xl p-3 animate-float">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute bottom-14 -left-10 glass rounded-xl p-3 animate-float-slow">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
const stats = [
  { label: "CGPA", value: "8.3", icon: GraduationCap },
  { label: "Projects", value: "7+", icon: Layers },
  { label: "Certifications", value: "9+", icon: Award },
  { label: "Hackathon Accuracy", value: "79%", icon: Target },
  { label: "Technologies", value: "10+", icon: Code2 },
];

function About() {
  const highlights = [
    { icon: Sparkles, title: "AI Undergraduate", desc: "B.Tech in CS (AI) at Pragati Engineering College" },
    { icon: Code2, title: "Full Stack Focus", desc: "Building modern, responsive web experiences" },
    { icon: Zap, title: "ML Explorer", desc: "Turning data into meaningful product moments" },
    { icon: Target, title: "Problem Solver", desc: "DSA, hackathons, and shipping real solutions" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="section-heading mt-4">Know Me <span className="text-gradient">More</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A quick snapshot of who I am, what I love building, and the numbers behind the journey.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* LEFT — Identity card (no photo) */}
          <div className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-25 blur-2xl animate-pulse-glow" />
            <div className="relative glass rounded-[2rem] p-3 glow-ring overflow-hidden">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-card">
                <img
                  src={profile}
                  alt="Lolla Raj Venkata Apuroop portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

                {/* Floating badges */}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-[11px] font-semibold flex items-center gap-1.5 animate-float">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available 2026
                </div>
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 text-[11px] font-semibold text-gradient animate-float-slow">
                  AI · B.Tech '28
                </div>

                {/* Bottom overlay card */}
                <div className="absolute inset-x-4 bottom-4 glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Based in</div>
                    <div className="text-sm font-semibold truncate">Andhra Pradesh, India</div>
                  </div>
                  <a
                    href="#contact"
                    className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition-transform"
                    aria-label="Contact"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Signature strip */}
              <div className="flex items-center justify-between px-3 pt-3 pb-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>Portfolio · '26</span>
                <span className="text-gradient font-semibold">LRVA</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" /> Hello there
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-display font-bold leading-tight">
                Aspiring <span className="text-gradient">AI Engineer</span> &
                <br className="hidden sm:block" /> Full Stack Developer
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I'm an AI undergraduate who loves crafting modern web applications
                and exploring machine learning. I enjoy solving challenging
                programming problems and continuously learning new technologies —
                always chasing that next opportunity to build something meaningful.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="group relative overflow-hidden glass rounded-2xl p-5 hover:-translate-y-1 hover:border-primary/60 transition-all"
                  >
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                    <div className="relative flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-all">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-sm">{h.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats — bento */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h4 className="font-display font-bold text-lg">By the numbers</h4>
                <span className="text-xs text-muted-foreground">Updated 2026</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  const featured = i === 0;
                  return (
                    <div
                      key={s.label}
                      className={`group relative overflow-hidden glass rounded-2xl p-5 hover:-translate-y-1 transition-all ${
                        featured ? "sm:col-span-1 sm:row-span-2 bg-[image:var(--gradient-primary)]/10 border-primary/40" : ""
                      }`}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-accent/10" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <Icon className="h-4 w-4 text-primary" />
                          {featured && (
                            <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Featured</span>
                          )}
                        </div>
                        <div className={`mt-3 font-display font-bold text-gradient ${featured ? "text-5xl" : "text-3xl"}`}>
                          {s.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                          {s.label}
                        </div>
                        {featured && (
                          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                            Consistent academic performance across every semester so far.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-3 text-sm font-semibold hover:border-primary/60"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
const education = [
  {
    title: "B.Tech — Computer Science (AI)",
    place: "Pragati Engineering College",
    period: "2024 – 2028",
    detail: "CGPA: 8.3",
    icon: GraduationCap,
  },
  {
    title: "Intermediate — MPC",
    place: "Aditya Junior College",
    period: "2022 – 2024",
    detail: "950 Marks",
    icon: BookOpen,
  },
  {
    title: "SSC",
    place: "Bhashyam Public School",
    period: "Completed",
    detail: "Percentage: 88%",
    icon: BookOpen,
  },
];

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel>Education</SectionLabel>
          <h2 className="section-heading mt-4">My <span className="text-gradient">Journey</span></h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-10">
            {education.map((e, i) => {
              const Icon = e.icon;
              const left = i % 2 === 0;
              return (
                <div key={e.title} className="relative md:grid md:grid-cols-2 md:gap-10 items-center">
                  <div className={`pl-14 md:pl-0 ${left ? "md:pr-10 md:text-right md:col-start-1" : "md:pl-10 md:col-start-2"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                      <div className="text-xs uppercase tracking-widest text-primary font-semibold">{e.period}</div>
                      <h3 className="mt-2 text-lg font-display font-bold">{e.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{e.place}</p>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gradient">{e.detail}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Java", level: 82 },
      { name: "Python", level: 88 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Layers,
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [{ name: "MySQL", level: 78 }],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: [
      { name: "VS Code", level: 92 },
      { name: "GitHub", level: 85 },
      { name: "Google Colab", level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="section-heading mt-4">Tools of My <span className="text-gradient">Craft</span></h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="glass rounded-3xl p-7 hover:border-primary/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold">{g.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] transition-all duration-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Clean, responsive, intuitive user interfaces with modern user experiences that feel effortless.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Responsive web applications built with scalable architecture and modern development practices.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    desc: "Prototype ML-powered features and automations that turn data into real, useful product moments.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="section-heading mt-4">Services I <span className="text-gradient">Provide</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-primary/60"
              >
                <div className="absolute inset-0 rounded-3xl bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
const experiences = [
  {
    role: "Thiranex Internship",
    org: "Intern",
    desc: "Hands-on technical learning and practical software development experience.",
  },
  {
    role: "YUVA Internship",
    org: "Intern",
    desc: "Industry exposure through project-based learning and technical skill development.",
  },
  {
    role: "Power BI Internship",
    org: "APSCHE",
    desc: "Worked on data visualization, dashboard creation, and business analytics concepts using Microsoft Power BI.",
  },
  {
    role: "FORGE INSPIRE'25 Hackathon",
    org: "NIT",
    desc: "Participated in a competitive hackathon focused on innovative software solutions, teamwork, and problem-solving.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Internship Experience</SectionLabel>
          <h2 className="section-heading mt-4">Where I've <span className="text-gradient">Grown</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {experiences.map((e) => (
            <div key={e.role} className="glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-all">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-lg">{e.role}</h3>
                  <div className="text-xs uppercase tracking-widest text-primary mt-1">{e.org}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
const projects = [
  {
    title: "Student Management System",
    tech: ["Python"],
    desc: "A console-based Student Management System implementing CRUD operations to efficiently manage student records using Python data structures.",
    features: ["Add Students", "Update Records", "Delete Students", "Search Records", "View Details"],
    github: "https://github.com/rajlolla09-rajS/Student-Management-System",
    accent: "from-primary to-accent",
  },
  {
    title: "Stock Price Prediction",
    tech: ["Python", "Machine Learning"],
    desc: "ML-based system that analyzes historical market data to forecast future stock prices — covering collection, preprocessing, EDA, training, prediction and evaluation.",
    features: ["Data Collection", "Preprocessing", "Model Training", "Evaluation", "Forecasting"],
    github: "https://github.com/rajlolla09-rajS/Stock-Price-Prediction",
    accent: "from-accent to-primary",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="section-heading mt-4">Selected <span className="text-gradient">Work</span></h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className={`relative h-52 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,.3), transparent 40%)"
                }} />
                <div className="absolute inset-0 grid place-items-center">
                  <Code2 className="h-20 w-20 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-display font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                {p.features && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-secondary hover:bg-secondary/70 px-4 py-2 text-sm font-semibold transition-colors">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
const achievements = [
  { title: "FORGE INSPIRE'25", desc: "NIT Hackathon Participant", icon: Trophy },
  { title: "Multiple Internships", desc: "Thiranex • YUVA • APSCHE", icon: Briefcase },
  { title: "AI Student", desc: "Actively exploring ML & AI", icon: Sparkles },
  { title: "ML Projects", desc: "Stock prediction & more", icon: Target },
  { title: "Full Stack Learning", desc: "Modern web development", icon: Layers },
  { title: "9+ Certifications", desc: "Continuous upskilling", icon: Award },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Achievements</SectionLabel>
          <h2 className="section-heading mt-4">Milestones & <span className="text-gradient">Wins</span></h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/60 transition-all">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const details = [
    { icon: Mail, label: "Email", value: "rajlolla09@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/rajlolla09-rajS" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/raj-venkata-apuroop-lolla-30410532b" },
    { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="section-heading mt-4">Let's <span className="text-gradient">Build</span> Together</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have an idea, an internship, or just want to connect? Drop a message — I usually reply within a day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass rounded-3xl p-8 space-y-4">
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.label} className="flex items-center gap-4 rounded-2xl p-3 hover:bg-secondary/60 transition-colors">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</div>
                    <div className="font-medium truncate">{d.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" placeholder="How can I help?" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your idea..."
                className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform"
            >
              {sent ? "Message sent!" : "Send Message"}
              <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display font-bold text-primary-foreground">L</span>
            <span className="font-display text-lg font-bold">Raj<span className="text-gradient">.</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Building thoughtful, AI-powered digital experiences — one project at a time.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["About", "Education", "Skills", "Services", "Projects", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Github, href: "https://github.com/rajlolla09-rajS" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/raj-venkata-apuroop-lolla-30410532b" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-[image:var(--gradient-primary)] hover:text-primary-foreground transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Lolla Raj Venkata Apuroop. All rights reserved.</span>
          <span>Designed & Developed by <span className="text-gradient font-semibold">Lolla Raj Venkata Apuroop</span></span>
        </div>
      </div>
    </footer>
  );
}
