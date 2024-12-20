import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { CpuIcon, GithubIcon, TwitterIcon } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import Script from 'next/script'; // Import Script component


export function Component() {
  const canonicalUrl = 'https://lavpatel.com';
  const experiences = [
    {
      period: "Feb '21 - Present",
      title: "Senior Team Lead - Biomedical Informatics Software Engineer",
      company: "University of Kansas Medical Center",
      location: "Kansas City, Kansas, United States",
      responsibilities: [
        "Successfully led a cross-functional team of 10 engineers in the development and implementation of a cutting-edge biomedical informatics software system.",
        "Architected and oversaw the construction of a COVID-19 data pipeline, connecting approximately 10 prestigious hospitals in just 7 days.",
        "Headed the Knowledge Discovery Team and authored 20 papers on COVID-19.",
        "Employed Python, PyTorch, Scikit-learn, Triton, CUDA, C++, and SQL.",
      ],
    },
    {
      period: "Aug '20 - Mar '21",
      title: "Team Lead - Biomedical Informatics Software Engineer",
      company: "University of Kansas Medical Center",
      location: "Kansas City, Kansas, United States",
      responsibilities: [
        "Significantly enhanced the execution speed of PCORNET Common Data Model (CDM) task, resulting in a reduction from 233 hours to 5 hours (47X faster).",
        "Leveraged Python, Java, Spark, SQL, Airflow, Bash, and Jenkins.",
      ],
    },
    {
      period: "Feb '19 -    Sep '20",
      title: "Biomedical Informatics Software Engineer",
      company: "University of Kansas Medical Center",
      location: "Kansas City, Missouri Area",
      responsibilities: [
        "Improved speed and flexibility of a slow data pipeline, reducing processing time from 4 hours to 5 minutes.",
        "Debugged and optimized the main Extract Transform and Load (ETL) process, decreasing processing time from 28 days to 7 days.",
        "Debugged an open-source Java software called I2B2, optimizing the system to achieve query completion within seconds.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Head>
        <title>Lav Patel - Team Lead Software Engineer</title>
        <meta
          name="description"
          content="Objective-driven Senior Team Lead Software Engineer with a wealth of experience in spearheading the development of cutting-edge solutions within the healthcare industry."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Lav Patel - Team Lead Software Engineer" />
        <meta
          property="og:description"
          content="Objective-driven Senior Team Lead Software Engineer with a wealth of experience in spearheading the development of cutting-edge solutions within the healthcare industry."
        />
        <meta property="og:image" content="https://lavpatel.com/lav-patel.jpeg" />
        <meta property="og:url" content="https://lavpatel.com" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Lav Patel",
              "jobTitle": "Team Lead Software Engineer",
              "image": "https://lavpatel.com/lav-patel.jpeg",
              "url": "https://lavpatel.com",
              "sameAs": [
                "https://www.linkedin.com/in/lav-patel/",
                "https://github.com/lav-patel"
              ]
            })
          }}
        />
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "https://lavpatel.com",
              "name": "Lav Patel",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lavpatel.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Structured Data for Site Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Home",
                  "url": "https://lavpatel.com/"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "About",
                  "url": "https://lavpatel.com/#about"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Resume",
                  "url": "https://drive.google.com/file/d/1OxyCbacRnMSqhT3FJBeIUOHK05La6tDX/view"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Contact",
                  "url": "mailto:lavpatel39@gmail.com"
                }
              ]
            })
          }}
        />
      </Head>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white fixed left-0 right-0">
        <Link className="flex items-center justify-center" href="/">
          <CpuIcon className="h-6 w-6" />
          <span className="sr-only">Lav Patel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://drive.google.com/file/d/1OxyCbacRnMSqhT3FJBeIUOHK05La6tDX/view"
          >
            Resume
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="mailto:lavpatel39@gmail.com"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex gap-2">
          <Link
            className="text-gray-400 hover:text-gray-200"
            href="https://www.linkedin.com/in/lav-patel/"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-400 hover:text-gray-200"
            href="https://x.com/lav_p_patel"
            aria-label="X | Twitter"
          >
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link
            className="text-gray-400 hover:text-gray-200"
            href="https://github.com/lav-patel"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
        </div>
        <link rel="canonical" href={canonicalUrl} />
      </header>
      <main className="flex-1">
        <section
          className="w-full h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg')",
          }}
        >
          <div className="container h-full flex flex-col items-center justify-center px-4 md:px-6 space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <Image
                alt="Portrait of Lav Patel"
                className="rounded-full"
                height={120}
                src="https://lavpatel.com/lav-patel.jpeg"
                width={120}
                priority={true} // Preload the image
              />
              <br />
              <h1 className="text-3xl font-bold text-gray-700">Lav Patel</h1>
              <p className="text-xl text-gray-500">
                Team Lead Software Engineer
              </p>
              <p className="text-xl text-gray-500">
                Driving Innovation in Biomedical Informatics
              </p>
            </div>
            <div className="flex gap-4">
              <AnimatedButton
                href="https://drive.google.com/file/d/1OxyCbacRnMSqhT3FJBeIUOHK05La6tDX/view"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                View Resume
              </AnimatedButton>
              <AnimatedButton
                href="mailto:lavpatel39@gmail.com"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Contact Me
              </AnimatedButton>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <article>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Lav Patel
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Objective-driven Senior Team Lead Software Engineer with a
                  wealth of experience in spearheading the development of
                  cutting-edge solutions within the healthcare industry.
                  Results-oriented and consistently recognized as the top
                  performer amongst a team of 20 for the past 6 years, securing
                  promotions in every performance evaluation. I possess a strong
                  background in designing and implementing scalable systems,
                  leading technical teams, and effectively managing multiple
                  projects. Demonstrating an impressive track record of
                  enhancing system efficiency, I have successfully reduced
                  execution times and resolved slow data pipelines. Proficient
                  in languages such as Python, R, SQL, Bash, C++, and
                  technologies like Azure, AWS, Databricks, Docker, Linux, Git,
                  and various databases.
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  As a seasoned professional, I have a proven track record of
                  delivering high-impact projects, fostering collaborative
                  environments, and mentoring junior engineers. My expertise
                  spans a wide range of technologies, including machine
                  learning, data analytics, and cloud-based architectures, all
                  of which I leverage to tackle complex challenges in the
                  biomedical field.
                </p>
              </article>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Achievements</h3>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>
                      Architected and implemented a COVID-19 data pipeline
                      connecting approximately 10 prestigious hospitals in just
                      7 days, a task that typically takes 1.5 months
                    </li>
                    <li>
                      Improved the execution speed of PCORNET Common Data Model
                      (CDM) task, reducing processing time from 233 hours to 5
                      hours (47X faster)
                    </li>
                    <li>
                      Led initiative to secure and protect over 21 Million
                      Medicare and Medicaid patients data, maintaining zero
                      security breaches
                    </li>
                  </ul>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Key Objectives</h3>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>
                      To lead and innovate in the development of
                      high-performance, scalable biomedical informatics systems
                      that significantly improve healthcare data processing and
                      analysis
                    </li>
                    <li>
                      To apply advanced software engineering and data science
                      techniques to solve complex healthcare challenges,
                      particularly in areas like COVID-19 research and
                      large-scale patient data management
                    </li>
                    <li>
                      To drive the implementation of secure, efficient, and
                      compliant healthcare IT infrastructures that can handle
                      sensitive patient data while meeting strict industry
                      standards and regulations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="resume">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Resume
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Download Lav &apos;s comprehensive resume to learn more about his
                  professional experience, skills, and achievements.
                </p>
                <div className="mt-6">
                  <AnimatedButton
                    href="https://drive.google.com/file/d/1OxyCbacRnMSqhT3FJBeIUOHK05La6tDX/view"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  >
                    Download Resume
                  </AnimatedButton>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <div className="mt-4 space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[100px_1fr] items-start gap-4"
                    >
                      <div className="text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {exp.company}
                        </p>
                        <ul className="mt-2 list-disc pl-4 text-gray-500 dark:text-gray-400">
                          {exp.responsibilities.map(
                            (responsibility, idx) => (
                              <li key={idx}>{responsibility}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function GitlabIcon(props: any) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function HospitalIcon(props: any) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
