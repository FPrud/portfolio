import Link from "next/link";

interface CurriculumProps {
    cvRef: React.RefObject<HTMLDivElement | null>;
}

export default function Curriculum({ cvRef }: CurriculumProps) {
    return (
        <div ref={cvRef} id="CV" className="flex flex-col justify-center w-full md:w-260 aspect-[1/1.414] bg-(--color-background) p-8 md:p-15 bg-blob border-2">

            <div id="title" className="flex flex-col justify-center items-center border-b-3 pb-3">
                <h1 className="flex flex-wrap justify-center text-center text-3xl md:text-5xl break-all">
                    <span className="Horizon ">Félix</span>
                    <span className="HorizonOutlined font-black ">Prudhomme</span>
                </h1>
                <p className="text-sm md:text-base text-center">Développeur full stack en recherche d'alternance</p>
            </div>

            <div id="links" className="flex flex-col md:flex-row justify-between Intro items-center border-b-3 p-3 md:p-5 gap-3 md:gap-0 text-xs md:text-base">

                <div id="col-1" className="flex flex-col w-full md:w-1/3 text-center md:text-left text-wrap">
                    <h2>
                        <Link href="https://github.com/FPrud" target="_blank">GitHub.com/fprud</Link>
                    </h2>
                    <h2>
                        <Link href="https://www.linkedin.com/in/f%C3%A9lix-prudhomme-2767a6330/" target="_blank">Linkedin.com/fprud</Link>
                    </h2>
                </div>

                <div id="col-2" className="flex flex-col w-full md:w-1/3 text-center text-wrap">
                    <h2>
                        <Link href="https://felixprudhomme.website/" target="_blank">Felixprudhomme.website</Link>
                    </h2>
                    <h2>Paris et ses environs</h2>
                </div>

                <div id="col-3" className="flex flex-col w-full md:w-1/3 text-center md:text-right justify-end">
                    <h2>
                        <span className="print:hidden">+33 6 ## ## ## 27</span>
                        <span className="hidden print:inline">+33 6 17 21 47 27</span>
                    </h2>
                    <h2>
                        <Link href="mailto:felixprudhomme94@gmail.com">felixprudhomme94<br />@gmail.com</Link>
                    </h2>
                </div>

            </div>

            <div id="body" className="flex flex-col md:flex-row">

                <div id="left-col" className="flex flex-col w-full md:w-1/3 order-1 md:order-1">

                    <div id="presentation" className="pt-5 md:pr-5 pb-5 border-b-3">
                        <div id="portrait" className="aspect-3/4 rounded-t-full overflow-hidden grayscale brightness-112 contrast-125 pb-3 max-w-xs mx-auto md:max-w-none">
                            <img src="/portrait.webp" alt="Félix Prudhomme" className="w-full h-full object-cover" />
                        </div>
                        <div id="shortBio" className="text-justify text-sm md:text-base">
                            <p className="Chocolates">
                                <span className="Intro">Développeur full stack en recherche d'alternance : 4j par semaine pendant 12 mois, à partir de mai 2026.</span><br />
                                Passionné et engagé, j'aime m'investir dans des projets qui ont du sens. Après une longue période de travail dans le secteur associatif, je me reconvertis dans le développement informatique pour exploiter mon intérêt pour le code, en privilégiant l'innovation et les initiatives à impact.
                            </p>
                        </div>
                    </div>

                    <div id="skills" className="pt-5 md:pr-5 pb-5 border-b-3 text-sm md:text-base">
                        <h2 className="Intro">Compétences développeur</h2>
                        <ul className="Chocolates list-disc list-inside pb-3">
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

                    <div id="hobbies" className="pt-5 md:pr-5 pb-5 md:pb-0 border-b-3 md:border-b-0 text-sm md:text-base">
                        <h2 className="Intro">Loisirs</h2>
                        <ul className="Chocolates list-disc list-inside">
                            <li>Photographie argentique : développement et tirages manuels</li>
                            <li>Enregistrement de podcasts en mix</li>
                            <li>Modding de jeux vidéo</li>
                        </ul>
                    </div>

                    {/* Projets en dessous de md breakpoint, dans la colonne de gauche */}
                    <div id="projects-mobile" className="flex flex-col pt-5 border-b-3 md:hidden text-sm">
                        <h2 className="Intro pb-3">Projets</h2>
                        <div className="flex flex-col gap-5 pb-5">
                            <div className="flex flex-col">
                                <Link href="https://github.com/FPrud/Collab" target="_blank"><h3 className="ChocolatesBold">Collab'</h3></Link>
                                <p className="Chocolates text-justify">
                                    Paris, 2026
                                    <br />Une application d'annonces permettant aux musiciens amateurs de se constituer un réseau. Rechercher des musiciens avec qui collaborer, ou former un groupe.
                                    <br /><span className="ChocolatesBold">Features :</span> Création d'une carte de visite, publication d'annonces et de commentaires, recherche par mots-clés, panneaux d'administration.
                                    <br /><span className="ChocolatesBold">Stack :</span> TypeScript, Next.js, ORM, Neon, BetterAuth, Tailwind
                                    <br /><Link href="https://github.com/FPrud/Collab" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                                    <br /><Link href="https://collab-two-tau.vercel.app//" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <Link href="https://github.com/FPrud/CineDuCoin" target="_blank"><h3 className="ChocolatesBold">CinéDuCoin</h3></Link>
                                <p className="Chocolates text-justify">
                                    Paris, 2025
                                    <br />Une application permettant de trouver tous les cinémas se trouvant aux alentours, avec une recherche par adresse et un paramètre ajustable de distance.
                                    <br /><span className="ChocolatesBold">Features :</span> Fetch de deux API en chaîne, autocomplétion de recherche, calcul de distance par coordonnées géolocalisées.
                                    <br /><span className="ChocolatesBold">Stack :</span> HTML, CSS, Javascript
                                    <br /><Link href="https://github.com/FPrud/CineDuCoin" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                                    <br /><Link href="https://cineducoinadatechschool.vercel.app/" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="right-col" className="flex flex-col w-full md:w-2/3 md:border-l-3 order-2 md:order-2">

                    <div id="formation" className="flex flex-col md:pl-5 pt-5 border-b-3 text-sm md:text-base">
                        <h2 className="Intro pb-3">Formations</h2>
                        <div id="2-columns" className="flex flex-col md:flex-row gap-5 pb-5">
                            <div id="col-1" className="flex flex-col w-full md:w-1/2">
                                <h3 className="ChocolatesBold">Ada Tech School</h3>
                                <p className="Chocolates">
                                    2025 - 2026, Paris
                                    <br /><span className="ChocolatesBold">Diplôme :</span> RNCP 6 - Développeur et concepteur d'applications
                                    <br /><span className="ChocolatesBold">Stack :</span>  TypeScript, React, Next.js, PostgreSQL, Express, ORM, BetterAuth, HTML, CSS, Tailwind, GitHub
                                </p>
                            </div>

                            <div id="col-2" className="flex flex-col w-full md:w-1/2">
                                <h3 className="ChocolatesBold">Université de Bourgogne</h3>
                                <p className="Chocolates">
                                    2016, Dijon
                                    <br /><span className="ChocolatesBold">Diplôme :</span> Licence en musicologie
                                    <br /><span className="ChocolatesBold">Expériences :</span> Recherches académiques, rédaction de mémoire
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projets visible uniquement au-dessus du md breakpoint */}
                    <div id="projects" className="hidden md:flex flex-col pl-5 pt-5 border-b-3 text-sm md:text-base">
                        <h2 className="Intro pb-3">Projets</h2>
                        <div id="2-columns" className="flex flex-row gap-5 pb-5">
                            <div id="col-1" className="flex flex-col w-1/2">
                                <Link href="https://github.com/FPrud/Collab" target="_blank"><h3 className="ChocolatesBold">Collab'</h3></Link>
                                <p className="Chocolates text-justify">
                                    Paris, 2026
                                    <br />Une application d'annonces permettant aux musiciens amateurs de se constituer un réseau. Rechercher des musiciens avec qui collaborer, ou former un groupe.
                                    <br /><span className="ChocolatesBold">Features :</span> Création d'une carte de visite, publication d'annonces et de commentaires, recherche par mots-clés, panneaux d'administration.
                                    <br /><span className="ChocolatesBold">Stack :</span> TypeScript, Next.js, ORM, Neon, BetterAuth, Tailwind
                                    <br /><Link href="https://github.com/FPrud/Collab" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                                    <br /><Link href="https://collab-two-tau.vercel.app//" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                                </p>
                            </div>

                            <div id="col-2" className="flex flex-col w-1/2">
                                <Link href="https://github.com/FPrud/CineDuCoin" target="_blank"><h3 className="ChocolatesBold">CinéDuCoin</h3></Link>
                                <p className="Chocolates text-justify">
                                    Paris, 2025
                                    <br />Une application permettant de trouver tous les cinémas se trouvant aux alentours, avec une recherche par adresse et un paramètre ajustable de distance.
                                    <br /><span className="ChocolatesBold">Features :</span> Fetch de deux API en chaîne, autocomplétion de recherche, calcul de distance par coordonnées géolocalisées.
                                    <br /><span className="ChocolatesBold">Stack :</span> HTML, CSS, Javascript
                                    <br /><Link href="https://github.com/FPrud/CineDuCoin" target="_blank" className="ChocolatesBold">Voir le projet sur GitHub</Link>
                                    <br /><Link href="https://cineducoinadatechschool.vercel.app/" target="_blank" className="ChocolatesBold">Voir le projet déployé</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="experiences" className="flex flex-col md:pl-5 pt-5 text-sm md:text-base">
                        <h2 className="Intro pb-3">Expériences</h2>
                        <div id="1-column" className="flex flex-col gap-5 pb-5">
                            <div id="col-1" className="flex flex-col">
                                <h3 className="ChocolatesBold">La Ligue de l'enseignement</h3>
                                <p className="Chocolates text-justify">
                                    2022 - 2025, Paris
                                    <br />Chargé de mission Vie Fédérative : accompagnement d'associations dans leurs démarches de recherche de partenariats, de financements, et dans l'accueil de volontaires en service civique. Création et animation de formations professionnelles.
                                    <br /><span className="ChocolatesBold">Expérience :</span> gestion de relations partenariales, veille administrative, animation de formations professionnelles.
                                </p>
                            </div>

                            <div id="col-2" className="flex flex-col">
                                <h3 className="ChocolatesBold">La Ligue de l'enseignement</h3>
                                <p className="Chocolates text-justify">
                                    2018 - 2022, Paris
                                    <br />Assistant administratif : création des contrats de Service Civique pour la fédération de Paris. Création et animation de formations d'accompagnement pour les volontaires. Réforme et optimisation des processus administratifs.
                                    <br /><span className="ChocolatesBold">Expérience :</span> organisation, rigueur, respect des deadlines,  programmation d'automatisations pour les processus administratifs répétitifs, travail en équipe.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};