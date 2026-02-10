export default function Home() {
  return (
    <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
      <div id="article" className="flex flex-col">
        <h1 id="title" className="text-center Horizon text-3xl pb-5">Bienvenue</h1>
        <p id="presentation" className="text-justify">Arrivé au terme de mon premier cycle de formation chez Ada Tech School, j'ai décidé de réaliser ce portfolio afin d'en faire une vitrine pour mes projets. Durant sa réalisation, j'ai réalisé que j'avais envie que mon premier vrai site web soit plus qu'une simple gallerie de projets. J'ai voulu faire de mon portfolio un projet à part entière. J'en ai profité pour faire une recherche esthétique, mais également de developper des features qui, selon moi, démontrent une envie de faire plus que le minimum. Par exemple :
          <ul>
            <li>
              Une barre de navigation qui, si l'écran n'affiche pas la barre entière, scrolle à l'horizontale avec la roulette de la souris .
            </li>
            <li>
              Un CV réalisé en HTML et CSS avec Tailwind, car se sont des outils de conception que je manipule mieux que Canva.
            </li>
            <li>
              Un bouton permettant de télécharger le CV, en le convertissant en pdf. Une feature qui me semble utile, à la fois pour les visiteur·euses qui souhaitent le consulter ou l'enregistrer, mais aussi pour moi, car je peux éditer mon CV en ligne et garder facilement ma version pdf à jour.
            </li>
            <li>
              Un blog est en cours de construction. Ça me semble important de chroniquer mes actualités de dev sur une autre plateforme que LinkedIn ou GitHub. 
            </li>
          </ul>
        </p>
      </div>
      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
    </main >
  );
}