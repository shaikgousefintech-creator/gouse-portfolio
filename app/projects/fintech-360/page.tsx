
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Workflow,
  ShieldCheck,
  BarChart3,
  CreditCard,
  Coins,
  Wallet,
  TrendingUp,
  GitBranch,
  ExternalLink,
} from "lucide-react";

const liveUrl =
  "https://fintech-360-cxvbpi5gjqwegf5kbgwewr.streamlit.app/";

const githubUrl =
  "https://github.com/shaikgousefintech-creator/fintech-360";


const domains = [
  {
    number: "01",
    title: "UPI Payments",
    description:
      "Analyze payment volumes, transaction success and failure patterns, payment methods and transaction trends.",
    volume: "10,000 transactions",
    focus: "Transaction monitoring · Success rates · Failure analysis",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Mutual Funds",
    description:
      "Explore investor activity, investment transactions, scheme-level performance and historical Net Asset Value (NAV) trends.",
    volume: "20,000 transactions",
    focus: "Investor analysis · Scheme performance · NAV trends",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Digital Gold",
    description:
      "Explore digital gold purchases, sales, customer transaction activity and trends in gold investment.",
    volume: "50,000 transactions",
    focus: "Purchase and sales trends · Customer activity · Transaction analysis",
    icon: Coins,
  },
  {
    number: "04",
    title: "Cash Loans",
    description:
      "Analyze loan applications, lending activity, loan lifecycle trends and portfolio-level performance.",
    volume: "15,000 applications",
    focus: "Application trends · Loan lifecycle · Portfolio analysis",
    icon: Wallet,
  },
];


const capabilities = [
  {
    title: "Data Ingestion",
    description:
      "Bring synthetic financial datasets into the processing workflow.",
    icon: Database,
  },
  {
    title: "Data Transformation",
    description:
      "Clean, standardize and prepare records for downstream analytics.",
    icon: Workflow,
  },
  {
    title: "Data Quality",
    description:
      "Validate records and handle rejected data to improve reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics & BI",
    description:
      "Use SQL data marts and interactive dashboards to explore business performance.",
    icon: BarChart3,
  },
];

const technologies = [
  "Python",
  "Pandas",
  "SQL",
  "SQLite",
  "Streamlit",
  "Plotly",
  "Pytest",
  "Git",
  "GitHub",
];



export default function Fintech360Page() {
  return (
    <main className="fintech-page">
      <div className="fintech-container">

        <Link href="/#projects" className="fintech-back">
          <ArrowLeft size={15} />
          Back to portfolio
        </Link>

        <section className="fintech-hero">
          <span className="fintech-label">
            FLAGSHIP PORTFOLIO PROJECT
          </span>
          <span className="fintech-status">
            ● COMPLETED & DEPLOYED
          </span>

          <h1>
            FINTECH 360°
            <span>Financial Data Platform.</span>
          </h1>

          <p className="fintech-intro">
            An end-to-end financial data engineering, analytics and
            business intelligence platform covering UPI payments,
            mutual funds, digital gold and cash loans.
          </p>

          <div className="fintech-actions">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="fintech-button primary"
            >
              Explore Live Dashboard
              <ArrowUpRight size={16} />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="fintech-button"
            >
              <GitBranch size={16} />
              View Source Code
              <ExternalLink size={14} />
            </a>
          </div>
        </section>


<section className="fintech-overview">
  <p className="fintech-kicker">PROJECT CONTEXT / THE WHY</p>

  <div className="fintech-overview-grid">
    <div>
      <h2>
        Financial data.
        <br />
        <em>One connected view.</em>
      </h2>
    </div>

    <div className="fintech-overview-content">
      <h3>The business problem</h3>
      <p>
        Financial products generate different types of operational data.
        When each product is analyzed separately, it becomes harder to
        maintain a consistent view of transactions, customer activity
        and business performance.
      </p>

      <h3>The project objective</h3>
      <p>
        FINTECH 360° brings four financial domains into one analytics
        platform. It uses synthetic datasets to demonstrate data
        ingestion, cleaning, validation, transformation, SQL-based
        analysis and interactive business dashboards.
      </p>

      <h3>The engineering approach</h3>
      <p>
        Build a repeatable data workflow that converts raw financial
        records into structured, analysis-ready datasets and useful
        business insights.
      </p>
    </div>
  </div>
</section>


        <section className="fintech-stats">
          <div className="fintech-stat">
            <strong>04</strong>
            <span>Financial domains</span>
          </div>
          <div className="fintech-stat">
            <strong>95K</strong>
            <span>Synthetic records</span>
          </div>
          <div className="fintech-stat">
            <strong>04</strong>
            <span>Financial workflows</span>
          </div>
          <div className="fintech-stat">
            <strong>01</strong>
            <span>Unified platform</span>
          </div>
        </section>

        <section className="fintech-section">
          <p className="fintech-kicker">
            01 / BUSINESS DOMAINS
          </p>

          <h2>Four domains. One financial view.</h2>

          <p className="fintech-section-intro">
            The platform brings together four financial product
            areas to support analysis and business understanding.
          </p>

          <div className="fintech-domain-grid">
            {domains.map((domain) => {
              const Icon = domain.icon;

              return (
                <article
                  className="fintech-domain-card"
                  key={domain.number}
                >
                  <div className="fintech-icon">
                    <Icon size={25} />
                  </div>

                  <span className="fintech-kicker">
                    {domain.number}
                  </span>

                  <h3>{domain.title}</h3>

                  <p>{domain.description}</p>

                  <p className="fintech-domain-focus">
  {domain.focus}
</p>

                  <span className="fintech-domain-volume">
                    {domain.volume}
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="fintech-section">
          <p className="fintech-kicker">
            02 / ENGINEERING WORKFLOW
          </p>

          <h2>From raw data to useful insights.</h2>

          <div className="fintech-work-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="fintech-work-card"
                  key={item.title}
                >
                  <div className="fintech-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="fintech-section">
          <p className="fintech-kicker">
            03 / END-TO-END ARCHITECTURE
          </p>

          <h2>How the data flows.</h2>

          <p className="fintech-section-intro">
            A unified pipeline that takes financial data from
            ingestion and validation through storage, analytics
            and business intelligence.
          </p>

          
<div className="fintech-architecture">
  <p className="architecture-branch-label">
    SOURCE DATA · FOUR FINANCIAL DOMAINS
  </p>

  <div className="architecture-sources">
    {domains.map((domain) => (
      <div className="architecture-node" key={domain.number}>
        <strong>{domain.title}</strong>
        <span>{domain.volume}</span>
      </div>
    ))}
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>01 · DATA INGESTION</strong>
    <span>CSV source files · Python data loading</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>02 · DATA QUALITY & VALIDATION</strong>
    <span>Record validation · Rejected data · Reconciliation</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>03 · DATA TRANSFORMATION</strong>
    <span>Python · Pandas · Cleaning · Standardization</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>04 · CENTRALIZED STORAGE</strong>
    <span>SQLite · Structured datasets</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>05 · SQL ANALYTICAL DATA MARTS</strong>
    <span>Domain-level analytical datasets</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main">
    <strong>06 · ANALYTICS & BUSINESS INSIGHTS</strong>
    <span>SQL queries · Python analysis</span>
  </div>

  <div className="architecture-connector">↓</div>

  <div className="architecture-node main final">
    <strong>07 · BUSINESS INTELLIGENCE</strong>
    <span>Streamlit · Plotly · Interactive dashboards</span>
  </div>

  <p className="architecture-note">
  Engineering practices: Data validation, structured
  transformations, SQL-based analytics and automated
  testing with Pytest.
</p>
</div>


        </section>

        <section className="fintech-section">
          <p className="fintech-kicker">
            04 / TECHNOLOGY STACK
          </p>

          <h2>Tools behind the platform.</h2>

          <div className="fintech-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="fintech-cta">
          <p className="fintech-kicker">
            EXPLORE THE PROJECT
          </p>

          <h2>See FINTECH 360° in action.</h2>

          <p>
            Explore the deployed application or review the
            implementation and project documentation on GitHub.
          </p>

          <div className="fintech-actions">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="fintech-button primary"
            >
              Live Application
              <ArrowUpRight size={16} />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="fintech-button"
            >
              GitHub Repository
              <GitBranch size={16} />
            </a>
          </div>
        </section>

        <footer className="fintech-footer">
          FINTECH 360° · A portfolio project by Shaik Gouse Basha
        </footer>

      </div>
    </main>
  );
}
