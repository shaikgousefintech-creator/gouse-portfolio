
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Database,
  Code2,
  Workflow,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const courses = [
  "Foundations: Data, Data, Everywhere",
  "Ask Questions to Make Data-Driven Decisions",
  "Prepare Data for Exploration",
  "Process Data from Dirty to Clean",
  "Analyze Data to Answer Questions",
  "Share Data Through the Art of Visualization",
  "Introduction to Data Analysis Using Python",
  "Google Data Analytics Capstone: Complete a Case Study",
  "Accelerate Your Job Search with AI",
];

const skills = [
  {
    icon: Database,
    title: "Data Foundations",
    items: "Data Analytics · Data-Driven Decision Making",
  },
  {
    icon: Workflow,
    title: "Data Preparation",
    items: "Data Collection · Data Cleaning · Data Processing",
  },
  {
    icon: Code2,
    title: "Programming & Querying",
    items: "SQL · Python",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    items: "Data Analysis · Tableau · Spreadsheets · Visualization",
  },
  {
    icon: ShieldCheck,
    title: "Analytical Problem Solving",
    items: "Case Studies · Analytical Thinking · Data Communication",
  },
];

export default function GoogleDataAnalyticsPage() {
  return (
    <main className="cert-page">
      <div className="cert-wrap">
        <Link href="/" className="cert-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="cert-hero">
          <span className="cert-kicker">
            PROFESSIONAL CERTIFICATION / 02
          </span>

          <h1>
            Google Data <em>Analytics.</em>
          </h1>

          <p>
            Building practical skills in data preparation, cleaning,
            analysis, visualization and data-driven decision making.
          </p>

          <div className="cert-meta">
            <span>ISSUED BY GOOGLE · COURSERA</span>
            <span>27 MAY 2026</span>
            <span>9 COURSES COMPLETED</span>
          </div>
        </div>

        <section className="cert-image-section">
          <div>
            <span className="cert-kicker">
              01 / VERIFIED ACHIEVEMENT
            </span>

            <h2>The certificate.</h2>

            <p>
              Official Google Data Analytics Professional Certificate
              awarded after completing the 9-course program.
            </p>
          </div>

          <div className="cert-image-frame">
            <Image
              src="/certificates/google-data-analytics.png"
              alt="Google Data Analytics Professional Certificate awarded to Gouse Basha Shaik"
              width={1407}
              height={1087}
              priority
              className="cert-image"
            />
          </div>

          <a
            href="https://coursera.org/verify/professional-cert/RT8LUQGYQ9ZJ"
            target="_blank"
            rel="noreferrer"
            className="cert-button"
          >
            Verify Certificate <ExternalLink size={15} />
          </a>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">
            02 / TECHNICAL CAPABILITIES
          </span>

          <h2>Skills developed through the program.</h2>

          <div className="cert-skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  className="cert-skill-card"
                  key={skill.title}
                >
                  <Icon size={21} />
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">
            03 / LEARNING JOURNEY
          </span>

          <h2>9 courses. One analytical foundation.</h2>

          <div className="cert-course-list">
            {courses.map((course, index) => (
              <div className="cert-course" key={course}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{course}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cert-connection">
          <span className="cert-kicker">
            04 / APPLYING THE LEARNING
          </span>

          <h2>From analysis to real-world projects.</h2>

          <p>
            I am applying analytical thinking, SQL, Python and
            data visualization skills through FINTECH 360°,
            my end-to-end financial data platform.
          </p>

          <Link
            href="/projects/fintech-360"
            className="cert-button"
          >
            Explore FINTECH 360° <ExternalLink size={15} />
          </Link>
        </section>

        <footer className="cert-footer">
          Google Data Analytics · Gouse Basha Shaik
        </footer>
      </div>
    </main>
  );
}
