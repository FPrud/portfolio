import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../Components/Navbar";


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
        <div className="flex flex-col border-2 m-5 flex-1 overflow-hidden rounded-md">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}