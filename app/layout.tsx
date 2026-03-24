import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lav Patel | Manager, Data and AI Architecture",
  description:
    "Lav Patel is Manager, Data and AI Architecture at the University of Kansas Medical Center. Creator of CareScriptMD. EB-1 Extraordinary Ability holder. 24 peer-reviewed publications, 1,031 citations, h-index 17. npj Digital Medicine editorial board member. 4CE Consortium member.",
  authors: [{ name: "Lav Patel", url: "https://lavpatel.com" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lavpatel.com" },
  openGraph: {
    type: "profile",
    firstName: "Lav",
    lastName: "Patel",
    title: "Lav Patel | Manager, Data and AI Architecture",
    description:
      "Lav Patel is Manager, Data and AI Architecture at KUMC. Creator of CareScriptMD. EB-1 Extraordinary Ability. 24 publications, 1,031 citations, h-index 17. npj Digital Medicine editorial board. 4CE Consortium member.",
    url: "https://lavpatel.com",
    siteName: "Lav Patel",
    images: [
      {
        url: "https://lavpatel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lav Patel — Manager, Data and AI Architecture at KUMC. Creator of CareScriptMD.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lav_p_patel",
    creator: "@lav_p_patel",
    title: "Lav Patel | Manager, Data and AI Architecture",
    description:
      "Manager, Data and AI Architecture at KUMC. Creator of CareScriptMD. EB-1 Extraordinary Ability. 24 publications, 1,031 citations, h-index 17.",
    images: ["https://lavpatel.com/og-image.png"],
  },
  other: {
    "DC.creator": "Lav Patel",
    "DC.subject":
      "Healthcare Data Infrastructure, AI Systems, Biomedical Informatics",
    "citation_author": "Patel, Lav P",
    "citation_author_institution": "University of Kansas Medical Center",
    "citation_author_orcid": "https://orcid.org/0000-0002-8626-137X",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
