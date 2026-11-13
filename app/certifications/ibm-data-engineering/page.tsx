
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Database, Code2, Workflow, BarChart3, ShieldCheck } from "lucide-react";

const courses = [
  "Introduction to Data Engineering",
  "Python for Data Science, AI & Hands-On Development",
  "Python Project for Data Engineering",
  "Introduction to Relational Databases (RDBMS)",
  "Databases and SQL for Data Science with Python",
  "Hands-on Introduction to Linux Commands and Shell Scripting",
  "Relational Database Administration",
  "ETL and Data Pipelines with Shell, Airflow and Kafka",
  "Data Warehouse Fundamentals",
  "BI Dashboards with IBM Cognos Analytics and Google Looker",
  "Introduction to NoSQL Databases",
  "Introduction to Big Data with Spark and Hadoop",
  "Machine Learning with Apache Spark",
  "Data Engineering Capstone Project",
  "Generative AI: Elevate Your Data Engineering Career",
  "Data Engineering Career Guide and Interview Preparation",
];

const skills = [
  { icon: Code2, title: "Programming", items: "Python · SQL · Shell Scripting" },
  { icon: Database, title: "Databases", items: "Relational Databases · NoSQL · Database Administration" },
  { icon: Workflow, title: "Data Engineering", items: "ETL · Data Pipelines · Apache Airflow · Kafka" },
  { icon: BarChart3, title: "Data Warehousing & BI", items: "Data Warehousing · IBM Cognos · Google Looker" },
  { icon: ShieldCheck, title: "Big Data & Processing", items: "Apache Spark · Hadoop · Data Engineering Capstone" },
];

export default function IBMDataEngineeringPage() {
  return (
    <main className="cert-page">
      <div className="cert-wrap">
        <Link href="/" className="cert-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="cert-hero">
          <span className="cert-kicker">PROFESSIONAL CERTIFICATION / 01</span>
          <h1>IBM Data <em>Engineering.</em></h1>
          <p>
            Building practical foundations in databases, data pipelines,
            ETL, data warehousing and big data technologies.
          </p>

          <div className="cert-meta">
            <span>ISSUED BY IBM · COURSERA</span>
            <span>04 NOVEMBER 2026</span>
            <span>16 COURSES COMPLETED</span>
          </div>
        </div>

        <section className="cert-image-section">
          <div>
            <span className="cert-kicker">01 / VERIFIED ACHIEVEMENT</span>
            <h2>The certificate.</h2>
            <p>
              Official IBM Data Engineering Professional Certificate
              awarded after completing the 16-course program.
            </p>
          </div>

          <div className="cert-image-frame">
            <Image
              src="/certificates/ibm-data-engineering.png"
              alt="IBM Data Engineering Professional Certificate awarded to Gouse Basha Shaik"
              width={1407}
              height={1087}
              priority
              className="cert-image"
            />
          </div>

          <a
            href="https://coursera.org/verify/professional-cert/MZ8Q4KNLTWKO"
            target="_blank"
            rel="noreferrer"
            className="cert-button"
          >
            Verify Certificate <ExternalLink size={15} />
          </a>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">02 / TECHNICAL CAPABILITIES</span>
          <h2>Skills developed through the program.</h2>

          <div className="cert-skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className="cert-skill-card" key={skill.title}>
                  <Icon size={21} />
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">03 / LEARNING JOURNEY</span>
          <h2>16 courses. One engineering foundation.</h2>

          <div className="cert-course-list">
            {courses.map((course, index) => (
              <div className="cert-course" key={course}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{course}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cert-connection">
          <span className="cert-kicker">04 / APPLYING THE LEARNING</span>
          <h2>From learning to building.</h2>
          <p>
            I am applying concepts from data engineering, Python,
            SQL, data processing and analytics through FINTECH 360°,
            my end-to-end financial data platform.
          </p>
          <Link href="/projects/fintech-360" className="cert-button">
            Explore FINTECH 360° <ExternalLink size={15} />
          </Link>
        </section>

        <footer className="cert-footer">
          IBM Data Engineering · Gouse Basha Shaik
        </footer>
      </div>
    </main>
  );
}
