"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, GitBranch, BriefcaseBusiness, Mail,
  Menu, Database, Workflow, BarChart3, Code2, Film, ExternalLink,
  Download, Sparkles, Layers3, Terminal, ChevronRight
} from "lucide-react";
import { useState } from "react";


const skills = [
  {
    title: "Programming & Scripting",
    items: ["Python", "SQL", "Java", "Bash"],
    icon: Code2
  },
  {
    title: "Data Engineering",
    items: [
      "Data Ingestion",
      "ETL & ELT",
      "Data Transformation",
      "Data Validation",
      "Data Quality",
      "Data Pipelines"
    ],
    icon: Workflow
  },
  {
    title: "Databases & Data Warehousing",
    items: [
      "SQLite",
      "Relational Databases",
      "SQL Data Marts",
      "Database Design",
      "NoSQL"
    ],
    icon: Database
  },
  {
    title: "Big Data Technologies",
    items: [
      "Apache Spark",
      "Hadoop",
      "Cassandra",
      "IBM Cloudant",
      "Apache Kafka",
      "Apache Airflow"
    ],
    icon: Layers3
  },
  {
    title: "Data Analytics & Business Intelligence",
    items: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Streamlit",
      "Plotly",
      "Dashboard Development",
      "Business Insights"
    ],
    icon: BarChart3
  },
  {
    title: "Development, Testing & Tools",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Jupyter Notebook",
      "VS Code",
      "Pytest"
    ],
    icon: Terminal
  }
];



const projects = [
  {
    number: "01",
    name: "FINTECH 360°",
    type: "FLAGSHIP PORTFOLIO PROJECT",
    description:
      "An end-to-end financial data platform covering UPI payments, mutual funds, digital gold and cash loans. Bringing financial data together through data processing, analysis and interactive business intelligence dashboards.",
    tags: ["Python", "SQL", "Pandas", "Streamlit", "Plotly"],
    status: "COMPLETED & DEPLOYED",
    href: "/projects/fintech-360",
    github: "https://github.com/shaikgousefintech-creator/fintech-360"
  }
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Beyond data", "#beyond"],
    ["Contact", "#contact"]
  ];

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">G.</span>
          <span>PORTFOLIO<span className="brand-dot">/</span></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <Menu size={21}/>
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.6}}>
            <div className="eyebrow"><span className="status-pulse"/> OPEN TO DATA ENGINEERING OPPORTUNITIES</div>
            <h1>Building with<br/><span className="gradient-text">data & purpose.</span></h1>
            <p className="hero-role">
  Fintech Operations Professional | Data Analysis & Reporting | Aspiring Data Engineer
</p>
            <p className="hero-subtitle">
  Hey, I'm <strong>Shaik Gouse Basha</strong> — a fintech operations
  professional with experience in customer operations, data analysis,
  reporting and business insights. I'm building my expertise in
  Data Engineering through hands-on projects and practical learning.
</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Resume</a>
            </div>
            <div className="hero-meta">
              <span><i/> Python</span><span><i/> SQL</span><span><i/> Data pipelines</span><span><i/> Analytics</span>
            </div>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{opacity:0, scale:.94}} animate={{opacity:1, scale:1}} transition={{duration:.8, delay:.15}}>
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          <div className="visual-core">
            <div className="core-top"><span>DATA / SYSTEMS</span><span className="live-dot"/></div>
            <div className="core-symbol"><Database size={58} strokeWidth={1.15}/></div>
            <div className="core-bottom"><span>INGEST</span><span>TRANSFORM</span><span>DELIVER</span></div>
          </div>
          <div className="float-card float-card-a"><span className="float-icon"><Workflow size={16}/></span><span><b>Pipeline mindset</b><small>Build Â· Validate Â· Deliver</small></span></div>
          <div className="float-card float-card-b"><span className="float-icon"><BarChart3 size={16}/></span><span><b>Business thinking</b><small>Data into decisions</small></span></div>
          <div className="visual-caption">CURIOUS BY NATURE. BUILDER BY CHOICE.</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
        <div className="hero-index">01 <span>/</span> 08</div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner">
          <span>MY FOCUS</span>
          <p>
  Engineering reliable data foundations
  <span> · </span>
  Creating meaningful analytics
  <span> · </span>
  Learning continuously
</p>
        </div>
      </section>

      
<section className="section-wrap content-section" id="about">
  <SectionHeading
    number="01"
    kicker="A LITTLE ABOUT ME"
    title={<>Fintech experience.<br /><em>Data-driven ambition.</em></>}
  />

  <div className="about-grid">
    <p className="about-lead">
      Understanding financial products.
      <br />
      <span>Turning operational data into insights.</span>
    </p>

    <div className="about-body">
      <p>
        I'm an Operations Executive at Navi, with experience
        across four fintech products: UPI Payments, Mutual Funds,
        Digital Gold and Cash Loans. Since February 2024, I've
        worked across customer interactions through chat, calls
        and email, supporting product-related operations and
        customer experience.
      </p>

      <p>
        My responsibilities also include analyzing operational
        data, preparing reports, sharing insights with internal
        teams, handling L2 escalations, coordinating with
        relevant teams to resolve dependencies, and supporting
        internal audits and Generative AI audit activities.
        For mutual fund-related cases, I coordinate with the
        RTA (CAMS), while coordinating UPI escalation cases with the FRS team.
      </p>

      <p>
        Alongside my professional experience, I've developed
        technical foundations in Python, SQL, data engineering,
        analytics and business intelligence. I'm applying
        these skills through practical projects such as
        FINTECH 360° as I work towards a career in Data Engineering.
      </p>

      <a className="text-link" href="#journey">
        More about my journey <ArrowUpRight size={15} />
      </a>
    </div>
  </div>
</section>


      <section className="section-wrap content-section" id="skills">
        <SectionHeading number="02" kicker="MY TOOLKIT" title={<>Skills built for<br/><em>real-world data.</em></>}/>
        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return <motion.article className="skill-card" key={skill.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}} transition={{duration:.45, delay:i*.06}}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="card-index">0{i+1}</span></div>
              <h3>{skill.title}</h3>
              <div className="tag-list">{skill.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </motion.article>;
          })}
        </div>
        <p className="section-note">A growing technical toolkit built through professional learning and hands-on projects.</p>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap content-section">
          <SectionHeading number="03" kicker="SELECTED WORK" title={<>Projects with<br/><em>purpose.</em></>}/>
          <div className="projects-list">
            {projects.map((project, i) => <motion.article className="project-card" key={project.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-kicker">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                {project.github && (
  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
    View GitHub repository <ExternalLink size={15}/>
  </a>
)}
              </div>
              <div className="project-side"><span className="project-status"><i/>{project.status}</span><a href={project.href} aria-label={`View ${project.name}`}><ArrowUpRight size={22}/></a></div>
            </motion.article>)}
          </div>
        </div>
      </section>

      
<section className="section-wrap content-section" id="journey">
  <SectionHeading
    number="04"
    kicker="PROFESSIONAL EXPERIENCE"
    title={<>Experience in fintech.<br /><em>Growing into data engineering.</em></>}
  />

  <div className="journey-grid">
    <div className="journey-item">
      <span className="journey-line" />
      <span className="journey-label">FEBRUARY 2024 — PRESENT</span>
      <h3>Operations Executive</h3>
      <p>Navi · Fintech</p>
      <p>
  Managing customer interactions across UPI, Mutual Funds,
  Digital Gold and Cash Loans. Analysing operational data,
  preparing reports and sharing insights. Handling UPI
  escalations, mutual fund RTA coordination, gold transactions,
  loan lifecycle queries and internal audits.
</p>
    </div>

    <div className="journey-item">
      <span className="journey-line" />
      <span className="journey-label">PROFESSIONAL EXPERIENCE</span>
      <h3>2+ Years in Fintech</h3>
      <p>
  Combining fintech domain knowledge with operational data
  analysis, reporting, customer experience, audit processes
  and cross-functional coordination.
</p>
    </div>

    <div className="journey-item">
      <span className="journey-line" />
      <span className="journey-label">CAREER DIRECTION</span>
      <h3>Aspiring Data Engineer</h3>
      <p>
        Applying Python, SQL, data processing and analytics
        knowledge through practical projects, including FINTECH 360°.
      </p>
    </div>
  </div>

  <div className="education-bar">
  <div>
    <span className="journey-label">EDUCATION & CERTIFICATIONS</span>
    <h3>Building technical foundations.</h3>

    <div className="education-links">
      <Link href="/certifications/ibm-data-engineering">
        IBM Data Engineering ↗
      </Link>

      <Link href="/certifications/google-data-analytics">
        Google Data Analytics ↗
      </Link>

      <Link href="/certifications/google-business-intelligence">
        Google Business Intelligence ↗
      </Link>

      <Link href="/certifications/nism-series-v-a">
  NISM Series V-A ↗
</Link>

      <span>Java Full Stack Development · Completed Learning</span>
    </div>
  </div>
</div>
</section>


      <section className="beyond-section" id="beyond">
        <div className="section-wrap content-section beyond-grid">
          <div>
            <div className="section-kicker"><span>05</span> BEYOND DATA & ENGINEERING</div>
            <h2>Different lens.<br/><em>Same curiosity.</em></h2>
            <p className="beyond-copy">Outside the world of data, I enjoy filmmaking and storytelling. It gives me another way to explore ideas, communicate visually and bring a story to life.</p>
            <div className="film-label"><Film size={17}/> FILMMAKING Â· STORYTELLING Â· VISUAL CREATIVITY</div>
          </div>
          
<div className="film-card">
  
<div className="film-frame">
  <video
    className="film-video"
    controls
    preload="metadata"
  
    playsInline
  >
    <source
      src="/videos/the-last-email.mp4"
      type="video/mp4"
    />
    Your browser does not support video playback.
  </video>
</div>


  <div className="film-info">
    <div className="film-meta">
      INDEPENDENT FILM · PARANORMAL HORROR
    </div>

    <h3>The Last Email: </h3>

    <p>
      An employee working the night shift begins noticing
      unexplained paranormal activity inside the office.
      As the night unfolds, eerie encounters and disturbing
      possessed-figure visuals turn an ordinary shift into
      a frightening experience.
    </p>

    
<div className="film-credits">
  <div className="film-credit-heading">CREATIVE CREDITS</div>

  {[
    "Story",
    "Screenplay",
    "Direction",
    "Lead Actor",
    "Editing",
  ].map((role) => (
    <div className="film-credit-row" key={role}>
      <strong>{role}</strong>
      <span>Gouse</span>
    </div>
  ))}

  <div className="film-credit-heading film-tech-heading">
    PRODUCTION
  </div>

  

  <div className="film-credit-row">
    <strong>Cinematography</strong>
    <span>Balaji</span>
  </div>
</div>


<div className="film-credit-heading film-tech-heading">
  CAST
</div>

<div className="film-credit-row">
  <strong>Supporting Appearance</strong>
  <span>Mushtaq</span>
</div>


<div className="film-completion">
  <span className="completion-dot" />
  <span>SHORT FILM DURATION</span>
  <span className="film-duration">6–7 MIN</span>
</div>


  
  </div>
</div>

        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-top"><div className="section-kicker"><span>06</span> GET IN TOUCH</div><Sparkles size={19} className="contact-spark"/></div>
        <h2>Let&apos;s build<br/><em>something meaningful.</em></h2>
        <p className="contact-copy">I&apos;m interested in connecting with data professionals, learning from new challenges and exploring Data Engineering opportunities.</p>
        <a className="button button-primary contact-button" href="mailto:shaik.gouse.fintech@gmail.com">Say hello <ArrowUpRight size={17}/></a>
        <div className="contact-footer">
          <a className="brand" href="#home"><span className="brand-mark">G.</span><span>PORTFOLIO<span className="brand-dot">/</span></span></a>
          <div className="social-links">
            <a href="https://github.com/shaikgousefintech-creator/" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={18}/></a>
            <a href="https://www.linkedin.com/in/gouse-basha-shaik-5653a33b2/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18}/></a>
            <a href="mailto:shaik.gouse.fintech@gmail.com" aria-label="Email"><Mail size={18}/></a>
          </div>
          <span className="copyright">
  © {new Date().getFullYear()} Shaik Gouse Basha · All rights reserved.
</span>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({number,kicker,title}:{number:string;kicker:string;title:React.ReactNode}) {
  return <div className="section-heading"><div className="section-kicker"><span>{number}</span> {kicker}</div><h2>{title}</h2><div className="heading-line"/></div>;
}




