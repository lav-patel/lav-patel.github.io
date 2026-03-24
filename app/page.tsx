import { Component } from "@/components/component";

const PERSON_ID = "https://lavpatel.com/#person";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://lavpatel.com/#profilepage",
    dateModified: "2026-03-24",
    mainEntity: {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Lav Patel",
      givenName: "Lav",
      familyName: "Patel",
      jobTitle: "Manager, Data and AI Architecture",
      description:
        "Lav Patel is Manager, Data and AI Architecture at the University of Kansas Medical Center (KUMC), where he architected and shipped CareScriptMD — an AI-powered clinical documentation platform. An EB-1 Extraordinary Ability holder recognized by USCIS, he has authored 24 peer-reviewed publications with over 1,031 citations and an h-index of 17. He serves on the editorial board of npj Digital Medicine and is a member of the 4CE Consortium, a Harvard-led federated research network spanning 96 hospitals across 5 countries.",
      url: "https://lavpatel.com",
      email: "lavpatel39@gmail.com",
      image: {
        "@type": "ImageObject",
        url: "https://lavpatel.com/lav-patel.jpeg",
        width: 800,
        height: 800,
        name: "Lav Patel, Manager, Data and AI Architecture at KUMC",
      },
      worksFor: {
        "@type": "Organization",
        name: "University of Kansas Medical Center",
        alternateName: "KUMC",
        url: "https://www.kumc.edu",
      },
      knowsAbout: [
        "AI Clinical Documentation",
        "CareScriptMD",
        "Healthcare Data Architecture",
        "AI and Machine Learning Systems for Healthcare",
        "Biomedical Informatics",
        "Federated Data Networks",
        "OMOP Common Data Model",
        "PCORnet Common Data Model",
        "Clinical Natural Language Processing",
        "LLM Orchestration (Claude, Llama, Whisper)",
        "COVID-19 Research",
        "Real-World Evidence Generation",
        "Electronic Health Records",
        "Python",
        "Apache Spark",
        "Databricks",
        "Microsoft Azure",
        "Distributed Computing",
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "4CE Consortium",
          description:
            "International federated network for COVID-19 EHR research led by Harvard Medical School, comprising 300+ researchers across 96 hospitals in 5 countries",
        },
        {
          "@type": "Organization",
          name: "npj Digital Medicine Editorial Board",
          description:
            "Nature Portfolio peer-reviewed journal focused on digital medicine and health technology",
        },
      ],
      award:
        "EB-1 Extraordinary Ability — U.S. Citizenship and Immigration Services designation recognizing extraordinary ability in the sciences",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "EB-1 Extraordinary Ability",
        credentialCategory: "U.S. Immigration Extraordinary Ability Designation",
      },
      sameAs: [
        "https://www.linkedin.com/in/lav-patel/",
        "https://github.com/lav-patel",
        "https://x.com/lav_p_patel",
        "https://orcid.org/0000-0002-8626-137X",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://lavpatel.com/#website",
    url: "https://lavpatel.com",
    name: "Lav Patel",
    description:
      "Official website of Lav Patel, Manager, Data and AI Architecture at the University of Kansas Medical Center",
    publisher: { "@id": PERSON_ID },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Lav Patel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lav Patel is Manager, Data and AI Architecture at the University of Kansas Medical Center (KUMC), where he architected and shipped CareScriptMD — an AI-powered clinical documentation platform. He is an EB-1 Extraordinary Ability holder with 24 peer-reviewed publications, over 1,031 citations, and an h-index of 17. He serves on the editorial board of npj Digital Medicine and is a member of the 4CE Consortium, a Harvard-led international federated research network spanning 96 hospitals across 5 countries.",
        },
      },
      {
        "@type": "Question",
        name: "What is Lav Patel's area of expertise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lav Patel specializes in building AI products for healthcare, clinical data architecture, and federated data networks. He architected CareScriptMD, a production AI clinical documentation platform using Whisper, Claude, and Llama. His expertise spans OMOP and PCORnet Common Data Models, clinical NLP, real-world evidence generation, and large-scale EHR data pipelines. Over six roles at KUMC, he has progressed from distributed systems engineering to leading AI product development in regulated environments.",
        },
      },
      {
        "@type": "Question",
        name: "What has Lav Patel published?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lav Patel has authored 24 peer-reviewed publications with 1,031 citations, an h-index of 17, and an i10-index of 21 as of 2026. He has published in npj Digital Medicine, The Lancet Digital Health, JAMA Network Open, EClinicalMedicine, Scientific Reports, BMJ Open, and JAMIA. His research focuses on COVID-19 data science, federated learning for healthcare, clinical informatics, and real-world evidence.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 4CE Consortium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 4CE (Consortium for Clinical Characterization of COVID-19 by EHR) is an international federated research consortium led by Harvard Medical School. It connects over 300 researchers across 96 hospitals in 5 countries to analyze anonymized EHR data for COVID-19 research without sharing patient data across institutions. Lav Patel is a member and data infrastructure contributor to this consortium.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Lav Patel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lav Patel can be reached by email at lavpatel39@gmail.com. He is also active on LinkedIn at linkedin.com/in/lav-patel/ and on X (Twitter) at @lav_p_patel. His research profile and publication list are available on ORCID at orcid.org/0000-0002-8626-137X.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Federated EHR Analysis of COVID-19 Clinical Outcomes Across International Hospital Networks",
    author: { "@id": PERSON_ID },
    datePublished: "2021",
    publisher: { "@type": "Organization", name: "npj Digital Medicine" },
    isPartOf: { "@type": "Periodical", name: "npj Digital Medicine" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "International Electronic Health Record Analysis for COVID-19 Research: A Federated Approach",
    author: { "@id": PERSON_ID },
    datePublished: "2021",
    publisher: {
      "@type": "Organization",
      name: "The Lancet Digital Health",
    },
    isPartOf: { "@type": "Periodical", name: "The Lancet Digital Health" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Characterization of COVID-19 Patient Populations Using Real-World EHR Data",
    author: { "@id": PERSON_ID },
    datePublished: "2022",
    publisher: { "@type": "Organization", name: "JAMA Network Open" },
    isPartOf: { "@type": "Periodical", name: "JAMA Network Open" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Optimization of PCORnet Common Data Model for Large-Scale Distributed Clinical Research",
    author: { "@id": PERSON_ID },
    datePublished: "2022",
    publisher: { "@type": "Organization", name: "JAMIA" },
    isPartOf: {
      "@type": "Periodical",
      name: "Journal of the American Medical Informatics Association",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Machine Learning for Clinical Outcome Prediction in COVID-19 Using Federated Hospital Data",
    author: { "@id": PERSON_ID },
    datePublished: "2023",
    publisher: { "@type": "Organization", name: "Scientific Reports" },
    isPartOf: { "@type": "Periodical", name: "Scientific Reports" },
  },
];

export default function Home() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Component />
    </>
  );
}
