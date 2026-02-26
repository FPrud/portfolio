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
          width: 1040px !important;
          padding: 60px !important;
          font-size: 16px !important;
        }

        #CV h1 {
          font-size: 3rem !important;
        }

        #CV #links,
        #CV #body {
          font-size: 16px !important;
        }

        #CV #left-col,
        #CV #right-col {
          display: flex !important;
        }

        #CV #left-col {
          width: 33.333333% !important;
        }

        #CV #right-col {
          width: 66.666667% !important;
          border-left: 3px solid !important;
        }

        #CV #projects-mobile {
          display: none !important;
        }

        #CV #projects {
          display: flex !important;
        }

        #CV #body {
          flex-direction: row !important;
        }

        #CV #links {
          flex-direction: row !important;
          gap: 0 !important;
        }

        #CV #links > div {
          width: 33.333333% !important;
        }
      }
    `,
  });

  return (
    <div id="page entière" className="flex flex-1 flex-col w-full">

      <article id="article" className="flex flex-col pb-5">
        <h1 id="title" className="text-center Horizon text-3xl pb-5">Curriculum</h1>
        <p id="content" className="flex flex-col gap-5 self-center text-justify">
          Mon CV est réalisé en HTML et CSS avec Tailwind. Cliquez sur le bouton pour le convertir en PDF, en utilisant la fonction useReactToPrint. Pour le télécharger, choisissez la destination "Fichier PDF" pour conserver les liens cliquables.

          <button
            onClick={handleDownloadPDF}
            className="mb-5 button self-center"
          >
            Télécharger en PDF
          </button>
        </p>
      </article>

      <div className="flex justify-center w-full overflow-auto">
        <Curriculum cvRef={cvRef} />
      </div>
    </div >
  );
};