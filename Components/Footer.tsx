import Link from "next/link";

export default function Footer() {

    return (
        <Link href="/" className="flex flex-col self-center pb-5 text-center">
            <img src="/star.svg" alt="déco étoile" className="h-20 mt-5 self-center" />
            <h3 className="Horizon">Retour à l'accueil</h3>
        </Link>
    );
};