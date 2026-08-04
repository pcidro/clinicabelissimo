import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Bellissimo",
  description: "Site institucional da Clínica Bellissimo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo principal
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
