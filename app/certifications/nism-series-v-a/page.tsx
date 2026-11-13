
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Landmark,
  ShieldCheck,
  TrendingUp,
  BriefcaseBusiness
} from "lucide-react";

const capabilities = [
  {
    icon: Landmark,
    title: "Mutual Fund Industry",
    description:
      "Professional certification focused on the mutual fund distribution domain."
  },
  {
    icon: TrendingUp,
    title: "Financial Products",
    description:
      "A formal foundation supporting understanding of mutual fund products and their distribution."
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Awareness",
    description:
      "Certification examination conducted under the SEBI (Certification of Associated Persons in the Securities Markets) Regulations, 2007."
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Application",
    description:
      "Relevant to my experience supporting mutual fund operations and customer-related workflows in fintech."
  }
];

export default function NISMSeriesVAPage() {
  return (
    <main className="cert-page">
      <div className="cert-wrap">
        <Link href="/" className="cert-back">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <div className="cert-hero">
          <span className="cert-kicker">
            PROFESSIONAL CERTIFICATION / 04
          </span>

          <h1>
            NISM Series <em>V-A.</em>
          </h1>

          <p>
            Mutual Fund Distributors Certification.
            A recognised financial markets qualification
            complementing my fintech operations experience.
          </p>

          <div className="cert-meta">
            <span>ISSUED BY NISM</span>
            <span>15 DECEMBER 2024</span>
            <span>EXAM RESULT: PASS · 76 MARKS</span>
          </div>
        </div>

        <section className="cert-image-section">
          <div>
            <span className="cert-kicker">
              01 / VERIFIED ACHIEVEMENT
            </span>

            <h2>The certificate.</h2>

            <p>
              NISM Series V-A: Mutual Fund Distributors
              Certification Examination.
            </p>
          </div>

          <div className="cert-image-frame">
            <Image
              src="/certificates/nism-series-v-a.png"
              alt="NISM Series V-A Mutual Fund Distributors Certificate"
              width={1407}
              height={950}
              priority
              className="cert-image"
            />
          </div>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">
            02 / CERTIFICATION DETAILS
          </span>

          <h2>Professional qualification.</h2>

          <div className="cert-skills-grid">
            <article className="cert-skill-card">
              <Landmark size={21} />
              <h3>Certification</h3>
              <p>NISM Series V-A – Mutual Fund Distributors</p>
            </article>

            <article className="cert-skill-card">
              <ShieldCheck size={21} />
              <h3>Result</h3>
              <p>Passed · 76 marks</p>
            </article>

            <article className="cert-skill-card">
              <TrendingUp size={21} />
              <h3>Examination Date</h3>
              <p>12 December 2024</p>
            </article>

            <article className="cert-skill-card">
              <BriefcaseBusiness size={21} />
              <h3>Validity</h3>
              <p>Until 11 December 2027</p>
            </article>
          </div>
        </section>

        <section className="cert-section">
          <span className="cert-kicker">
            03 / PROFESSIONAL RELEVANCE
          </span>

          <h2>Connecting financial knowledge with experience.</h2>

          <div className="cert-skills-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="cert-skill-card" key={item.title}>
                  <Icon size={21} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cert-connection">
          <span className="cert-kicker">
            04 / APPLYING THE KNOWLEDGE
          </span>

          <h2>From financial products to financial data.</h2>

          <p>
            My experience in mutual fund operations at Navi,
            combined with this NISM certification, strengthens
            my understanding of the financial domain. I bring
            this domain perspective into FINTECH 360°, my
            financial data engineering and analytics project.
          </p>

          <Link href="/projects/fintech-360" className="cert-button">
            Explore FINTECH 360° <ExternalLink size={15} />
          </Link>
        </section>

        <footer className="cert-footer">
          NISM Series V-A · Gouse Basha Shaik
        </footer>
      </div>
    </main>
  );
}
