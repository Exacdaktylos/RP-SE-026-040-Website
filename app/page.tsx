"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["Domain", "domain"],
  ["Milestones", "milestones"],
  ["Documents", "documents"],
  ["Presentations", "presentations"],
  ["About Us", "about-us"],
  ["Contact Us", "contact-us"],
];

const features = [
  {
    id: "voice",
    number: "01",
    label: "Voice",
    title: "Offline Voice Intelligence & Safe System Integration",
    text:
      "BUDDY supports offline wake-word interaction, local speech recognition, deterministic voice-controlled movement and local speech output while maintaining a safety boundary between high-level commands and physical actuation.",
    status: "Physically validated",
    tags: ["Vosk", "Piper", "Python", "ROS 2 Jazzy"],
  },
  {
    id: "vision",
    number: "02",
    label: "Vision",
    title: "Visual Intelligence & Human-Aware Interaction",
    text:
      "The visual subsystem supports known and unknown person recognition, expression cues, enrolment, adaptive object learning, face tracking and camera-based companion interaction.",
    status: "Subsystem validated",
    tags: ["OpenCV", "DeepFace", "MobileNetV2", "MediaPipe"],
  },
  {
    id: "navigation",
    number: "03",
    label: "Navigation",
    title: "Obstacle-Aware Navigation & Human Following",
    text:
      "Navigation research combines physical ultrasonic safety sensing with A* planning, field-of-view reasoning, PID-style following, search behaviour and dynamic replanning in simulation.",
    status: "Mixed validation",
    tags: ["A*", "Ursina", "PID", "Ultrasonic sensing"],
  },
];

const team = [
  {
    initials: "AU",
    name: "Ashandth Uthayashankar",
    id: "IT22272522",
    role: "Offline Voice Intelligence & System Integration",
    focus:
      "Offline Voice Intelligence, Personalized Interaction, and Safety-Aware System Integration",
    description:
      "Responsible for offline voice interaction and significant system-level integration, deployment, hardware coordination and safety-aware movement integration.",
    accent: "blue",
    status: "Implemented",
    responsibilities: [
      "Wake-word interaction using the keyword Buddy",
      "Offline speech recognition using Vosk",
      "Intent recognition and deterministic command processing",
      "Piper text-to-speech integration",
      "Voice-controlled physical movement commands",
      "ROS 2 voice and movement integration",
      "Safety-aware command flow and system integration",
      "Startup, deployment and hardware integration support",
    ],
    tech: [
      "Python",
      "Vosk",
      "Piper",
      "scikit-learn",
      "ROS 2 Jazzy",
      "Raspberry Pi",
    ],
  },
  {
    initials: "SA",
    name: "Sobiya Anton Suresh",
    id: "IT22203694",
    role: "Visual Intelligence & Companion Application",
    focus:
      "Face Recognition, Emotion-Aware Interaction, Human Fall Detection, and Adaptive Object Learning",
    description:
      "Responsible for the visual intelligence pipeline and primarily responsible for the Flutter companion application used to review and interact with visual events.",
    accent: "violet",
    status: "Implemented",
    responsibilities: [
      "Known and unknown person recognition",
      "Local face enrolment",
      "Facial-expression cue analysis",
      "Adaptive object learning",
      "Human fall-detection logic",
      "Pan/tilt face tracking",
      "Camera streaming and media handling",
      "Flutter companion application",
    ],
    tech: [
      "Python",
      "OpenCV",
      "DeepFace",
      "MobileNetV2",
      "MediaPipe",
      "Flask",
      "Flutter",
    ],
  },
  {
    initials: "YW",
    name: "S. S. Y. Wickramasinghe",
    fullName: "Yohan Wickramasinghe",
    id: "IT21816086",
    role: "Navigation, Obstacle Avoidance & Human Following",
    focus:
      "Autonomous Navigation, Obstacle Avoidance, Human Following, and 2D Path Planning",
    description:
      "Responsible for navigation research including obstacle awareness, path planning, target following, recovery behaviour and dynamic replanning.",
    accent: "orange",
    status: "Implemented / Simulation validated",
    responsibilities: [
      "Obstacle-aware navigation research",
      "A* 2D path planning",
      "PID-style human following",
      "Field-of-view and occlusion reasoning",
      "Search and recovery behaviour",
      "Dynamic replanning",
      "Ursina-based 3D-visualised 2D simulation",
      "Project website development",
    ],
    tech: [
      "Python",
      "ROS 2 Jazzy",
      "A*",
      "Ursina",
      "PID",
      "Ultrasonic sensors",
    ],
  },
];

const milestones = [
  [
    "01",
    "Project Proposal",
    "Initial project scope, research problem, objectives and methodology.",
    "16 March 2026",
    "TBC",
    "Completed",
  ],
  [
    "02",
    "Progress Presentation 1",
    "First formal assessment of research progress and component development.",
    "11 May 2026",
    "TBC",
    "Completed",
  ],
  [
    "03",
    "Progress Presentation 2",
    "Second formal assessment covering implementation, integration and progress.",
    "31 August 2026",
    "TBC",
    "Completed",
  ],
  [
    "04",
    "Final Assessment / Final Presentation",
    "Final integrated solution, research findings and project presentation.",
    "21 October 2026",
    "TBC",
    "Scheduled",
  ],
  [
    "05",
    "Viva",
    "Individual and group defence of research decisions, implementation and validation evidence.",
    "21 October 2026",
    "TBC",
    "Scheduled",
  ],
];

const documents = [
  {
    type: "PDF",
    title: "Progress Report",
    text: "Group progress report documenting the development status and research progress of BUDDY.",
    status: "Available",
    href: "/documents/progress-report.pdf",
  },
  {
    type: "PDF",
    title: "Ashandth Individual Proposal",
    text: "Project proposal for offline voice interaction, personalised interaction and safety-aware system integration.",
    status: "Available",
    href: "/documents/ashandth-individual-proposal.pdf",
  },
  {
    type: "PDF",
    title: "Sobiya Individual Proposal",
    text: "Project proposal for face recognition, emotion-aware interaction and visual intelligence.",
    status: "Available",
    href: "/documents/sobiya-individual-proposal.pdf",
  },
  {
    type: "PDF",
    title: "Yohan Individual Proposal",
    text: "Project proposal for autonomous navigation, obstacle avoidance and human following.",
    status: "Available",
    href: "/documents/yohan-individual-proposal.pdf",
  },
  {
    type: "PDF",
    title: "Research Paper",
    text: "Research paper presenting BUDDY's integrated offline voice, visual perception, navigation and safety-aware control architecture.",
    status: "Available",
    href: "/documents/buddy-research-paper.pdf",
  },
  {
    type: "PDF",
    title: "Ashandth Individual Thesis",
    text: "Offline Voice Intelligence, Personalized Interaction, and Safety-Aware System Integration.",
    status: "Available",
    href: "/documents/ashandth-individual-thesis.pdf",
  },
  {
    type: "PDF",
    title: "Sobiya Individual Thesis",
    text: "Visual Intelligence for Face Recognition, Emotion-Aware Interaction, Human Fall Detection, and Adaptive Object Learning.",
    status: "Available",
    href: "/documents/sobiya-individual-thesis.pdf",
  },
  {
    type: "PDF",
    title: "Yohan Individual Thesis",
    text: "Autonomous Navigation, Obstacle Avoidance, Human Following, and 2D Path Planning.",
    status: "Available",
    href: "/documents/yohan-individual-thesis.pdf",
  },
  {
    type: "PDF",
    title: "Common Integrated Solution Report",
    text: "Final integrated solution report documenting the complete BUDDY research system and the three individual research components.",
    status: "Available",
    href: "/documents/common-integrated-solution-report.pdf",
  },
];

const presentations = [
  {
    type: "PDF",
    title: "Proposal Presentation",
    text: "Initial BUDDY research proposal presentation covering the research problem, proposed solution and individual research components.",
    status: "Available",
    href: "/presentations/proposal-presentation.pdf",
  },
  {
    type: "PDF",
    title: "Progress Presentation 1",
    text: "First formal research progress presentation covering prototype development and individual component progress.",
    status: "Available",
    href: "/presentations/progress-presentation-1.pdf",
  },
  {
    type: "PDF",
    title: "Progress Presentation 2",
    text: "Second formal progress presentation covering integrated architecture, safety, testing and implementation evidence.",
    status: "Available",
    href: "/presentations/progress-presentation-2.pdf",
  },
  {
    type: "PDF",
    title: "Final Presentation",
    text: "Final integrated BUDDY research presentation and defence.",
    status: "Scheduled",
    href: null,
  },
];

function Status({ children }: { children: React.ReactNode }) {
  const value = String(children).toLowerCase();

  const style =
    value.includes("complete") ||
value.includes("implemented") ||
value.includes("validated") ||
value.includes("available")
      ? "complete"
      : value.includes("progress") ||
          value.includes("development") ||
          value.includes("prototype") ||
          value.includes("scheduled") ||
          value.includes("mixed")
        ? "progress"
        : "planned";

  return <span className={`status status-${style}`}>{children}</span>;
}

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {/* NAVIGATION */}
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <a className="brand" href="#home" aria-label="BUDDY home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>

          <span>BUDDY</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-status" href="#milestones">
          <span /> Research 2026
        </a>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <p>Explore BUDDY</p>

        {navItems.map(([label, id], index) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </div>

      {/* HOME */}
      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Research Project R26-SE-040
          </div>

          <h1>
            A companion robot that can{" "}
            <em>listen, observe and move safely.</em>
          </h1>

          <p className="hero-lede">
            BUDDY is an affordable intelligent robot-dog research prototype
            integrating offline voice interaction, visual intelligence,
            environment-aware navigation and safety-supervised physical
            movement on Raspberry Pi-class hardware.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#domain">
              Explore the research <span>↘</span>
            </a>

            <a className="button button-secondary" href="#about-us">
              Meet the team <span>→</span>
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span>Institution</span>
              <strong>SLIIT</strong>
            </div>

            <div>
              <span>Programme</span>
              <strong>Software Engineering</strong>
            </div>

            <div>
              <span>Group</span>
              <strong>R26-SE-040</strong>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="BUDDY capability system illustration"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="system-tag tag-voice">
            <span>01</span> Listens
          </div>

          <div className="system-tag tag-vision">
            <span>02</span> Observes
          </div>

          <div className="system-tag tag-emotion">
            <span>03</span> Understands context
          </div>

          <div className="system-tag tag-motion">
            <span>04</span> Moves safely
          </div>

          <div className="buddy-core">
            <div className="core-grid" />

            <span className="core-kicker">BUDDY / AWAKE</span>

            <div className="buddy-face" aria-hidden="true">
              <i />
              <i />
              <span />
            </div>

            <p>
              MULTIMODAL SYSTEM
              <br />
              ACTIVE
            </p>

            <div className="core-pulse" />
          </div>

          <div className="telemetry telemetry-top">
            LOCAL-FIRST AI
          </div>

          <div className="telemetry telemetry-bottom">
            SAFETY SUPERVISION / ACTIVE
          </div>
        </div>

        <div className="hero-scroll">
          Scroll to discover <span>↓</span>
        </div>
      </section>

      {/* DOMAIN */}
      <section id="domain" className="about section-shell">
        <SectionLabel index="01">Research domain</SectionLabel>

        <div className="split-heading">
          <h2>
            Affordable multimodal robotics with{" "}
            <em>safety at the centre.</em>
          </h2>

          <div>
            <p>
              BUDDY investigates how offline interaction, visual perception,
              navigation and physical actuation can be combined on an
              affordable robotic platform.
            </p>

            <p>
              The project focuses on modularity, local processing and a clear
              separation between intelligent decisions and physical motor
              authority.
            </p>
          </div>
        </div>

        <div className="problem-grid">
          <article className="problem-card problem-card-wide">
            <span className="card-index">LITERATURE SURVEY</span>

            <h3>
              Companion robotics combines human-robot interaction,
              perception and autonomous movement.
            </h3>

            <p>
              Existing research provides mature techniques for speech
              recognition, face analysis, computer vision and mobile-robot
              navigation. However, many advanced platforms depend on expensive
              hardware, proprietary ecosystems or continuous cloud
              connectivity.
            </p>

            <div className="gap-visual" aria-hidden="true">
              <span>Research focus</span>

              <div>
                <i style={{ width: "88%" }} />
                <b>Advanced companion capability</b>
              </div>

              <div>
                <i style={{ width: "58%" }} />
                <b>Affordable accessible platforms</b>
              </div>
            </div>
          </article>

          <article className="problem-card">
            <span className="card-index">RESEARCH GAP</span>

            <h3>Integration is the real challenge.</h3>

            <p>
              Speech, vision and navigation methods exist independently, but
              combining them safely on resource-constrained hardware introduces
              timing, sensing, integration and physical-safety challenges.
            </p>

            <span className="card-symbol">⌘</span>
          </article>

          <article className="problem-card accent-card">
            <span className="card-index">RESEARCH PROBLEM</span>

            <h3>
              How can affordable hardware support intelligent behaviour without
              sacrificing physical safety?
            </h3>

            <p>
              BUDDY explores offline interaction, visual awareness,
              environment sensing and autonomous behaviour while preserving a
              predictable safety boundary around movement.
            </p>

            <div className="mini-pills">
              <span>Affordable</span>
              <span>Offline-first</span>
              <span>Safety-aware</span>
            </div>
          </article>
        </div>
      </section>

      {/* RESEARCH COMPONENTS */}
      <section className="research section-shell">
        <SectionLabel index="02">Research components</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Three research streams.
            <br />
            <em>One integrated robot.</em>
          </h2>

          <p>
            Each component was researched independently and then integrated
            through shared interfaces and system-level safety logic.
          </p>
        </div>

        <div className="feature-console">
          <div
            className="feature-list"
            role="tablist"
            aria-label="BUDDY research capabilities"
          >
            {features.map((feature) => (
              <button
                key={feature.id}
                role="tab"
                aria-selected={activeFeature.id === feature.id}
                className={
                  activeFeature.id === feature.id ? "active" : ""
                }
                onClick={() => setActiveFeature(feature)}
              >
                <span>{feature.number}</span>

                <strong>{feature.label}</strong>

                <i>↗</i>
              </button>
            ))}
          </div>

          <div
            className="feature-detail"
            role="tabpanel"
            key={activeFeature.id}
          >
            <div className="detail-topline">
              <span>RESEARCH STREAM / {activeFeature.number}</span>

              <Status>{activeFeature.status}</Status>
            </div>

            <div
              className={`capability-graphic graphic-${activeFeature.id}`}
              aria-hidden="true"
            >
              <div className="capability-ring ring-a" />
              <div className="capability-ring ring-b" />

              <div className="capability-node">
                {activeFeature.label.slice(0, 1)}
              </div>

              <span className="signal signal-a" />
              <span className="signal signal-b" />
              <span className="signal signal-c" />
            </div>

            <h3>{activeFeature.title}</h3>

            <p>{activeFeature.text}</p>

            <div className="tag-row">
              {activeFeature.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH OBJECTIVES */}
      <section className="system-section">
        <div className="section-shell">
          <SectionLabel index="03">Research objectives</SectionLabel>

          <div className="section-heading-row">
            <h2>
              Intelligence above.
              <br />
              <em>Safety below.</em>
            </h2>

            <p>
              BUDDY separates higher-level AI intentions from physical motor
              authority so perception or interaction components cannot bypass
              safety supervision.
            </p>
          </div>

          <div
            className="architecture"
            aria-label="BUDDY system architecture"
          >
            <div className="arch-column arch-inputs">
              <span className="arch-caption">01 / INPUT</span>

              <article>
                <b>Voice</b>
                <p>Wake-word, speech and commands</p>
                <span>◌</span>
              </article>

              <article>
                <b>Camera</b>
                <p>People, expressions and objects</p>
                <span>◉</span>
              </article>

              <article>
                <b>Ultrasonic</b>
                <p>Environment and obstacle sensing</p>
                <span>◇</span>
              </article>
            </div>

            <div className="arch-connector">
              <span />
              <i>ROS 2</i>
              <span />
            </div>

            <div className="arch-core">
              <span className="arch-caption">
                02 / MULTIMODAL CORE
              </span>

              <div className="arch-core-box">
                <div className="core-title">
                  <span>B</span>

                  <div>
                    <strong>BUDDY CORE</strong>
                    <small>ROS 2 JAZZY</small>
                  </div>
                </div>

                <ul>
                  <li>
                    Voice <span>Validated</span>
                  </li>

                  <li>
                    Vision <span>Validated</span>
                  </li>

                  <li>
                    Navigation <span>Integrated</span>
                  </li>

                  <li>
                    Robot state <span>Active</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="arch-connector">
              <span />
              <i>SAFE CMD</i>
              <span />
            </div>

            <div className="arch-output">
              <span className="arch-caption">03 / ACTION</span>

              <article>
                <div className="safety-badge">
                  SAFETY PRIORITY
                </div>

                <h3>Safety Supervisor & Motor Executor</h3>

                <p>
                  High-level movement intentions are checked against current
                  safety state before commands are allowed to reach the motor
                  drivers.
                </p>

                <div className="output-list">
                  <span>Movement</span>
                  <span>Obstacle state</span>
                  <span>Safe stop</span>
                  <span>Motor control</span>
                </div>
              </article>
            </div>
          </div>

          <div className="engineering-grid">
            <article>
              <span className="engineering-number">O1</span>

              <div>
                <h3>Offline interaction</h3>
                <p>
                  Practical local voice interaction and deterministic
                  voice-controlled movement.
                </p>
              </div>
            </article>

            <article>
              <span className="engineering-number">O2</span>

              <div>
                <h3>Visual awareness</h3>
                <p>
                  Person-aware interaction and user-reviewable visual events.
                </p>
              </div>
            </article>

            <article>
              <span className="engineering-number">O3</span>

              <div>
                <h3>Obstacle awareness</h3>
                <p>
                  Safe movement and a foundation for autonomous indoor
                  behaviour.
                </p>
              </div>
            </article>

            <article>
              <span className="engineering-number">O4</span>

              <div>
                <h3>Safety separation</h3>
                <p>
                  High-level AI and navigation cannot directly bypass physical
                  motor safety.
                </p>
              </div>
            </article>

            <article>
              <span className="engineering-number">O5</span>

              <div>
                <h3>System integration</h3>
                <p>
                  Reusable interfaces and deployment tooling connect the
                  research components.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="hardware section-shell">
        <SectionLabel index="04">Physical platform</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Accessible hardware.
            <br />
            <em>Research-grade integration.</em>
          </h2>

          <p>
            The physical platform uses affordable replaceable components while
            preserving independent power, sensing and motor-control concerns.
          </p>
        </div>

        <div className="hardware-board">
          <div className="hardware-stage">
            <div className="board-label board-label-camera">
              <span>01</span>
              <b>Camera Module 2</b>
              <small>Visual perception</small>
            </div>

            <div className="board-label board-label-mics">
              <span>02</span>
              <b>AB13X microphone</b>
              <small>Validated voice input</small>
            </div>

            <div className="board-label board-label-pi">
              <span>03</span>
              <b>Raspberry Pi 4B</b>
              <small>4 GB · ROS 2 Jazzy</small>
            </div>

            <div className="board-label board-label-esp">
              <span>04</span>
              <b>TB6612FNG ×2</b>
              <small>Motor control</small>
            </div>

            <div className="board-label board-label-sensors">
              <span>05</span>
              <b>HC-SR04 ×4</b>
              <small>Directional obstacle sensing</small>
            </div>

            <div className="board-label board-label-power">
              <span>06</span>
              <b>Protected power system</b>
              <small>Integrated</small>
            </div>

            <div
              className="robot-outline"
              aria-label="BUDDY robot image area"
            >
              <span>BUDDY PROTOTYPE</span>

              <strong>
                Final robot
                <br />
                research platform
              </strong>

              <i>R26-SE-040</i>
            </div>
          </div>

          <aside>
            <span className="aside-label">POWER & SAFETY</span>

            <h3>Stable compute. Separate actuator demand.</h3>

            <p>
              The Raspberry Pi receives regulated power while motors and servos
              are powered through appropriate driver and regulation paths with
              a common reference ground.
            </p>

            <div className="power-flow">
              <span>Battery</span>
              <i>→</i>
              <span>Protection</span>
              <i>→</i>

              <div>
                <span>Compute</span>
                <span>Actuators</span>
                <span>Accessories</span>
              </div>
            </div>

            <div className="warning">
              <b>!</b>

              <p>
                Movement authority remains behind the system safety boundary.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="mobile-app-section">
        <div className="section-shell mobile-app-grid">
          <div className="mobile-copy">
            <SectionLabel index="05">
              Companion application
            </SectionLabel>

            <h2>
              Visual awareness.
              <br />
              <em>Available to the user.</em>
            </h2>

            <p>
              The Flutter companion application supports user-facing access to
              visual information produced by BUDDY and forms part of Sobiya’s
              visual-intelligence research component.
            </p>

            <ul>
              <li>
                <span>01</span>
                Known and unknown person status
              </li>

              <li>
                <span>02</span>
                Unknown-person enrolment
              </li>

              <li>
                <span>03</span>
                Camera and media access
              </li>

              <li>
                <span>04</span>
                Visual interaction history
              </li>
            </ul>

            <Status>Subsystem functional</Status>
          </div>

          <div
            className="phone-stage"
            aria-label="Mobile application preview"
          >
            <div className="phone phone-back">
              <div className="phone-screen">
                <span className="phone-kicker">
                  BUDDY / VISUAL EVENT
                </span>

                <div className="map-grid">
                  <i />
                  <i />
                  <i />
                </div>

                <strong>Person detected</strong>

                <div className="phone-stats">
                  <span>
                    KNOWN
                    <small>Identity</small>
                  </span>

                  <span>
                    LIVE
                    <small>Camera</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="phone phone-front">
              <div className="phone-screen">
                <div className="phone-header">
                  <span>B</span>
                  <i>•••</i>
                </div>

                <p>Visual intelligence</p>

                <h3>BUDDY is connected.</h3>

                <div className="robot-state">
                  <div>B</div>

                  <span>
                    <i />
                    Online
                  </span>
                </div>

                <div className="control-pad">
                  <button aria-label="Camera">◉</button>
                  <button aria-label="Media">□</button>
                  <button aria-label="Person">◎</button>
                  <button aria-label="History">↺</button>
                  <button aria-label="Home">⌂</button>
                </div>

                <small>COMPANION APPLICATION</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section className="development section-shell">
        <SectionLabel index="06">Validation evidence</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Different claims.
            <br />
            <em>Different evidence levels.</em>
          </h2>

          <div>
            <p>
              BUDDY distinguishes physical validation, subsystem validation,
              simulation validation and continuing work instead of presenting
              every feature as equally complete.
            </p>

            <div className="method-line">
              <span>Implement</span>
              <i>→</i>
              <span>Test</span>
              <i>→</i>
              <span>Verify</span>
              <i>→</i>
              <span>Report</span>
            </div>
          </div>
        </div>

        <div className="milestone-list">
  <article>
    <span>01</span>

    <div>
      <h3>Physical validation</h3>
      <p>
        Cold boot, offline voice interaction, physical directional
        movement, four-direction ultrasonic sensing, dynamic obstacle
        stop/resume and camera face following.
      </p>
    </div>

    <Status>Validated</Status>
  </article>

  <article>
    <span>02</span>

    <div>
      <h3>Subsystem validation</h3>
      <p>
        Known/unknown person recognition, expression cues, enrolment,
        adaptive learning of mug, box and phone, and camera/media
        functionality.
      </p>
    </div>

    <Status>Validated</Status>
  </article>

  <article>
    <span>03</span>

    <div>
      <h3>Simulation validation</h3>
      <p>
        A*, field-of-view reasoning, PID following, dynamic replanning,
        search, recovery and waiting behaviour in the Ursina-based
        3D-visualised 2D environment.
      </p>
    </div>

    <Status>Validated</Status>
  </article>

  <article>
    <span>04</span>

    <div>
      <h3>Continuing work</h3>
      <p>
        Full-body physical fall validation, complete physical patrol and
        localisation, dual-microphone acoustic localisation and fully
        concurrent multimodal operation.
      </p>
    </div>

    <Status>Continuing work</Status>
  </article>
</div>

        <div className="evaluation-note">
          <span>VERIFIED PROJECT EVIDENCE</span>

          <h3>
            Results are reported only at the level supported by the performed
            tests.
          </h3>

          <p>
            BUDDY does not claim population-level accuracy, production
            reliability or complete autonomous operation where such evidence
            has not been established.
          </p>

          <Status>Evidence-aware reporting</Status>
        </div>
      </section>

      {/* MILESTONES */}
      <section id="milestones" className="development section-shell">
        <SectionLabel index="07">Academic milestones</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Research progress.
            <br />
            <em>Assessment by assessment.</em>
          </h2>

          <p>
  Key academic assessments completed throughout the BUDDY research
  project, with confirmed presentation dates and official mark
  allocations to be added once verified.
</p>
        </div>

        <div className="milestone-list">
  {milestones.map(([number, title, desc, date, marks, status]) => (
    <article key={number}>
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{desc}</p>

        <small>
          Date: {date} · Marks: {marks}
        </small>
      </div>

      <Status>{status}</Status>
    </article>
  ))}
</div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="resources section-shell">
        <SectionLabel index="08">Documents</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Research documentation.
            <br />
            <em>Collected in one place.</em>
          </h2>

          <p>
  Project proposals, progress documentation, research publications
  and final reports are available here for viewing or download.
</p>
        </div>

        <div className="resource-grid">
  {documents.map((document) => (
    <a
      key={document.title}
      href={document.href}
      target="_blank"
      rel="noreferrer"
    >
      <article>
        <span>{document.type}</span>

        <div>
          <h3>{document.title}</h3>
          <p>{document.text}</p>
        </div>

        <Status>{document.status}</Status>
      </article>
    </a>
  ))}
</div>
      </section>

      {/* PRESENTATIONS */}
      <section id="presentations" className="resources section-shell">
        <SectionLabel index="09">Presentations</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Presentation archive.
            <br />
            <em>From proposal to final defence.</em>
          </h2>

          <p>
  Previous research presentations are available here, while the final
  presentation will be added after completion.
</p>
        </div>

        <div className="resource-grid">
  {presentations.map((presentation) =>
    presentation.href ? (
      <a
        key={presentation.title}
        href={presentation.href}
        target="_blank"
        rel="noreferrer"
      >
        <article>
          <span>{presentation.type}</span>

          <div>
            <h3>{presentation.title}</h3>
            <p>{presentation.text}</p>
          </div>

          <Status>{presentation.status}</Status>
        </article>
      </a>
    ) : (
      <article key={presentation.title}>
        <span>{presentation.type}</span>

        <div>
          <h3>{presentation.title}</h3>
          <p>{presentation.text}</p>
        </div>

        <Status>{presentation.status}</Status>
      </article>
    ),
  )}
</div>
      </section>

      {/* ABOUT US */}
      <section id="about-us" className="team-section">
        <div className="section-shell">
          <SectionLabel index="10">About us</SectionLabel>

          <div className="section-heading-row">
            <h2>
              Three research components.
              <br />
              <em>One shared BUDDY system.</em>
            </h2>

            <p>
              Each member owns a distinct research contribution while working
              together on integration, testing and the final embodied
              prototype.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article
                key={member.id}
                className={`team-card accent-${member.accent}`}
              >
                <div className="member-top">
                  <span className="member-avatar">
                    {member.initials}
                  </span>

                  <span className="member-id">{member.id}</span>
                </div>

                <span className="member-role">{member.role}</span>

                <h3>{member.name}</h3>

                {member.fullName && (
                  <small className="full-name">
                    {member.fullName}
                  </small>
                )}

                <h4>{member.focus}</h4>

                <p>{member.description}</p>

                <ul className="member-responsibilities">
                  {member.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="tag-row member-tags">
                  {member.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Status>{member.status}</Status>
              </article>
            ))}
          </div>

          <div className="supervision-card">
            <div className="supervisor-mark">PA</div>

            <div>
              <span>RESEARCH SUPERVISOR</span>

              <h3>Pradeep K. W. Abeygunawardhana</h3>

              <p>Supervisor</p>
            </div>

            <div className="supervision-copy">
              Providing research guidance, academic direction and technical
              evaluation throughout the BUDDY final-year research project.
            </div>

            <Status>Supervisor</Status>
          </div>

          <div className="supervision-card">
            <div className="supervisor-mark">SR</div>

            <div>
              <span>CO-SUPERVISOR</span>

              <h3>Samantha Rajapakse</h3>

              <p>Co-supervisor</p>
            </div>

            <div className="supervision-copy">
              Supporting the research team with academic review and guidance
              during the development and evaluation of the integrated system.
            </div>

            <Status>Co-supervisor</Status>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-us" className="resources section-shell">
        <SectionLabel index="11">Contact us</SectionLabel>

        <div className="section-heading-row">
          <h2>
            Interested in BUDDY?
            <br />
            <em>Get in touch.</em>
          </h2>

          <p>
            BUDDY is a final-year Software Engineering research project from
            the Sri Lanka Institute of Information Technology.
          </p>
        </div>

        <div className="problem-grid">
          <article className="problem-card problem-card-wide">
            <span className="card-index">PROJECT</span>

            <h3>R26-SE-040 — BUDDY</h3>

            <p>
              Department of Computing
              <br />
              Sri Lanka Institute of Information Technology
              <br />
              BSc (Hons) in Information Technology
              <br />
              Specialising in Software Engineering
            </p>

            <div className="mini-pills">
              <span>Robotics</span>
              <span>Artificial Intelligence</span>
              <span>Human-Robot Interaction</span>
            </div>
          </article>

          <article className="problem-card">
            <span className="card-index">EMAIL</span>

            <h3>Research team contact</h3>

            <p>
              Team email addresses can be added here once the final public
              contact details are confirmed.
            </p>

            <span className="card-symbol">@</span>
          </article>

          <article className="problem-card accent-card">
            <span className="card-index">SOURCE CODE</span>

            <h3>Follow the engineering work.</h3>

            <p>
              The BUDDY development repository contains the shared software,
              ROS 2 work and component integration history.
            </p>

            <div className="mini-pills">
              <span>GitHub</span>
              <span>ROS 2</span>
              <span>Open development</span>
            </div>
          </article>
        </div>

        <div className="github-callout">
          <div>
            <span>OPEN DEVELOPMENT</span>

            <h3>Explore the BUDDY repository.</h3>

            <p>
              Repository: <code>ashandth0309/R26-SE-040</code>
            </p>
          </div>

          <a
            href="https://github.com/ashandth0309/R26-SE-040"
            target="_blank"
            rel="noreferrer"
          >
            View repository <span>↗</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-shell">
        <SectionLabel index="12">
          Frequently asked
        </SectionLabel>

        <div className="faq-grid">
          <h2>
            Questions,
            <br />
            <em>answered clearly.</em>
          </h2>

          <div className="faq-list">
            <details>
              <summary>
                Is BUDDY fully completed?
                <span>+</span>
              </summary>

              <p>
                BUDDY has an integrated physical research prototype and multiple
                validated subsystems. Some advanced capabilities, including
                full physical patrol/localisation and full-body fall validation,
                remain continuing work.
              </p>
            </details>

            <details>
              <summary>
                Does BUDDY truly understand emotions?
                <span>+</span>
              </summary>

              <p>
                No. BUDDY uses visible facial-expression cues as contextual
                information. These cues do not provide perfect knowledge of a
                person's internal emotional state.
              </p>
            </details>

            <details>
              <summary>
                Is BUDDY completely offline?
                <span>+</span>
              </summary>

              <p>
                Core validated voice interaction is designed to operate locally.
                Optional intelligent extensions may use connected services, but
                they are not required for the core offline interaction path.
              </p>
            </details>

            <details>
              <summary>
                How does BUDDY keep movement safe?
                <span>+</span>
              </summary>

              <p>
                High-level movement intentions pass through an independent
                safety supervisor that checks current obstacle information
                before allowing safe commands to reach the motor executor.
              </p>
            </details>

            <details>
              <summary>
                Is BUDDY a commercial product?
                <span>+</span>
              </summary>

              <p>
                No. BUDDY is a final-year research prototype and an expandable
                platform for studying affordable multimodal companion robotics.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-main section-shell">
          <div className="footer-title">
            <span className="brand-mark">
              <i />
              <i />
            </span>

            <h2>BUDDY</h2>

            <p>
              Affordable multimodal intelligent
              <br />
              companion robot research prototype.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>RESEARCH</span>

              <a href="#home">Home</a>
              <a href="#domain">Domain</a>
              <a href="#milestones">Milestones</a>
            </div>

            <div>
              <span>RESOURCES</span>

              <a href="#documents">Documents</a>
              <a href="#presentations">Presentations</a>
              <a href="#about-us">About Us</a>
            </div>

            <div>
              <span>ACADEMIC</span>

              <p>R26-SE-040</p>
              <p>SLIIT</p>
              <p>Software Engineering</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom section-shell">
          <span>© 2026 BUDDY Research Team</span>

          <span>
            Built through research. Validated with care.
          </span>
        </div>
      </footer>
    </main>
  );
}
