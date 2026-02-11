"use client";

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
    <main id="page entière" className="flex flex-1 flex-col  w-full p-5 overflow-auto">
      <h1 id="title" className="text-center Horizon text-3xl pb-5">Curriculum</h1>
      <p id="presentation" className="pb-5">Mon CV est réalisé en HTML + CSS avec Tailwind. Cliquez sur le bouton pour le convertir en PDF, en utilisant la fonction useReactToPrint. Cette page est volontairement non responsive, car je voulais dans un premier temps simuler le rapport de proportions d'une page A4, afin que mes éléments ne glissent pas. Une version consultable en ligne sur un appareil mobile est en cours de conception.</p>
      <button
        onClick={handleDownloadPDF}
        className="mb-5 p-3 bg-(--color-accent) text-(--color-background) rounded-lg self-center cursor-pointer"
      >
        Télécharger en PDF
      </button>
      <p id="presentation" className="pb-5">Dans le menu de votre navigateur, choisissez la destination "Fichier PDF" pour conserver les liens cliquables et le texte sélectionnable.</p>
      <div className="flex justify-center min-w-fit">

        <div ref={cvRef} id="CV" className="flex flex-col justify-center w-260 aspect-[1/1.414] bg-(--color-background) p-15 shadow-2xl bg-blob">

          <div id="title" className="flex flex-wrap justify-center border-b-3">
            <h1 className="flex flex-wrap justify-center text-5xl break-all p-5">
              <span className="Horizon">Félix</span>
              <span className="HorizonOutlined font-black">Prudhomme</span>
            </h1>
          </div>

          <div id="links" className="flex justify-between Intro items-center border-b-3 p-5">

            <div id="col-1" className="flex flex-col w-1/3 text-left text-wrap">
              <Link href="https://felixprudhomme.website/" target="_blank">Felixprudhomme.website</Link>
              <Link href="https://github.com/FPrud" target="_blank">GitHub.com/fprud</Link>
              <Link href="https://www.linkedin.com/in/f%C3%A9lix-prudhomme-2767a6330/" target="_blank">Linkedin.com/fprud</Link>
            </div>

            <div id="col-2" className="flex flex-col w-1/3 text-3xl text-center">
              <h2>Paris</h2>
            </div>

            <div id="col-3" className="flex flex-col w-1/3 text-right">
              <Link href="mailto:felixprudhomme94@gmail.com">
                <h2 className="flex flex-wrap text-right justify-end">
                  <span>felixprudhomme94</span>
                  <span>@gmail.com</span>
                </h2>
              </Link>
              <h2>+33 6 17 21 47 27</h2>
            </div>
          </div>

          <div id="body" className="flex">

            <div id="left-col" className="flex flex-col w-1/3">

              <div id="presentation" className="pt-5 pr-5 pb-5 border-b-3">
                <div id="portrait" className="aspect-3/4 rounded-t-full overflow-hidden grayscale brightness-112 contrast-125 pb-3">
                  <img src="/portrait.webp" alt="Félix Prudhomme" className="w-full h-full object-cover" />
                </div>
                <div id="jobSearch" className="pb-3 text-justify">
                  <p className="Intro">
                    Développeur fullstack en recherche d’alternance : 4j par semaine pendant 12 mois, à partir de mai 2026.
                  </p>
                </div>
                <div id="shortBio" className="text-justify">
                  <p className="Chocolates">
                    Passionné et engagé, j’aime m'investir dans des projets qui ont du sens. Après une longue période de travail dans le secteur associatif, je me reconvertis dans la tech pour exploiter mon intérêt pour l’informatique, en privilégiant l’innovation et les initiatives à impact.
                  </p>
                </div>
              </div>

              <div id="skills" className="pt-5 pr-5 pb-5 border-b-3">
                <h2 className="Intro">Compétences développeur</h2>
                <ul className="Chocolates list-disc list-inside  pb-3">
                  <li>TypeScript, React, Next.js</li>
                  <li>PostgreSQL, Express, ORM, BetterAuth</li>
                  <li>HTML, CSS, Tailwind</li>
                  <li>GitHub</li>
                </ul>
                <h2 className="Intro">Autres compétences</h2>
                <ul className="Chocolates list-disc list-inside">
                  <li>Bureautique Microsoft et Google</li>
                  <li>Figma, Canva, Photoshop, After Effects</li>
                  <li>Animation, prise de parole en public</li>
                  <li>Méthodes agiles, gestion de projets</li>
                  <li>Anglais</li>
                </ul>
              </div>

              <div id="hobbies" className="pt-5 pr-5">
                <h2 className="Intro">Loisirs</h2>
                <ul className="Chocolates list-disc list-inside">
                  <li>Photographie argentique : développement et tirages manuels</li>
                  <li>Enregistrement de podcasts en mix</li>
                  <li>Modding de jeux vidéo</li>
                </ul>
              </div>

            </div>

            <div id="right-col" className="flex flex-col w-2/3 border-l-3">

              <div id="formation" className="flex flex-col pl-5 pt-5 border-b-3">

                <h2 className="Intro pb-3">
                  Formations
                </h2>
                <div id="2-columns" className="flex flex-row gap-5 pb-5">
                  <div id="col-1" className="flex flex-col w-1/2">
                    <h3 className="ChocolatesBold">Ada Tech School</h3>
                    <p className="Chocolates">
                      2025 - 2026, Paris
                      <br /><span className="ChocolatesBold">Diplôme :</span> RNCP 6 - Développeur et concepteur d'applications
                      <br /><span className="ChocolatesBold">Stack :</span>  TypeScript, React, Next.js, PostgreSQL, Express, ORM, BetterAuth, HTML, CSS, Tailwind, GitHub
                    </p>
                  </div>

                  <div id="col-2" className="flex flex-col w-1/2">
                    <h3 className="ChocolatesBold">Université de Bourgogne</h3>
                    <p className="Chocolates">
                      2016, Dijon
                      <br /><span className="ChocolatesBold">Diplôme :</span> Licence en musicologie
                      <br /><span className="ChocolatesBold">Expériences :</span> Recherches académiques, rédaction de mémoire
                    </p>
                  </div>
                </div>
              </div>

              <div id="projects" className="flex flex-col pl-5 pt-5 border-b-3">

                <h2 className="Intro pb-3">
                  Projets
                </h2>
                <div id="2-columns" className="flex flex-row gap-5 pb-5">
                  <div id="col-1" className="flex flex-col w-1/2">
                    <Link href="https://cineducoinadatechschool.vercel.app/" target="_blank"><h3 className="ChocolatesBold">Collab'</h3></Link>
                    <p className="Chocolates text-justify">
                      Paris, 2026
                      <br />Une application d’annonces permettant aux musiciens amateurs de se constituer un réseau. Rechercher des musiciens avec qui collaborer, ou former un groupe.
                      <br /><span className="ChocolatesBold">Features :</span> Création d'une carte de visite, publication d’annonces et de commentaires, recherche par mots-clés, panneaux d’administration.
                      <br /><span className="ChocolatesBold">Stack :</span> TypeScript, Next.js, ORM, Neon, BetterAuth, Tailwind
                      <br /><Link href="https://github.com/FPrud/collab-1.0" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                      <br /><Link href="https://collab-1-0.vercel.app/" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                    </p>
                  </div>

                  <div id="col-2" className="flex flex-col w-1/2">
                    <Link href="https://cineducoinadatechschool.vercel.app/" target="_blank"><h3 className="ChocolatesBold">CinéDuCoin</h3></Link>
                    <p className="Chocolates text-justify">
                      Paris, 2025
                      <br />Une application permettant de trouver tous les cinémas se trouvant aux alentours, avec une recherche par adresse et un paramètre ajustable de distance.
                      <br /><span className="ChocolatesBold">Features :</span> Fetch de deux API en chaîne, autocomplétion de recherche, calcul de distance par coordonnées géolocalisées.
                      <br /><span className="ChocolatesBold">Stack :</span> HTML, CSS, Javascript
                      <br /><Link href="https://github.com/FPrud/collab-1.0" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                      <br /><Link href="https://collab-1-0.vercel.app/" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div id="experiences" className="flex flex-col pl-5 pt-5">

                <h2 className="Intro pb-3">
                  Expériences
                </h2>
                <div id="1-column" className="flex flex-col gap-5 pb-5">
                  <div id="col-1" className="flex flex-col">
                    <h3 className="ChocolatesBold">La Ligue de l’enseignement</h3>
                    <p className="Chocolates text-justify">
                      2022 - 2025, Paris
                      <br />Chargé de mission Vie Fédérative : accompagnement d’associations dans leurs démarches de recherche de partenariats, de financements, et dans l’accueil de volontaires en service civique. Création et animation de formations professionnelles.
                      <br /><span className="ChocolatesBold">Expérience :</span> gestion de relations partenariales, veille administrative, animation de formations professionnelles.
                    </p>
                  </div>

                  <div id="col-2" className="flex flex-col">
                    <h3 className="ChocolatesBold">La Ligue de l’enseignement</h3>
                    <p className="Chocolates text-justify">
                      2018 - 2022, Paris
                      <br />Assistant administratif : création des contrats de Service Civique pour la fédération de Paris. Création et animation de formations d’accompagnement pour les volontaires. Réforme et optimisation des processus administratifs.
                      <br /><span className="ChocolatesBold">Expérience :</span> organisation, rigueur, respect des deadlines,  programmation d’automatisations pour les processus administratifs répétitifs, travail en équipe.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
    </main >
  );
};