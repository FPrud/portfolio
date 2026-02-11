export default function Home() {
  return (
    <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
      <div id="article" className="flex flex-col">
        <h1 id="title" className="text-center Horizon text-3xl pb-5">Bienvenue</h1>
        <p className="text-justify mb-5">
          Bonjour et bienvenue sur mon portfolio. En guise d'introduction, je vais vous présenter le contexte de sa création, ainsi que mes objectifs pour ce site. <br />
          Arrivé au terme de mon premier cycle de formation chez Ada Tech School, au campus de Paris, j'ai décidé de publier un portfolio afin d'en faire une vitrine pour présenter mes projets. Durant sa réalisation, j'ai pris conscience que j'avais envie que mon premier vrai site web soit plus qu'une simple galerie de projets. J'ai voulu faire de mon portfolio un projet à part entière. J'en ai profité pour faire une recherche esthétique, mais également de développer des fonctionnalités qui démontrent une envie de faire plus que le minimum. Vous trouverez par exemple :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Un CV réalisé directement en HTML et CSS avec Tailwind, car même si je suis capable d'utiliser Canva ou d'autres outils de design grand public, je trouve les langages de conception web plus précis et permettant une intégration plus souple.
          </li>
          <li>
            Un bouton permettant de télécharger le CV, en le convertissant en pdf. Une fonctionnalités qui me semble utile, à la fois pour les employeurs dans la tech qui passeraient par là, mais aussi pour moi, car je peux le mettre à jour tout en m'assurant que la dernière version est en ligne.
          </li>
          <li>
            En construction : la section Projets, qui me permettra de présenter les projets d'école individuels et collectifs, ainsi que les projets perso que j'ai pu développer sur mon temps libre.
          </li>
          <li>
            En construction : le blog, qui me permettra de chroniquer mes actualités de développeur sur une autre plateforme que LinkedIn ou GitHub, qui ne me motivent pas toujours.
          </li>
          <li>
            En construction : la section loisirs, dans laquelle je prévois d'exposer mes créations artistiques et inventions créatives. Par exemple, on y trouvera une sélection de photographies argentiques, développées et tirées manuellement, en amateur. Ou encore un ou deux liens de playlists, voire même de podcasts mixés à l'occasion. Ou tout autres projets vers lesquels l'inspiration me mènera.
          </li>
        </ul>
      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
      </div>
    </main >
  );
}