export default function Home() {
  return (
    <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
      <div id="article" className="flex flex-col">
        <h1 id="title" className="text-center Horizon text-3xl pb-5">Bienvenue</h1>
        <p className="text-justify mb-5">
          Bonjour et bienvenue sur mon portfolio. En guise d'introduction, je vais vous présenter le contexte de sa création, ainsi que mes objectifs à travers ce site. <br />
          Arrivé au terme de mon premier cycle de formation chez Ada Tech School, au campus de Paris, j'ai décidé de publier un portfolio afin d'en faire une vitrine pour présenter mes projets. Durant sa réalisation, j'ai pris conscience que j'avais envie que mon premier vrai site web soit plus qu'une simple gallerie de projets. J'ai voulu faire de mon portfolio un projet à part entière. J'en ai profité pour faire une recherche esthétique, mais également de developper des features qui, selon moi, démontrent une envie de faire plus que le minimum. Vous trouverez par exemple :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Un CV réalisé directement en HTML et CSS avec Tailwind, car bien que capable d'utiliser Canva ou autres outils de design, se sont ces outils de conception que je manipule le mieux.
          </li>
          <li>
            Un bouton permettant de télécharger le CV, en le convertissant en pdf. Une feature qui me semble utile, à la fois pour les visiteur·euses qui souhaitent le consulter ou l'enregistrer, mais aussi pour moi, car je peux éditer exposer mon CV en ligne, le mettre à jour régulièrement, et garder facilement ma version téléchargée la plus récente à jour.
          </li>
          <li>
            En construction : la section Projets permetant de présenter les projets d'école, individuels et collectifs, ainsi que les projets perso, que j'ai pu développer sur mon temps libre
          </li>
          <li>
            En construction : le blog, qui me permet chroniquer mes actualités de developpeur sur une autre plateforme que LinkedIn ou GitHub, qui ne me motivent pas toujours.
          </li>
          <li>
            En construction : la section loisirs, dans laquelle je prévois d'exposer mes créations artistiques et inventions créatives. Par exemple, on y trouvera une selection de photographies argentiques, développées et tirées manuellement, en amateur. Ou encore un ou deux liens de playlists, voire même de podcasts mixés à l'occasion. Ou tout autres projets vers lesquels l'inspiration me mèneront.
          </li>
        </ul>
      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
      </div>
    </main >
  );
}