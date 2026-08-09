import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const siteUrl = "https://clinicabelissimo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Clínica Odontológica Bellissimo | Seu sorriso é nossa maior satisfação",
    template: "%s | Clínica Bellissimo",
  },

  description:
    "Clínica odontológica especializada em estética do sorriso, implantes, ortodontia, endodontia e harmonização facial. Cuidado, saúde e beleza para o seu sorriso.",

  keywords: [
    "clínica odontológica",
    "estética do sorriso",
    "implantes dentários",
    "ortodontia",
    "endodontia",
    "harmonização facial",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/brand/icons/bellissimo-mark-tooth-red.png",
    shortcut: "/images/brand/icons/bellissimo-mark-tooth-red.png",
    apple: "/images/brand/icons/bellissimo-mark-tooth-red.png",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Clínica Bellissimo",

    title:
      "Clínica Odontológica Bellissimo | Seu sorriso é nossa maior satisfação",

    description:
      "Cuidado, saúde e beleza para o seu sorriso. Conheça a Clínica Bellissimo e nossos tratamentos em odontologia e estética.",

    images: [
      {
        url: "/images/brand/icons/bellissimo-mark-tooth-red.png",
        width: 800,
        height: 800,
        alt: "Clínica Odontológica Bellissimo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Clínica Odontológica Bellissimo | Seu sorriso é nossa maior satisfação",

    description:
      "Cuidado, saúde e beleza para o seu sorriso. Conheça a Clínica Bellissimo e nossos tratamentos em odontologia e estética.",

    images: ["/images/brand/icons/bellissimo-mark-tooth-red.png"],
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
