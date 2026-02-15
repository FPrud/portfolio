"use client";

import Curriculum from "@/Components/Curriculum";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function curriculumPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "CV_Felix_Prudhomme",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {        
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        #CV {
          box-shadow: none !important;
          transform-origin: top left;
          overflow: hidden;
        }
      }
    `,
  });

  return (
    <main id="page entière" className="flex flex-1 flex-col w-full p-5 overflow-auto">

      <div id="article" className="flex flex-col pb-15">
        <h1 id="title" className="text-center Horizon text-3xl pb-5">Curriculum</h1>
        <p id="content" className="flex flex-col gap-5">Mon CV est réalisé en HTML et CSS avec Tailwind. Cliquez sur le bouton pour le convertir en PDF, en utilisant la fonction useReactToPrint. Pour le télécharger, choisissez la destination "Fichier PDF" pour conserver les liens cliquables. Le numéro de téléphone n'est visible que sur la version PDF.

          <button
            onClick={handleDownloadPDF}
            className="mb-5 p-3 bg-(--color-accent) text-(--color-background) rounded-lg self-center cursor-pointer"
          >
            Télécharger en PDF
          </button>

          Cette page est pour l'instant non responsive, car je voulais dans un premier temps simuler le rapport de proportions d'une page A4, afin que mes éléments ne glissent pas. je travaille à la conception d'une version mobile.</p>
      </div>

      <div className="flex justify-center min-w-fit">
        <Curriculum cvRef={cvRef} />
      </div>
      <Footer />
    </main >
  );
};