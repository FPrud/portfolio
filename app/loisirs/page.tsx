import Link from "next/link";

export default function hobbiesPage() {

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Loisirs</h1>
                <p id="presentation" className="self-center pb-5">
                    Cette section arrive vite !
                </p>
                <Link href="/" className="self-center pb-5">
                    <h3 className="Horizon">Retour à l'accueil</h3>
                </Link>
                <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
            </div>
        </main >
    );
}