import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import profileImage from "./assets/image.png";

const projects = [
  {
    title: "MediLINK – Intelligent Medication Management System",
    description:
      "Designed an embedded smart medication platform integrating electronics, sensor-based intake verification, automated dispensing logic, and centralized data management.",
    href: "#",
    tags: ["Embedded", "Electronics", "Sensors", "Cloud"],
  },
  {
    title: "Heart Disease Risk Prediction Using Clinical Data",
    description:
      "Built a clinical decision support workflow using structured datasets, focusing on preprocessing, feature relevance, and model evaluation for reliability.",
    href: "#",
    tags: ["ML", "Healthcare", "Model Evaluation"],
  },
  {
    title: "Predictive Maintenance of Industrial Equipment",
    description:
      "Developed a sensor-driven fault prediction pipeline for industrial pumps using time-series modeling and anomaly detection.",
    href: "#",
    tags: ["Time-Series", "LSTM", "Anomaly Detection"],
  },
  {
    title: "Military Threat Detection Using Vision-Based Fusion",
    description:
      "Designed a vision-based detection framework combining object detection and deep feature extraction with a focus on real-time robustness.",
    href: "#",
    tags: ["Computer Vision", "YOLO", "Deep Learning"],
  },
];

const skills = [
  {
    title: "Embedded & Electronics",
    items: [
      "Embedded C, Verilog / HDL",
      "Digital Logic Design",
      "Sensors & Data Acquisition",
      "Circuit & System Analysis",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Random Forest, XGBoost, ANN",
      "LSTM / GRU (Time-Series)",
      "Feature Engineering & Model Evaluation",
      "Experiment Tracking & Reporting",
    ],
  },
  {
    title: "Computer Vision & Edge AI",
    items: [
      "OpenCV, YOLOv8",
      "ResNet-152 Feature Extraction",
      "Model Quantization Basics",
      "Deployment Concepts",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Python, C, MATLAB", "Git", "Technical Documentation", "Team Collaboration"],
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 });

  return (
    <div className="app">
      <div className="navbar">
        <div className="container navbar-inner">
          <div className="brand">Sayed Shahriar Alam</div>
          <div className="nav-links">
            <button className="pill" onClick={() => scrollToId("home")}>
              Home
            </button>
            <button className="pill" onClick={() => scrollToId("about")}>
              About
            </button>
            <button className="pill" onClick={() => scrollToId("projects")}>
              Projects
            </button>
            <button className="pill" onClick={() => scrollToId("skills")}>
              Skills
            </button>
          </div>
        </div>
        <motion.div
          style={{ scaleX: progress, transformOrigin: "0% 50%", height: 2, background: "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(168,85,247,0.9), rgba(34,211,238,0.85))" }}
        />
      </div>

      <main className="scroll" ref={scrollRef}>
        <section id="home" className="page">
          <div className="container">
            <div className="grid-hero">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="h1">Electrical & Electronic Engineer</h1>
                <div className="sub">
                  Machine Learning • Embedded Systems • Computer Vision • Data & Signal Processing
                </div>
                <div className="sub muted" style={{ maxWidth: 720 }}>
                  I build intelligent systems that connect real-world hardware with data-driven decision making.
                </div>
                <div className="cta-row">
                  <a className="btn btn-primary" href="/Sayed_Shahriar_Alam_CV.pdf">
                    Download CV
                  </a>
                  <button className="btn" onClick={() => scrollToId("projects")}>
                    View Projects
                  </button>
                  <button className="btn" onClick={() => scrollToId("about")}>
                    About Me
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="avatar" aria-label="Profile photo">
                  <img src={profileImage} alt="Sayed Shahriar Alam" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="page">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="two-col"
            >
              <div className="card card-pad">
                <h2 className="section-title">About</h2>
                <div className="muted" style={{ fontSize: "1rem" }}>
                  I’m a fresh Electrical & Electronic Engineering graduate from BRAC University with a double major
                  in Electronics and Artificial Intelligence.
                  <br />
                  <br />
                  My experience sits at the intersection of hardware systems and machine learning—working with
                  embedded devices, sensor data, and data-driven models to build reliable intelligent solutions.
                </div>
              </div>

              <div className="card card-pad">
                <h2 className="section-title">Education</h2>
                <div style={{ display: "grid", gap: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>B.Sc. in Electrical & Electronic Engineering</div>
                    <div className="muted">BRAC University | 2026</div>
                  </div>
                  <div className="muted">Double Major: Electronics & Artificial Intelligence</div>
                  <div className="muted">CGPA: 3.44 / 4.00</div>
                  <div className="tags" style={{ marginTop: 6 }}>
                    <span className="tag">Embedded Systems</span>
                    <span className="tag">Digital Logic</span>
                    <span className="tag">Machine Learning</span>
                    <span className="tag">Signal & Data Processing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="page">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="section-title">Projects</h2>
              <div className="muted" style={{ marginBottom: 14 }}>
                Each project has a hyperlink (`href`) that you can replace later with GitHub / paper / demo links.
              </div>
              <div className="project-grid">
                {projects.map((p, i) => (
                  <motion.a
                    key={p.title}
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                    className="card card-pad project-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="project-title">{p.title}</div>
                    <div className="project-desc">{p.description}</div>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="muted" style={{ fontSize: ".92rem" }}>
                        Open link
                      </span>
                      <span className="pill">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="page">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="two-col"
            >
              <div>
                <h2 className="section-title">Skills</h2>
                <div className="project-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  {skills.map((s, idx) => (
                    <motion.div
                      key={s.title}
                      className="card card-pad"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.42, ease: "easeOut", delay: idx * 0.04 }}
                    >
                      <div style={{ fontWeight: 800, marginBottom: 10 }}>{s.title}</div>
                      <div className="muted" style={{ display: "grid", gap: 6 }}>
                        {s.items.map((it) => (
                          <div key={it}>• {it}</div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="card card-pad" style={{ display: "grid", alignContent: "start", gap: 12 }}>
                <h2 className="section-title">Conclusion</h2>
                <div className="muted">
                  I enjoy building reliable, measurable systems—from sensors and embedded logic to ML pipelines and
                  computer vision.
                </div>
                <div className="muted">
                  If you want, tell me:
                  <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
                    <div>• Your email + LinkedIn + GitHub</div>
                    <div>• Whether you want a “Contact” page</div>
                    <div>• Project links (GitHub/demo) to replace the `href: "#"` placeholders</div>
                  </div>
                </div>
                <div className="cta-row">
                  <button className="btn btn-primary" onClick={() => scrollToId("home")}>
                    Back to Top
                  </button>
                  <button className="btn" onClick={() => scrollToId("projects")}>
                    Projects
                  </button>
                </div>
                <div className="muted" style={{ marginTop: 18, fontSize: ".95rem" }}>
                  © 2026 Sayed Shahriar Alam
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}