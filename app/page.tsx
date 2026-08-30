"use client";

import { useEffect, useState } from "react";

const navItems = [["About", "about"], ["Research", "research"], ["System", "system"], ["Development", "development"], ["Team", "team"], ["Resources", "resources"]];

const features = [
  { id: "voice", number: "01", label: "Voice", title: "Offline-first voice interaction", text: "Wake-word detection, speech recognition and intent processing are being designed to keep essential interaction close to the robot.", status: "Research prototype", tags: ["Vosk", "Whisper", "Python", "Local AI"] },
  { id: "vision", number: "02", label: "Vision", title: "People-aware computer vision", text: "Camera-based face detection, known-user recognition and local enrolment support more personal, context-aware interaction.", status: "In development", tags: ["OpenCV", "Face recognition", "Edge vision"] },
  { id: "emotion", number: "03", label: "Emotion", title: "Responsible emotion observation", text: "BUDDY estimates visible facial expressions to inform more appropriate responses without claiming to perfectly understand how a person feels.", status: "Research prototype", tags: ["Facial cues", "Mood history", "Human context"] },
  { id: "navigation", number: "04", label: "Navigation", title: "Safety-led autonomous movement", text: "Obstacle awareness and safe stopping take priority over following, patrol and higher-level movement behaviour.", status: "In development", tags: ["Subsumption", "PID tracking", "Obstacle sensing"] },
  { id: "security", number: "05", label: "Security", title: "Mobile patrol and alerts", text: "The planned security layer brings patrol status, event alerts and remote visibility into one connected companion experience.", status: "Planned", tags: ["Patrol", "Alerts", "Remote view"] },
];

const team = [
  {
    initials: "AU", name: "Ashandth Uthayashankar", id: "IT22272522", role: "Voice Intelligence",
    focus: "Offline voice command recognition and intelligent voice interaction",
    description: "Exploring wake-word interaction, offline speech recognition, intent processing, conversational responses and ROS 2 integration.",
    accent: "blue", status: "Research Prototype",
    responsibilities: [
      "Wake-word interaction",
      "Offline speech recognition & speech-to-text",
      "Intent recognition & command processing",
      "Conversational responses & local AI integration",
      "Multi-microphone experimentation & sound direction research",
      "ROS 2 migration & integration of voice components",
    ],
    tech: ["Python", "Vosk", "Whisper", "pyttsx3", "Ollama", "ROS 2 Jazzy"],
  },
  {
    initials: "SA", name: "Sobiya Anton Suresh", id: "IT22203694", role: "Vision & Emotion",
    focus: "Face recognition and facial emotion recognition",
    description: "Developing user recognition, face enrolment, emotion observation and the human-context layer that informs companion behaviour.",
    accent: "violet", status: "Research Prototype",
    responsibilities: [
      "Face detection & known-user recognition",
      "Face enrolment",
      "Emotion observation & logging",
      "Daily mood / emotion visualization",
      "Integration with BUDDY intelligence layer",
      "Mobile-app emotional insight requirements",
    ],
    tech: ["Python", "OpenCV", "Facial recognition", "ML / DL"],
  },
  {
    initials: "YW", name: "S S Y Wickramasinghe", fullName: "Yohan Wickramasinghe", id: "IT21816086", role: "Navigation & Security",
    focus: "Navigation, autonomous patrol and security functionality",
    description: "Leading obstacle-aware movement, patrol logic, safety priorities, security alerts and the remote-control requirements of the mobile app.",
    accent: "orange", status: "In Development",
    responsibilities: [
      "Navigation research & obstacle detection",
      "Movement logic & patrol-route planning",
      "Navigation-state design (A* planning, dynamic replanning)",
      "Security-event concepts & emergency alerts",
      "Autonomous / manual control requirements",
      "Mobile app: remote control, patrol, security alerts, live camera",
    ],
    tech: ["ROS 2 Jazzy", "Obstacle sensors", "Raspberry Pi", "Mobile UI/UX"],
  },
];

const milestones = [
  ["01", "Requirements & scope", "Problem identification, feasibility and project scope definition.", "Complete"],
  ["02", "Git development workflow", "Feature-branch workflow, controlled milestones and code review practice.", "Complete"],
  ["03", "ROS 2 Jazzy environment", "Reproducible development environment on Ubuntu 24.04 with ROS 2 Jazzy.", "Complete"],
  ["04", "Workspace foundation", "Modular workspace structure with isolated packages and clear boundaries.", "Complete"],
  ["05", "Interface contracts", "14 custom interfaces — messages, services and actions — frozen for stability.", "Complete"],
  ["06", "Configuration & secrets", "Centralized YAML configuration with environment overrides and secrets out of Git.", "Complete"],
  ["07", "Centralized logging", "Structured logs with rotation, secret redaction and bounded disk usage.", "Complete"],
  ["08", "Hardware architecture", "Power domain, GPIO and safety architecture planning.", "Complete"],
  ["09", "Hardware verification", "Physical verification of component specifications and electrical values.", "In progress"],
  ["10", "Hardware integration", "Assembly and integration of verified hardware with the software stack.", "Planned"],
  ["11", "Robot intelligence integration", "Bringing voice, vision, emotion and navigation together into unified behaviour.", "Planned"],
  ["12", "Testing & evaluation", "Subsystem and end-to-end testing with verified evaluation results.", "Planned"],
];

function Status({ children }: { children: React.ReactNode }) {
  const value = String(children).toLowerCase();
  const style = value.includes("complete") || value.includes("implemented") ? "complete" : value.includes("progress") || value.includes("development") || value.includes("prototype") ? "progress" : "planned";
  return <span className={`status status-${style}`}>{children}</span>;
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><p>{children}</p></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="BUDDY home"><span className="brand-mark" aria-hidden="true"><i /><i /></span><span>BUDDY</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="nav-status" href="#development"><span /> Project active</a>
        <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <p>Explore BUDDY</p>
        {navItems.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
      </div>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Research Project R26-SE-040</div>
          <h1>A robot dog that notices <em>more than commands.</em></h1>
          <p className="hero-lede">BUDDY explores what happens when affordable robotics can listen, observe, move safely and respond with a little more human context.</p>
          <div className="hero-actions"><a className="button button-primary" href="#about">Explore the project <span>↘</span></a><a className="button button-secondary" href="#system">See how it works <span>→</span></a></div>
          <div className="hero-meta"><div><span>Institution</span><strong>SLIIT</strong></div><div><span>Programme</span><strong>Software Engineering</strong></div><div><span>Focus</span><strong>AI × Robotics</strong></div></div>
        </div>
        <div className="hero-visual" aria-label="BUDDY capability system illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="system-tag tag-voice"><span>01</span> Listens</div><div className="system-tag tag-vision"><span>02</span> Notices</div><div className="system-tag tag-emotion"><span>03</span> Responds</div><div className="system-tag tag-motion"><span>04</span> Moves</div>
          <div className="buddy-core"><div className="core-grid" /><span className="core-kicker">BUDDY / AWAKE</span><div className="buddy-face" aria-hidden="true"><i /><i /><span /></div><p>EDGE INTELLIGENCE<br />ONLINE</p><div className="core-pulse" /></div>
          <div className="telemetry telemetry-top">LAT 6.9271° N</div><div className="telemetry telemetry-bottom">LOCAL PROCESSING / ACTIVE</div>
        </div>
        <div className="hero-scroll">Scroll to discover <span>↓</span></div>
      </section>

      <section id="about" className="about section-shell">
        <SectionLabel index="01">The idea</SectionLabel>
        <div className="split-heading"><h2>A companion designed around <em>people,</em> not spectacle.</h2><div><p>BUDDY is a research prototype that brings voice, vision, emotional context, autonomous movement and household assistance into one modular robotic platform.</p><p>Its central challenge is simple: can useful companion intelligence be made more accessible without depending entirely on expensive hardware or constant cloud connectivity?</p></div></div>
        <div className="problem-grid">
          <article className="problem-card problem-card-wide"><span className="card-index">THE GAP</span><h3>Advanced robotic companions remain out of reach for most people.</h3><p>High costs, closed platforms and cloud dependence limit access for students, researchers and ordinary households.</p><div className="gap-visual" aria-hidden="true"><span>Capability</span><div><i style={{ width: "88%" }} /><b>Commercial platforms</b></div><div><i style={{ width: "52%" }} /><b>Accessible robotics</b></div></div></article>
          <article className="problem-card"><span className="card-index">OUR RESPONSE</span><h3>Modular by design.</h3><p>Independent subsystems can be tested, improved and integrated without rebuilding the entire robot.</p><span className="card-symbol">⌘</span></article>
          <article className="problem-card accent-card"><span className="card-index">THE PRINCIPLE</span><h3>Intelligence closer to the user.</h3><p>Offline-first, edge-capable processing reduces unnecessary cloud dependence while supporting faster local interaction.</p><div className="mini-pills"><span>Private</span><span>Responsive</span><span>Resilient</span></div></article>
        </div>
      </section>

      <section id="research" className="research section-shell">
        <SectionLabel index="02">Research components</SectionLabel>
        <div className="section-heading-row"><h2>Five capabilities.<br /><em>One behaviour system.</em></h2><p>BUDDY is not a single algorithm. It is a coordinated set of research components that listen, observe, decide and act.</p></div>
        <div className="feature-console">
          <div className="feature-list" role="tablist" aria-label="BUDDY research capabilities">{features.map((feature) => <button key={feature.id} role="tab" aria-selected={activeFeature.id === feature.id} className={activeFeature.id === feature.id ? "active" : ""} onClick={() => setActiveFeature(feature)}><span>{feature.number}</span><strong>{feature.label}</strong><i>↗</i></button>)}</div>
          <div className="feature-detail" role="tabpanel" key={activeFeature.id}>
            <div className="detail-topline"><span>CAPABILITY / {activeFeature.number}</span><Status>{activeFeature.status}</Status></div>
            <div className={`capability-graphic graphic-${activeFeature.id}`} aria-hidden="true"><div className="capability-ring ring-a" /><div className="capability-ring ring-b" /><div className="capability-node">{activeFeature.label.slice(0, 1)}</div><span className="signal signal-a" /><span className="signal signal-b" /><span className="signal signal-c" /></div>
            <h3>{activeFeature.title}</h3><p>{activeFeature.text}</p><div className="tag-row">{activeFeature.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="system" className="system-section"><div className="section-shell">
        <SectionLabel index="03">Inside BUDDY</SectionLabel>
        <div className="section-heading-row"><h2>Context in.<br /><em>Behaviour out.</em></h2><p>A layered architecture keeps human interaction, intelligence, safety and physical movement connected without letting any one subsystem compromise the whole.</p></div>
        <div className="architecture" aria-label="BUDDY system architecture">
          <div className="arch-column arch-inputs"><span className="arch-caption">01 / INPUT</span><article><b>Voice</b><p>Commands and conversation</p><span>◌</span></article><article><b>Camera</b><p>Face and expression cues</p><span>◉</span></article><article><b>Mobile</b><p>Control and remote status</p><span>◇</span></article></div>
          <div className="arch-connector"><span /><i>ROS 2</i><span /></div>
          <div className="arch-core"><span className="arch-caption">02 / INTELLIGENCE</span><div className="arch-core-box"><div className="core-title"><span>B</span><div><strong>BUDDY CORE</strong><small>ROS 2 JAZZY</small></div></div><ul><li>Voice <span>Active</span></li><li>Vision <span>Integrating</span></li><li>Navigation <span>Testing</span></li><li>Robot state <span>Active</span></li></ul></div></div>
          <div className="arch-connector"><span /><i>UART</i><span /></div>
          <div className="arch-output"><span className="arch-caption">03 / ACTION</span><article><div className="safety-badge">SAFETY PRIORITY</div><h3>ESP32 control layer</h3><p>Immediate obstacle response and low-level safety can override higher-level following or patrol behaviour.</p><div className="output-list"><span>Movement</span><span>Sensors</span><span>Safe stop</span><span>Alerts</span></div></article></div>
        </div>
        <div className="engineering-grid"><article><span className="engineering-number">14</span><div><h3>Custom interfaces</h3><p>Formal messages, services and actions create clear contracts between subsystems.</p></div></article><article><span className="engineering-number">03</span><div><h3>Foundation packages</h3><p><code>buddy_core</code>, <code>buddy_interfaces</code> and <code>buddy_bringup</code>.</p></div></article><article><span className="engineering-number">↺</span><div><h3>Offline-first</h3><p>Local processing is preferred where practical, with connected services treated as optional extensions.</p></div></article></div>
      </div></section>

      <section className="hardware section-shell">
        <SectionLabel index="04">Physical system</SectionLabel><div className="section-heading-row"><h2>Accessible parts.<br /><em>Considered architecture.</em></h2><p>The physical platform is designed around components that can be sourced, tested and replaced without depending on a premium proprietary robot.</p></div>
        <div className="hardware-board"><div className="hardware-stage">
          <div className="board-label board-label-camera"><span>01</span><b>Camera</b><small>Vision input</small></div><div className="board-label board-label-mics"><span>02</span><b>Dual microphones</b><small>Voice + direction research</small></div><div className="board-label board-label-pi"><span>03</span><b>Raspberry Pi 4</b><small>High-level intelligence</small></div><div className="board-label board-label-esp"><span>04</span><b>ESP32</b><small>Safety & control layer</small></div><div className="board-label board-label-sensors"><span>05</span><b>Obstacle sensors</b><small>Environment awareness</small></div><div className="board-label board-label-power"><span>06</span><b>Power system</b><small>Verification pending</small></div>
          <div className="robot-outline" aria-label="Robot product image placeholder"><span>PRODUCT IMAGE</span><strong>Coming after<br />hardware integration</strong><i>B / 01</i></div>
        </div><aside><span className="aside-label">POWER SAFETY</span><h3>Stable compute. Separate actuator demand.</h3><p>The Raspberry Pi requires regulated power, while motors and servos must never draw power through GPIO.</p><div className="power-flow"><span>Battery</span><i>→</i><span>Protection</span><i>→</i><div><span>Compute</span><span>Actuators</span><span>Accessories</span></div></div><div className="warning"><b>!</b><p>Unverified 5 V outputs must not connect directly to Raspberry Pi GPIO.</p></div></aside></div>
      </section>

      <section className="mobile-app-section"><div className="section-shell mobile-app-grid">
        <div className="mobile-copy"><SectionLabel index="05">Companion application</SectionLabel><h2>Control when needed.<br /><em>Awareness at a glance.</em></h2><p>The companion app is being designed as the bridge between BUDDY and the people it supports, bringing status, manual control, patrol information and alerts into one place.</p><ul><li><span>01</span>Robot status & connection health</li><li><span>02</span>Manual directional control</li><li><span>03</span>Patrol mode & security alerts</li><li><span>04</span>Mood and interaction history</li></ul><Status>UI in development</Status></div>
        <div className="phone-stage" aria-label="Mobile application preview placeholders"><div className="phone phone-back"><div className="phone-screen"><span className="phone-kicker">BUDDY / PATROL</span><div className="map-grid"><i /><i /><i /></div><strong>Route active</strong><div className="phone-stats"><span>04<small>Sensors</small></span><span>82%<small>Power</small></span></div></div></div><div className="phone phone-front"><div className="phone-screen"><div className="phone-header"><span>B</span><i>•••</i></div><p>Good afternoon</p><h3>BUDDY is ready.</h3><div className="robot-state"><div>B</div><span><i />Online</span></div><div className="control-pad"><button aria-label="Forward">↑</button><button aria-label="Left">←</button><button aria-label="Stop">●</button><button aria-label="Right">→</button><button aria-label="Back">↓</button></div><small>CONCEPT INTERFACE</small></div></div></div>
      </div></section>

      <section id="development" className="development section-shell">
        <SectionLabel index="06">Development journey</SectionLabel><div className="section-heading-row"><h2>Built one verified<br /><em>step at a time.</em></h2><div><p>A controlled workflow keeps the project honest about what is complete, what is being tested and what still lies ahead.</p><div className="method-line"><span>Implement</span><i>→</i><span>Test</span><i>→</i><span>Verify</span><i>→</i><span>Commit</span></div></div></div>
        <div className="milestone-list">{milestones.map(([number, title, desc, status]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div><Status>{status}</Status></article>)}</div>
        <div className="evaluation-note"><span>RESEARCH INTEGRITY</span><h3>Results will appear here when evaluation is complete.</h3><p>No accuracy, latency, reliability, runtime or cost figures will be published until they have been tested and verified.</p><Status>Evaluation pending</Status></div>
      </section>

      <section id="team" className="team-section"><div className="section-shell">
        <SectionLabel index="07">Research team</SectionLabel><div className="section-heading-row"><h2>Three disciplines.<br /><em>One shared system.</em></h2><p>Each contribution is independently researched and intentionally designed to meet at the BUDDY intelligence layer.</p></div>
        <div className="team-grid">{team.map((member) => <article key={member.id} className={`team-card accent-${member.accent}`}><div className="member-top"><span className="member-avatar">{member.initials}</span><span className="member-id">{member.id}</span></div><span className="member-role">{member.role}</span><h3>{member.name}</h3>{member.fullName && <small className="full-name">{member.fullName}</small>}<h4>{member.focus}</h4><p>{member.description}</p><ul className="member-responsibilities">{member.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-row member-tags">{member.tech.map((tag) => <span key={tag}>{tag}</span>)}</div><Status>{member.status}</Status></article>)}</div>
        <div className="supervision-card"><div className="supervisor-mark">PG</div><div><span>RESEARCH GUIDANCE</span><h3>Pradeep Gunawardana</h3><p>Research Supervisor</p></div><div className="supervision-copy">Supporting the team’s research direction, technical evaluation and academic progress throughout the project.</div><Status>Profile details pending</Status></div>
      </div></section>

      <section id="resources" className="resources section-shell">
        <SectionLabel index="08">Project resources</SectionLabel><div className="section-heading-row"><h2>The work behind<br /><em>the prototype.</em></h2><p>Project documentation, demonstrations and verified research outputs will be added here as they are approved for public release.</p></div>
        <div className="resource-grid"><article><span>PDF</span><div><h3>Research proposal</h3><p>Approved scope, objectives and methodology.</p></div><Status>Coming soon</Status></article><article><span>DOC</span><div><h3>Architecture notes</h3><p>ROS 2, hardware and interface documentation.</p></div><Status>Coming soon</Status></article><article><span>VID</span><div><h3>Prototype demonstrations</h3><p>Voice, vision, navigation and control demos.</p></div><Status>Coming soon</Status></article><article><span>IMG</span><div><h3>Development gallery</h3><p>Hardware, testing and research milestones.</p></div><Status>Coming soon</Status></article></div>
        <div className="github-callout"><div><span>OPEN DEVELOPMENT</span><h3>Follow the engineering journey.</h3><p>Repository: <code>ashandth0309/R26-SE-040</code> · Development branch: <code>buddy-ros2</code></p></div><a href="https://github.com/ashandth0309/R26-SE-040" target="_blank" rel="noreferrer">View repository <span>↗</span></a></div>
      </section>

      <section className="faq section-shell"><SectionLabel index="09">Frequently asked</SectionLabel><div className="faq-grid"><h2>Questions,<br /><em>answered clearly.</em></h2><div className="faq-list">
        <details><summary>Is BUDDY already fully completed?<span>+</span></summary><p>No. The software foundation and architecture are established, while hardware verification, subsystem integration and evaluation remain in progress or planned.</p></details>
        <details><summary>Does BUDDY truly understand emotions?<span>+</span></summary><p>No system can perfectly understand a person’s internal emotional state from a face. BUDDY explores facial emotion estimation as one contextual signal for more appropriate interaction.</p></details>
        <details><summary>Is BUDDY completely offline?<span>+</span></summary><p>BUDDY is offline-first and edge-capable. Essential interactions are designed to work locally where practical, although optional intelligent services may use connectivity.</p></details>
        <details><summary>Why use both Raspberry Pi and ESP32?<span>+</span></summary><p>The Raspberry Pi supports higher-level AI and ROS 2 processes, while the ESP32 provides a focused low-level safety and control layer with fast responses.</p></details>
        <details><summary>Is BUDDY a commercial product?<span>+</span></summary><p>BUDDY is currently a final-year research prototype and an expandable platform for studying affordable companion robotics.</p></details>
      </div></div></section>

      <footer><div className="footer-main section-shell"><div className="footer-title"><span className="brand-mark"><i /><i /></span><h2>BUDDY</h2><p>Affordable emotionally intelligent<br />AI-powered robot dog.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#about">About</a><a href="#research">Research</a><a href="#system">System</a></div><div><span>PROJECT</span><a href="#development">Development</a><a href="#team">Team</a><a href="#resources">Resources</a></div><div><span>ACADEMIC</span><p>R26-SE-040</p><p>SLIIT</p><p>Software Engineering</p></div></div></div><div className="footer-bottom section-shell"><span>© 2026 BUDDY Research Team</span><span>Built with curiosity, tested with care.</span></div></footer>
    </main>
  );
}