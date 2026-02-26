export default function Home() {
  return (
    <div id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
      <article id="article" className="flex flex-col">
        <h1 id="title" className="text-center Horizon text-4xl break-all">
          Félix
          <span className="HorizonOutlined font-black">
            Prudhomme
          </span>
        </h1>
        <h2 id="subtitle" className="text-center text-3xl mb-5">Développeur full stack</h2>
        <p id="content" className="text-justify mb-5">
          Bonjour et bienvenue sur mon portfolio. Arrivé au terme de mon premier cycle de formation chez Ada Tech School, au campus de Paris, j'ai décidé de publier un portfolio afin d'en faire une vitrine pour présenter mes projets. J'avais envie que mon premier site web soit plus qu'une simple galerie de projets : j'ai voulu en faire un projet à part entière. J'en ai profité pour faire une recherche esthétique, mais également pour développer des fonctionnalités qui démontrent une envie de faire plus que le minimum. Vous trouverez par exemple :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Mon CV, qui est réalisé en HTML et CSS avec Tailwind. J'ai intégré un bouton qui permet de télécharger le CV en le convertissant en pdf. Une fonctionnalité utile car elle me permet de partager facilement la dernière version.
          </li>
          <li>
            La section Projets, qui me permet de présenter les projets d'école individuels et collectifs, ainsi que les projets personnels que j'ai pu développer sur mon temps libre.
          </li>
          <li>
            Le blog, qui me permet de chroniquer mes actualités de développeur, partager mes points de vues personnels et poser des mots sur les concepts que j'apprends au fur et à mesure.
          </li>
          <li>
            En construction : la section loisirs, dans laquelle je prévois d'exposer des créations. On y trouvera une sélection de photographies argentiques, développées et tirées manuellement. Ou encore les liens de mes playlists et podcasts mixés. Ou tout autres projets vers lesquels l'inspiration me mènera.
          </li>
        </ul>
      </article>
    </div >
  );
}