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
    period: "Jan '25 – Present",
    dateStart: "2025-01",
    dateEnd: undefined,
    title: "Manager, Data and AI Architecture",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Architected and shipped CareScriptMD end-to-end — an AI-powered clinical documentation platform that converts real-time patient visit audio into structured medical notes, eliminating hours of manual charting per clinician per day. Collaboration with Jeff Burns, MD (PI).",
      "Designed a production-grade clinical AI system: real-time audio capture, OpenAI Whisper deployed as a custom MLflow serving endpoint on Databricks, and multi-model LLM orchestration (Claude, Llama) for structured note generation — all within HIPAA-compliant infrastructure.",
      "Engineered a production ML pipeline on Databricks with auto-scaling GPU serving endpoints and hybrid model routing strategy (Claude for accuracy-critical notes, Llama for high-volume intake), reducing inference costs.",
      "Navigated dual-track institutional compliance — secured IRB approval, drove security reviews across both university and hospital systems, and cleared the regulatory path for clinical AI deployment.",
    ],
  },
  {
    period: "Feb '21 – Jan '25",
    dateStart: "2021-02",
    dateEnd: "2025-01",
    title: "Senior Team Lead — Biomedical Informatics Software Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Spearheaded the AllofUs Heartland consortium as Lead Software Engineer — built OMOP CDM from scratch and made the codebase available across University of Missouri, University of Iowa, and UNMC.",
      "Directed a 10-engineer cross-functional team building enterprise-scale biomedical informatics systems.",
      "Architected a COVID-19 data pipeline connecting 10 hospitals in 7 days — a process that typically takes 1.5 months.",
      "Drove a 20-publication research program as head of the Knowledge Discovery Team, contributing to the international 4CE Consortium.",
    ],
  },
  {
    period: "Aug '20 – Feb '21",
    dateStart: "2020-08",
    dateEnd: "2021-02",
    title: "Team Lead — Biomedical Informatics Software Engineer | Solutions Architect",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Kansas",
    responsibilities: [
      "Delivered a 47x performance improvement on the PCORnet Common Data Model pipeline (233 hours → 5 hours) — a CDC, NIH, FDA, and PCORI-funded national data infrastructure.",
    ],
  },
  {
    period: "Feb '19 – Aug '20",
    dateStart: "2019-02",
    dateEnd: "2020-08",
    title: "Biomedical Informatics Software Engineer | Data Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Missouri",
    responsibilities: [
      "Re-architected core data pipeline systems to significantly improve speed and flexibility.",
      "Optimized the department's main ETL process, decreasing run time from 28 days to 7 days.",
      "Debugged and optimized i2b2, an open-source clinical data warehouse, achieving sub-second query performance.",
    ],
  },
  {
    period: "Sep '17 – Feb '19",
    dateStart: "2017-09",
    dateEnd: "2019-02",
    title: "Senior Enterprise Systems Engineer | DevOps Engineer",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Missouri",
    responsibilities: [
      "Owned security and governance for 21M+ Medicare and Medicaid patient records, enforcing NIST-850, HIPAA, and CIS benchmark standards — zero breaches.",
      "Shipped federated query infrastructure across 50+ hospitals in 15 days, delivering instantaneous cross-institutional results.",
      "Drove Infrastructure as Code adoption (Terraform, Azure, Docker, K8s, Ansible, Jenkins).",
    ],
  },
  {
    period: "Dec '16 – Sep '17",
    dateStart: "2016-12",
    dateEnd: "2017-09",
    title: "Enterprise Systems Engineer | Distributed Backend Systems",
    company: "University of Kansas Medical Center",
    location: "Kansas City, Missouri",
    responsibilities: [
      "Implemented distributed systems architecture (Spark on Azure) to reduce hospital data loading from 2 days to 4 hours.",
      "Deployed REDCap with custom add-on software, streamlining hospital resident evaluations from a week to instantaneous results.",
      "Spearheaded golden OS image creation, reducing server build time from 1 month to 10 days.",
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
      "Lav Patel is Manager, Data and AI Architecture at the University of Kansas Medical Center (KUMC), where he architected and shipped CareScriptMD — an AI-powered clinical documentation platform. He is an EB-1 Extraordinary Ability holder with 24 peer-reviewed publications, over 1,031 citations, and an h-index of 17. He serves on the editorial board of npj Digital Medicine and is a member of the 4CE Consortium, a Harvard-led federated research network spanning 96 hospitals across 5 countries.",
  },
  {
    question: "What is Lav Patel's area of expertise?",
    answer:
      "Lav Patel specializes in building AI products for healthcare, clinical data architecture, and federated data networks. He architected CareScriptMD, a production AI clinical documentation platform using Whisper, Claude, and Llama. His expertise spans OMOP and PCORnet Common Data Models, clinical NLP, real-world evidence generation, and large-scale EHR data pipelines. Over six roles at KUMC, he has progressed from distributed systems engineering to leading AI product development in regulated environments.",
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
      {/* Skip to content */}
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      {/* ── Header ── */}
      <header
        className="px-4 lg:px-6 h-14 flex items-center bg-[#1a2744] text-white fixed left-0 right-0 z-50"
        aria-label="Site header"
      >
        <Link className="flex items-center justify-center" href="/" onClick={closeMobileMenu}>
          <span className="text-blue-400 font-bold text-lg tracking-tight">LP</span>
          <span className="sr-only">Lav Patel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex gap-4 lg:gap-6" aria-label="Main navigation">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="/">Home</Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="#about">About</Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="#experience">Experience</Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="#publications">Publications</Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="#contact">Contact</Link>
        </nav>

        {/* Desktop social icons */}
        <div className="ml-4 hidden md:flex gap-2" aria-label="Social links">
          <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://www.linkedin.com/in/lav-patel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://x.com/lav_p_patel" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://github.com/lav-patel" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://orcid.org/0000-0002-8626-137X" aria-label="ORCID" target="_blank" rel="noopener noreferrer">
            <OrcidIcon className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden text-slate-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-[#1a2744] border-t border-slate-800 z-40 md:hidden shadow-lg">
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
                className="py-3 text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors border-b border-slate-800 last:border-0"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-3 border-t border-slate-800 flex gap-4">
            <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://www.linkedin.com/in/lav-patel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://x.com/lav_p_patel" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://github.com/lav-patel" aria-label="GitHub" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm" href="https://orcid.org/0000-0002-8626-137X" aria-label="ORCID" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <OrcidIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}

      <main className="flex-1 pt-14">
        {/* ── Hero ── */}
        <section
          className="w-full flex items-center bg-gradient-to-br from-[#1a2744] via-[#1e3055] to-[#243b67] py-20 md:py-28 relative overflow-hidden"
          aria-label="Introduction"
        >
          {/* Subtle radial glow behind content */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(37,99,235,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-blue-400 font-medium text-sm uppercase tracking-widest">
                    Manager, Data and AI Architecture
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white text-balance">
                    Lav Patel
                  </h1>
                  <p className="text-lg text-slate-300 max-w-lg">
                    Architecting AI products for healthcare at KUMC. Shipped CareScriptMD — an AI clinical documentation platform built on Whisper, Claude, and Llama. 24 publications. EB-1 Extraordinary Ability.
                  </p>
                </div>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-500/90 text-white hover:bg-amber-400 font-semibold">EB-1 Extraordinary Ability</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">CareScriptMD</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">24 Publications</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">1,031 Citations</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">h-index 17</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">npj Digital Medicine Board</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">4CE Consortium</Badge>
                  <Badge className="bg-[#1e3055] text-slate-200 hover:bg-[#243b67]">Databricks Certified</Badge>
                </div>

                {/* Metrics strip */}
                <div className="flex items-center gap-0 py-5 border-t border-slate-700/60">
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-bold text-white tracking-tight">CareScriptMD</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">AI Product Shipped</p>
                  </div>
                  <div className="w-px h-10 bg-slate-600/50" />
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-bold text-white tracking-tight tabular-nums">24</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Publications</p>
                  </div>
                  <div className="w-px h-10 bg-slate-600/50" />
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-bold text-white tracking-tight">EB-1</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Extraordinary Ability</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <AnimatedButton
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
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
                    alt="Lav Patel, Manager of Data and AI Architecture at KUMC"
                    className="rounded-2xl shadow-[0_0_60px_rgba(37,99,235,0.15)] ring-1 ring-white/10"
                    height={380}
                    width={380}
                    src="/lav-patel.jpeg"
                    priority={true}
                  />
                  <figcaption className="sr-only">
                    Lav Patel — Manager, Data and AI Architecture, University of Kansas Medical Center
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block">
                  About Lav Patel
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Lav Patel is Manager, Data and AI Architecture at the University of Kansas Medical Center (KUMC). Most recently, he architected and shipped CareScriptMD — an AI-powered clinical documentation platform that converts real-time patient visit audio into structured medical notes using Whisper, Claude, and Llama, all within HIPAA-compliant infrastructure. He served as sole technical builder, navigating IRB approval and dual-track institutional compliance to clear the regulatory path for clinical AI deployment.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Since joining KUMC in 2016, Lav has risen through six roles — from distributed systems engineering to leading AI product development in regulated environments. He previously owned security and governance for 21M+ Medicare and Medicaid patient records with zero breaches, shipped federated query infrastructure across 50+ hospitals, and delivered a 47x performance improvement on a CDC/NIH/FDA-funded national data pipeline.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  A recognized authority in biomedical informatics, Lav holds an EB-1 Extraordinary Ability designation from USCIS. He has authored 24 peer-reviewed publications with 1,031 citations and an h-index of 17, and serves on the editorial board of <em>npj Digital Medicine</em>. As a member of the 4CE Consortium — a Harvard-led federated network of 300+ researchers across 96 hospitals in 5 countries — he contributes to international COVID-19 EHR research.
                </p>
              </article>

              <div className="grid gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Key Achievements</h3>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Built CareScriptMD — AI clinical documentation platform using Whisper, Claude, and Llama</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>COVID-19 data pipeline connecting 10 hospitals in 7 days (typical: 1.5 months)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>PCORnet CDM: 233 hours → 5 hours (47x faster). CDC/NIH/FDA/PCORI funded</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Secured 21M+ Medicare/Medicaid patient records with zero breaches</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Shipped federated query infrastructure across 50+ hospitals — delivered in 15 days</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>EB-1 Extraordinary Ability designation — USCIS recognition for extraordinary scientific contributions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">Recognition &amp; Affiliations</h3>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">◆</span>
                      <span>EB-1 Extraordinary Ability — U.S. Citizenship and Immigration Services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">◆</span>
                      <span>Editorial Board Member — <em>npj Digital Medicine</em> (Nature Portfolio)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">◆</span>
                      <span>4CE Consortium Member — Harvard Medical School, 96 hospitals, 5 countries</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">◆</span>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block mb-10">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="grid grid-cols-[120px_1fr] gap-6 items-start border-l-2 border-blue-600 pl-6 relative"
                >
                  <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600 ring-2 ring-white ring-offset-0" />
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
                    <p className="text-blue-700 font-medium text-sm">{exp.company}</p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block mb-4">
              Research Collaborations
            </h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Lav Patel is a member of the 4CE Consortium, an international federated research network that enables COVID-19 EHR analysis across institutions without sharing patient data.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-slate-900">4CE Consortium</CardTitle>
                  <CardDescription>Harvard Medical School — Lead Institution</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>International federated COVID-19 research network. 300+ researchers. 96 hospitals. 5 countries. Federated EHR analysis without patient data leaving institutions.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-slate-900">Americas Network</CardTitle>
                  <CardDescription>USA &amp; Canada</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>PCORnet and i2b2 sites across academic medical centers. KUMC contributes data infrastructure leadership and pipeline engineering to the U.S. cohort.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block">
                  Publications
                </h2>
                <p className="text-slate-500 mt-1">
                  24 publications · 1,031 citations · h-index 17 · i10-index 21
                </p>
              </div>
              <Link
                href="https://orcid.org/0000-0002-8626-137X"
                className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full list on ORCID <ExternalLinkIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((pub, index) => (
                <Card key={index} className="h-full border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-blue-700 font-medium text-xs uppercase tracking-wide">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block mb-10">
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
                        className="border-blue-200 text-slate-700 hover:bg-blue-50"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block mb-10">
              Education &amp; Credentials
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Louisiana Tech University</CardTitle>
                  <CardDescription>Bachelor&apos;s and Master&apos;s Degrees</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>BS and MS from Louisiana Tech University.</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Certifications</CardTitle>
                  <CardDescription>Databricks &amp; Azure</CardDescription>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <ul className="space-y-1">
                    <li>Azure Databricks Platform Architect</li>
                    <li>Databricks Certified Data Engineer Associate</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900">EB-1 Extraordinary Ability</CardTitle>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 border-b-2 border-blue-600 pb-2 inline-block mb-10">
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
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
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
      <footer className="bg-[#1a2744] text-slate-400 py-8" aria-label="Site footer">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Lav Patel. Manager, Data and AI Architecture, KUMC.
              </p>
              <p className="text-xs mt-1 text-slate-500">
                ORCID:{" "}
                <Link
                  href="https://orcid.org/0000-0002-8626-137X"
                  className="hover:text-blue-400 transition-colors"
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
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/lav-patel"
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/lav_p_patel"
                className="hover:text-blue-400 transition-colors"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://orcid.org/0000-0002-8626-137X"
                className="hover:text-blue-400 transition-colors"
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
