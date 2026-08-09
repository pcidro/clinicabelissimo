import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Bellissimo",
  description: "Site institucional da Clínica Bellissimo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
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
