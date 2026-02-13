import Link from "next/link";

export default function notFound() {

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Page introuvable</h1>
                <p id="content" className="self-center pb-5">
                    Désolé, la page que vous recherchez n'existe pas.
                </p>
                <Link href="/" className="self-center justify-center">
                    <h3 className="Horizon">Retour à l'accueil</h3>
                </Link>
            </div>
            <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
        </main >
    );
}