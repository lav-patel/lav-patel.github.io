"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, TwitterIcon, ExternalLinkIcon, MenuIcon, XIcon } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const experiences = [
  {
    period: "2023 – Present",
    dateStart: "2023",
    dateEnd: undefined,
    title: "Manager of Data & AI Infrastructure",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Leads data engineering and AI infrastructure strategy for clinical research systems governing data on 21+ million Medicare and Medicaid patients.",
      "Directs cross-functional teams building production-grade healthcare data pipelines and federated analytics platforms.",
      "Drives OMOP CDM adoption and real-world evidence generation for NIH All of Us Research Program integration.",
    ],
  },
  {
    period: "Feb '21 – 2023",
    dateStart: "2021-02",
    dateEnd: "2023",
    title: "Senior Team Lead — Biomedical Informatics Software Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Led a cross-functional team of 10 engineers designing and deploying a next-generation biomedical informatics platform.",
      "Architected a COVID-19 data pipeline connecting approximately 10 hospitals in 7 days — a process that typically takes 1.5 months.",
      "Headed the Knowledge Discovery Team and co-authored 20+ papers on COVID-19 as a member of the 4CE Consortium.",
    ],
  },
  {
    period: "Aug '20 – Mar '21",
    dateStart: "2020-08",
    dateEnd: "2021-03",
    title: "Team Lead — Biomedical Informatics Software Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Optimized PCORnet Common Data Model (CDM) processing pipeline from 233 hours to 5 hours — a 47x performance improvement.",
      "Leveraged Python, Java, Apache Spark, SQL, Airflow, Bash, and Jenkins to modernize ETL infrastructure.",
    ],
  },
  {
    period: "Feb '19 – Sep '20",
    dateStart: "2019-02",
    dateEnd: "2020-09",
    title: "Biomedical Informatics Software Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Missouri",
    responsibilities: [
      "Reduced data pipeline processing time from 4 hours to 5 minutes by redesigning core ETL architecture.",
      "Optimized the main Extract-Transform-Load process, decreasing run time from 28 days to 7 days.",
      "Debugged and optimized i2b2, an open-source clinical data warehouse, achieving sub-second query performance.",
    ],
  },
];

const publications = [
  {
    title:
      "Federated EHR Analysis of COVID-19 Clinical Outcomes Across International Hospital Networks",
    journal: "npj Digital Medicine",
    year: "2021",
    tags: ["4CE Consortium", "Federated Learning", "COVID-19"],
  },
  {
    title:
      "International Real-World Evidence for COVID-19 Research via Federated Electronic Health Records",
    journal: "The Lancet Digital Health",
    year: "2021",
    tags: ["Real-World Evidence", "EHR", "International"],
  },
  {
    title:
      "Clinical Characterization of COVID-19 Patient Populations Using Multi-Site EHR Data",
    journal: "JAMA Network Open",
    year: "2022",
    tags: ["Clinical Informatics", "COVID-19", "Multi-site"],
  },
  {
    title:
      "Optimization of PCORnet Common Data Model for Distributed Clinical Research at Scale",
    journal: "JAMIA",
    year: "2022",
    tags: ["PCORnet CDM", "Data Infrastructure", "Performance"],
  },
  {
    title:
      "Machine Learning for Clinical Outcome Prediction Using Federated Hospital Data",
    journal: "Scientific Reports",
    year: "2023",
    tags: ["Machine Learning", "Federated Learning", "Outcomes"],
  },
  {
    title:
      "Temporal Trends in COVID-19 Outcomes Across Multi-National EHR Networks",
    journal: "EClinicalMedicine",
    year: "2022",
    tags: ["COVID-19", "Temporal Analysis", "4CE Consortium"],
  },
];

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java", "C++", "Bash"],
  },
  {
    name: "AI & Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "CUDA", "Triton", "Clinical NLP", "Deep Learning"],
  },
  {
    name: "Data Infrastructure",
    skills: ["Apache Spark", "Airflow", "Databricks", "Hadoop", "Kafka", "dbt"],
  },
  {
    name: "Cloud Platforms",
    skills: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Clinical Standards",
    skills: ["OMOP CDM", "PCORnet CDM", "i2b2", "FHIR", "HL7"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Jenkins", "Linux", "Bash", "REST APIs"],
  },
];

const faqs = [
  {
    question: "Who is Lav Patel?",
    answer:
      "Lav Patel is Manager of Data & AI Infrastructure at the University of Kansas Medical Center (KUMC). He is an EB-1 Extraordinary Ability holder with 24 peer-reviewed publications, over 1,031 citations, and an h-index of 17. He serves on the editorial board of npj Digital Medicine and is a member of the 4CE Consortium, a Harvard-led federated research network spanning 96 hospitals across 5 countries.",
  },
  {
    question: "What is Lav Patel's area of expertise?",
    answer:
      "Lav Patel specializes in healthcare data infrastructure, AI/ML systems for clinical research, and federated data networks. His expertise spans OMOP and PCORnet Common Data Models, clinical NLP, real-world evidence generation, and large-scale EHR data pipelines. He has led data engineering initiatives serving over 21 million Medicare and Medicaid patients.",
  },
  {
    question: "What has Lav Patel published?",
    answer:
      "Lav Patel has authored 24 peer-reviewed publications with 1,031 citations, h-index 17, and i10-index 21. He has published in npj Digital Medicine, The Lancet Digital Health, JAMA Network Open, EClinicalMedicine, Scientific Reports, BMJ Open, and JAMIA. His research focuses on COVID-19 data science, federated learning for healthcare, and clinical informatics.",
  },
  {
    question: "What is the 4CE Consortium?",
    answer:
      "The 4CE (Consortium for Clinical Characterization of COVID-19 by EHR) is an international federated research consortium led by Harvard Medical School. It connects 300+ researchers across 96 hospitals in 5 countries to analyze anonymized EHR data for COVID-19 research without sharing patient data across institutions. Lav Patel is a member and data infrastructure contributor.",
  },
  {
    question: "How can I contact Lav Patel?",
    answer:
      "Lav Patel can be reached by email at lavpatel39@gmail.com. He is active on LinkedIn at linkedin.com/in/lav-patel/ and on X (Twitter) at @lav_p_patel. His research profile is available on ORCID at orcid.org/0000-0002-8626-137X.",
  },
];

export function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* ── Header ── */}
      <header
        className="px-4 lg:px-6 h-14 flex items-center bg-slate-900 text-white fixed left-0 right-0 z-50"
        aria-label="Site header"
      >
        <Link className="flex items-center justify-center" href="/" onClick={closeMobileMenu}>
          <span className="text-teal-400 font-bold text-lg tracking-tight">LP</span>
          <span className="sr-only">Lav Patel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex gap-4 lg:gap-6" aria-label="Main navigation">
          <Link className="text-sm font-medium hover:text-teal-400 transition-colors" href="/">Home</Link>
          <Link className="text-sm font-medium hover:text-teal-400 transition-colors" href="#about">About</Link>
          <Link className="text-sm font-medium hover:text-teal-400 transition-colors" href="#experience">Experience</Link>
          <Link className="text-sm font-medium hover:text-teal-400 transition-colors" href="#publications">Publications</Link>
          <Link className="text-sm font-medium hover:text-teal-400 transition-colors" href="#contact">Contact</Link>
        </nav>

        {/* Desktop social icons */}
        <div className="ml-4 hidden md:flex gap-2" aria-label="Social links">
          <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://www.linkedin.com/in/lav-patel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://x.com/lav_p_patel" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://github.com/lav-patel" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://orcid.org/0000-0002-8626-137X" aria-label="ORCID" target="_blank" rel="noopener noreferrer">
            <OrcidIcon className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-slate-900 border-t border-slate-800 z-40 md:hidden shadow-lg">
          <nav className="px-4 py-3 flex flex-col" aria-label="Mobile navigation">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Publications", href: "#publications" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className="py-3 text-sm font-medium text-slate-200 hover:text-teal-400 transition-colors border-b border-slate-800 last:border-0"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-3 border-t border-slate-800 flex gap-4">
            <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://www.linkedin.com/in/lav-patel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://x.com/lav_p_patel" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://github.com/lav-patel" aria-label="GitHub" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-teal-400 transition-colors" href="https://orcid.org/0000-0002-8626-137X" aria-label="ORCID" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <OrcidIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}

      <main className="flex-1 pt-14">
        {/* ── Hero ── */}
        <section
          className="w-full flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 py-20 md:py-24"
          aria-label="Introduction"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-teal-400 font-medium text-sm uppercase tracking-widest">
                    Manager of Data &amp; AI Infrastructure
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white">
                    Lav Patel
                  </h1>
                  <p className="text-lg text-slate-300 max-w-lg">
                    Leading healthcare data engineering and AI infrastructure at the University of Kansas Medical Center — enabling clinical research at scale for 21+ million patients.
                  </p>
                </div>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-700 text-white hover:bg-teal-600">EB-1 Extraordinary Ability</Badge>
                  <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-600">24 Publications</Badge>
                  <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-600">1,031 Citations</Badge>
                  <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-600">h-index 17</Badge>
                  <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-600">npj Digital Medicine Board</Badge>
                  <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-600">4CE Consortium</Badge>
                </div>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-700">
                  <div>
                    <p className="text-2xl font-bold text-teal-400">21M+</p>
                    <p className="text-xs text-slate-400">Patient Records</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-teal-400">96</p>
                    <p className="text-xs text-slate-400">Hospital Network</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-teal-400">7 yrs</p>
                    <p className="text-xs text-slate-400">at KUMC</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <AnimatedButton
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
                  >
                    Get in Touch
                  </AnimatedButton>
                  <AnimatedButton
                    href="#publications"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-slate-600 bg-transparent px-8 text-sm font-medium text-slate-200 shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                  >
                    View Publications
                  </AnimatedButton>
                </div>
              </div>

              {/* Profile photo — shown first on mobile via order */}
              <div className="flex justify-center md:justify-end order-first md:order-last">
                <figure>
                  <Image
                    alt="Lav Patel, Healthcare Data and AI Infrastructure Leader at KUMC"
                    className="rounded-2xl shadow-2xl ring-4 ring-teal-500/30"
                    height={380}
                    width={380}
                    src="/lav-patel.jpeg"
                    priority={true}
                  />
                  <figcaption className="sr-only">
                    Lav Patel — Manager of Data &amp; AI Infrastructure, University of Kansas Medical Center
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 scroll-mt-20"
          id="about"
          aria-label="About Lav Patel"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <article>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block">
                  About Lav Patel
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Lav Patel is Manager of Data &amp; AI Infrastructure at the University of Kansas Medical Center (KUMC), where he leads the data engineering and AI systems powering clinical research for over 21 million Medicare and Medicaid patients. With more than seven years at KUMC, he has risen through four roles, driving transformational improvements in healthcare data infrastructure — including reducing a critical PCORnet ETL pipeline from 233 hours to 5 hours (47x faster) and architecting a multi-hospital COVID-19 data pipeline in just 7 days.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  A recognized authority in biomedical informatics, Lav holds an EB-1 Extraordinary Ability designation from the U.S. Citizenship and Immigration Services. He has authored 24 peer-reviewed publications with 1,031 citations and an h-index of 17, and serves on the editorial board of <em>npj Digital Medicine</em>. As a member of the 4CE Consortium — a Harvard-led federated network of 300+ researchers across 96 hospitals in 5 countries — he contributes to international COVID-19 EHR research without patient data leaving institutional boundaries.
                </p>
              </article>

              <div className="grid gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Key Achievements</h3>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>Architected COVID-19 data pipeline connecting ~10 hospitals in 7 days (typical timeline: 1.5 months)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>Optimized PCORnet CDM processing: 233 hours → 5 hours (47x faster)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>Secured and governed 21+ million Medicare and Medicaid patient records with zero breaches</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>Co-built federated data infrastructure across 50+ hospitals (4CE Consortium, 5 countries)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>Mapped KUMC clinical data to OMOP CDM for NIH All of Us Research Program</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">→</span>
                      <span>EB-1 Extraordinary Ability designation — USCIS recognition for extraordinary scientific contributions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">Recognition &amp; Affiliations</h3>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">◆</span>
                      <span>EB-1 Extraordinary Ability — U.S. Citizenship and Immigration Services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">◆</span>
                      <span>Editorial Board Member — <em>npj Digital Medicine</em> (Nature Portfolio)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">◆</span>
                      <span>4CE Consortium Member — Harvard Medical School, 96 hospitals, 5 countries</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold mt-0.5">◆</span>
                      <span>Published in: npj Digital Medicine, The Lancet Digital Health, JAMA Network Open, EClinicalMedicine, JAMIA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          className="w-full py-16 md:py-24 lg:py-32 scroll-mt-20"
          id="experience"
          aria-label="Work experience"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block mb-10">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="grid grid-cols-[120px_1fr] gap-6 items-start border-l-2 border-teal-400 pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-teal-500 ring-2 ring-white ring-offset-0" />
                  <div>
                    <time
                      className="text-sm text-slate-500 font-medium"
                      dateTime={exp.dateStart}
                    >
                      {exp.period}
                    </time>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-teal-700 font-medium text-sm">{exp.company}</p>
                    <p className="text-slate-500 text-sm mb-3">{exp.location}</p>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, idx) => (
                        <li key={idx} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                          <span className="text-slate-400 mt-0.5 shrink-0">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Collaborations ── */}
        <section
          className="w-full py-16 md:py-24 bg-slate-50 scroll-mt-20"
          id="collaborations"
          aria-label="Research collaborations"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block mb-4">
              Research Collaborations
            </h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Lav Patel is a member of the 4CE Consortium, an international federated research network that enables COVID-19 EHR analysis across institutions without sharing patient data.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-slate-900">4CE Consortium</CardTitle>
                  <CardDescription>Harvard Medical School — Lead Institution</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>International federated COVID-19 research network. 300+ researchers. 96 hospitals. 5 countries. Federated EHR analysis without patient data leaving institutions.</p>
                </CardContent>
              </Card>
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-slate-900">Americas Network</CardTitle>
                  <CardDescription>USA &amp; Canada</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>PCORnet and i2b2 sites across academic medical centers. KUMC contributes data infrastructure leadership and pipeline engineering to the U.S. cohort.</p>
                </CardContent>
              </Card>
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-slate-900">European &amp; Asia-Pacific</CardTitle>
                  <CardDescription>UK, France, Germany, Singapore &amp; more</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>Cross-continental federated analysis sites contributing real-world EHR data to harmonized COVID-19 research studies.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Publications ── */}
        <section
          className="w-full py-16 md:py-24 lg:py-32 scroll-mt-20"
          id="publications"
          aria-label="Publications"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block">
                  Publications
                </h2>
                <p className="text-slate-500 mt-1">
                  24 publications · 1,031 citations · h-index 17 · i10-index 21
                </p>
              </div>
              <Link
                href="https://orcid.org/0000-0002-8626-137X"
                className="inline-flex items-center gap-1.5 text-sm text-teal-700 hover:text-teal-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full list on ORCID <ExternalLinkIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((pub, index) => (
                <Card key={index} className="h-full border-slate-200 hover:border-teal-300 transition-colors">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-teal-700 font-medium text-xs uppercase tracking-wide">
                      {pub.journal} · {pub.year}
                    </CardDescription>
                    <CardTitle className="text-sm font-semibold text-slate-800 leading-snug">
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-slate-400 text-xs mt-6">
              Representative selection. Full publication list available on ORCID and Google Scholar.
            </p>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          className="w-full py-16 md:py-24 bg-slate-50 scroll-mt-20"
          id="skills"
          aria-label="Technical skills"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block mb-10">
              Technical Skills
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-teal-200 text-slate-700 hover:bg-teal-50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section
          className="w-full py-16 md:py-24 scroll-mt-20"
          id="education"
          aria-label="Education and credentials"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block mb-10">
              Education &amp; Credentials
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">University of Kansas Medical Center</CardTitle>
                  <CardDescription>Biomedical Informatics</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>Graduate-level training in biomedical informatics, clinical data science, and healthcare IT systems at KUMC — one of the nation&apos;s leading academic medical centers.</p>
                </CardContent>
              </Card>
              <Card className="border-teal-200 bg-teal-50/50">
                <CardHeader>
                  <CardTitle className="text-teal-900">EB-1 Extraordinary Ability</CardTitle>
                  <CardDescription>U.S. Citizenship and Immigration Services</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>USCIS EB-1 Extraordinary Ability designation — reserved for individuals who have risen to the very top of their field. Awarded in recognition of Lav Patel&apos;s sustained national and international acclaim in biomedical informatics and healthcare AI.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="w-full py-16 md:py-24 bg-slate-50 scroll-mt-20"
          id="faq"
          aria-label="Frequently asked questions"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-teal-400 pb-2 inline-block mb-10">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          className="w-full py-16 md:py-24 scroll-mt-20"
          id="contact"
          aria-label="Contact"
        >
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-8">
              Interested in collaborating on healthcare data research, AI infrastructure, or speaking engagements? Reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                href="mailto:lavpatel39@gmail.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
              >
                Email Lav Patel
              </AnimatedButton>
              <Link
                href="https://www.linkedin.com/in/lav-patel/"
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-8" aria-label="Site footer">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Lav Patel. Manager of Data &amp; AI Infrastructure, KUMC.
              </p>
              <p className="text-xs mt-1 text-slate-500">
                ORCID:{" "}
                <Link
                  href="https://orcid.org/0000-0002-8626-137X"
                  className="hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0000-0002-8626-137X
                </Link>
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/lav-patel/"
                className="hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/lav-patel"
                className="hover:text-teal-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/lav_p_patel"
                className="hover:text-teal-400 transition-colors"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://orcid.org/0000-0002-8626-137X"
                className="hover:text-teal-400 transition-colors"
                aria-label="ORCID"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OrcidIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function OrcidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      stroke="none"
    >
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-15.5 52.4h-18V74h18V52.4zm0 30.2h-18v121.8h18V82.6zm47.1 0h-18v16.8h-.3c-2.5-4.8-6.1-9-10.6-12.3-4.5-3.3-10-5-16.4-5-13.2 0-23.3 4.4-30.3 13.2-7 8.8-10.5 20.7-10.5 35.6 0 14.5 3.4 26.2 10.3 35.1 6.9 8.9 16.9 13.3 30 13.3 6.4 0 12-.8 16.8-2.5 4.8-1.7 8.7-4.3 11.6-7.8h.3v8.7h18V82.6zm-37.5 83.8c-8.5 0-15-3.1-19.5-9.4-4.5-6.3-6.8-14.6-6.8-24.9 0-10.7 2.2-19.2 6.5-25.5 4.3-6.3 10.9-9.4 19.8-9.4 9.1 0 15.8 3.2 20.2 9.6 4.4 6.4 6.6 14.9 6.6 25.3 0 10.1-2.3 18.3-6.8 24.7-4.5 6.4-11.3 9.6-20 9.6z" />
    </svg>
  );
}
