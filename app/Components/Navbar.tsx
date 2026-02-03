import Link from "next/link";

export const Navbar = () => {


    return (
        <div id="navBanner" className="flex border-b-3 justify-between">
            <Link href="/" className="flex">
                <div className="flex p-5">
                    <h2 className="Horizon self-center">Félix Prudhomme</h2>
                </div>
            </Link>
            <Link href="/CV" className="p-5 border-l-3 content-center">
                <div className="flex">
                    <h2 className="Horizon self-center">CV</h2>
                </div>
            </Link>
            <Link href="/projets" className="p-5 border-l-3 content-center">
                <div className="flex">
                    <h2 className="Horizon self-center">Projets dev</h2>
                </div>
            </Link>
        </div>
    );
};