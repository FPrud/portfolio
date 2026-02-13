import Footer from "@/Components/Footer";

export default function projectsPage() {

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Projets</h1>
                <p id="content" className="self-center pb-5">
                    Voici une sélection des projets que j'ai réalisé, ou auxquels j'ai participé. J'essaye, dans la mesure du possible, de déployer et maintenir ces projets pour conserver leur trace le plus longtemps possible. N'hésitez pas à y faire un tour et essayer les outils.
                </p>
            </div>
            <Footer />
        </main >
    );
}