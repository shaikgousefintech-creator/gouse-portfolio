
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
  "Foundations of Business Intelligence",
  "The Path to Insights: Data Models and Pipelines",
  "Decisions, Decisions: Dashboards and Reports",
  "Accelerate Your Job Search with AI",
];

const skills = [
  {
    icon: Database,
    title: "Business Intelligence Foundations",
    items: "BI Concepts · Business Requirements · Data-Driven Decisions",
  },
  {
    icon: Workflow,
    title: "Data Models & Pipelines",
    items: "Data Modeling · Data Pipelines · Data Preparation",
  },
  {
    icon: Code2,
    title: "Data Querying",
    items: "SQL · Working with Analytical Data",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reporting",
    items: "Dashboard Development · Data Visualization · Reports",
  },
  {
    icon: ShieldCheck,
    title: "Business Insights",
    items: "Stakeholder Needs · Analytical Thinking · Decision Support",
  },
];

export default function GoogleBusinessIntelligencePage() {
  return (
    <main className="cert-page">
      <div className="cert-wrap">
        <Link href="/" className="cert-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="cert-hero">
          <span className="cert-kicker">
            PROFESSIONAL CERTIFICATION / 03
          </span>

          <h1>
            Google Business <em>Intelligence.</em>
          </h1>

          <p>
            Developing practical skills in business intelligence,
            data modeling, data pipelines, dashboards and
            reporting to support better business decisions.
          </p>

          <div className="cert-meta">
            <span>ISSUED BY GOOGLE · COURSERA</span>
            <span>11 JULY 2026</span>
            <span>4 COURSES COMPLETED</span>
          </div>
        </div>

        <section className="cert-image-section">
          <div>
            <span className="cert-kicker">
              01 / VERIFIED ACHIEVEMENT
            </span>

            <h2>The certificate.</h2>

            <p>
              Official Google Business Intelligence Professional
              Certificate awarded after completing the 4-course
              program.
            </p>
          </div>

          <div className="cert-image-frame">
            <Image
              src="/certificates/google-business-intelligence.png"
              alt="Google Business Intelligence Professional Certificate awarded to Gouse Basha Shaik"
              width={1407}
              height={1087}
              priority
              className="cert-image"
            />
          </div>

          <a
            href="https://coursera.org/verify/professional-cert/ZGPBS37VEUI9"
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

          <h2>4 courses. One BI foundation.</h2>

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

          <h2>Turning data into business insights.</h2>

          <p>
            I am bringing together business intelligence,
            analytical thinking and data engineering through
            FINTECH 360°, my end-to-end financial data platform.
          </p>

          <Link
            href="/projects/fintech-360"
            className="cert-button"
          >
            Explore FINTECH 360° <ExternalLink size={15} />
          </Link>
        </section>

        <footer className="cert-footer">
          Google Business Intelligence · Gouse Basha Shaik
        </footer>
      </div>
    </main>
  );
}
