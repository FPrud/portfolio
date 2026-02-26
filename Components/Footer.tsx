import Link from "next/link";
import StaticStar from "./StaticStar";

export default function Footer() {

    return (
        <footer className="flex flex-col gap-2 m-5">
            <Link href="/" className="flex flex-col self-center text-center">
                <StaticStar className="h-20 self-center" />
            </Link>
            <Link href="/" className="flex flex-col self-center text-center">
                <h3 className="Horizon">Retour à l'accueil</h3>
            </Link>
        </footer>
    )
};
