import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clinicabelissimo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clínica Bellissimo — Seu Sorriso é nossa maior satisfação",
  description:
    "Seu Sorriso é nossa maior satisfação. Na Clínica Bellissimo, cada tratamento é planejado de maneira individual, unindo saúde, estética e uma experiência acolhedora em todas as etapas.",
  keywords: [
    "Clínica Odontológica",
    "Dentista Água Rasa",
    "Estética Dental",
    "Odontologia São Paulo",
    "Clínica Bellissimo",
    "Dra. Aline Bellissimo",
    "Tratamento Odontológico",
  ],
  authors: [{ name: "Clínica Bellissimo" }],
  icons: {
    icon: "/images/brand/icons/bellissimo-mark-tooth-red.png",
    shortcut: "/images/brand/icons/bellissimo-mark-tooth-red.png",
    apple: "/images/brand/icons/bellissimo-mark-tooth-red.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Clínica Bellissimo — Seu Sorriso é nossa maior satisfação",
    description:
      "Seu Sorriso é nossa maior satisfação. Na Clínica Bellissimo, cada tratamento é planejado de maneira individual, unindo saúde, estética e uma experiência acolhedora em todas as etapas.",
    siteName: "Clínica Bellissimo",
    images: [
      {
        url: "/images/brand/icons/bellissimo-mark-tooth-red.png",
        width: 800,
        height: 800,
        alt: "Clínica Bellissimo — Seu Sorriso é nossa maior satisfação",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Clínica Bellissimo — Seu Sorriso é nossa maior satisfação",
    description:
      "Seu Sorriso é nossa maior satisfação. Na Clínica Bellissimo, cada tratamento é planejado de maneira individual, unindo saúde, estética e uma experiência acolhedora em todas as etapas.",
    images: ["/images/brand/icons/bellissimo-mark-tooth-red.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="icon" href="/images/brand/icons/bellissimo-mark-tooth-red.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/brand/icons/bellissimo-mark-tooth-red.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
