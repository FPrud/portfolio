import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";


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
      <body className="flex flex-col antialiased bg-(--color-background) h-screen w-screen overflow-hidden">
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-auto w-full">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}