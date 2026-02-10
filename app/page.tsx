export default function Home() {
  return (
    <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
      <div id="article" className="flex flex-col">
        <h1 id="title" className="text-center Horizon text-3xl">Bienvenue</h1>
        <p id="presentation" className="text-justify">Arrivé au terme de mon premier cycle de formation chez Ada Tech School, j'ai décidé de réaliser ce portfolio afin d'en faire une vitrine pour mes projets. Durant sa réalisation, j'ai réalisé que</p>
      </div>
      <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
    </main >
  );
}