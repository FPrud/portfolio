import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../Components/Navbar";
import Footer from "@/Components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Félix Prudhomme ",
  description: "Bienvenue sur mon site web. Vous pouvez y trouver mon portfolio, mon CV, mes projets personnels et centres d'intérêt, et mon actualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col antialiased bg-(--color-background)">
        <header>
          <Navbar />
        </header>
        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}