import Footer from "@/Components/Footer";
import Project from "@/Components/Project";
import { getProjects } from "@/Actions/getProjects";

export default async function projectsPage() {
    const projects = await getProjects();

    return (
        <div id="page entière" className="flex flex-col flex-1 p-5 overflow-auto">
            <article id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl mb-5">Projets</h1>
                <p id="content" className="self-center text-justify mb-5">

                    Voici une sélection des projets d'école individuels et collectifs, ainsi que les projets personnels que j'ai pu développer sur mon temps libre. Les projets affichés ne sont pas rédigés en dur dans le code du site, il s'agit d'un appel à l'API de GitHub, ce qui facilite l'ajout de mes nouveaux projets. Les projets sont filtrés par date de création, du plus récent au plus ancien. J'essaye, dans la mesure du possible, de maintenir ces projets pour conserver leur trace le plus longtemps possible.
                </p>
            </article>
            <div id="projects-container" className="relative flex flex-col md:flex-row md:items-start">

                <div id="vertical-line" className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-(--color-primary) md:-translate-x-1/2"></div>

                {/* Version mobile/tablette : une seule colonne */}
                <div id="mobile-col" className="flex flex-col w-full md:hidden pl-5">
                    {projects.map((project: any) => (
                        <Project
                            key={project.id}
                            title={project.name}
                            created_at={project.fork && project.parent?.created_at ? project.parent.created_at : project.created_at}
                            description={project.description || "Pas de description"}
                            imageSrc={`https://raw.githubusercontent.com/FPrud/${project.name}/main/thumbnail.png`}
                            githubUrl={project.html_url}
                            demoUrl={project.homepage || project.html_url}
                            isLeft={false}
                            isMobile={true}
                        />
                    ))}
                </div>

                {/* Version desktop : deux colonnes */}
                <div id="left-col" className="hidden md:flex flex-col w-1/2 pr-5">
                    {projects.filter((_, index) => index % 2 === 0).map((project: any) => (
                        <Project
                            key={project.id}
                            title={project.name}
                            created_at={project.fork && project.parent?.created_at ? project.parent.created_at : project.created_at}
                            description={project.description || "Pas de description"}
                            imageSrc={`https://raw.githubusercontent.com/FPrud/${project.name}/main/thumbnail.png`}
                            githubUrl={project.html_url}
                            demoUrl={project.homepage || project.html_url}
                            isLeft={true}
                            isMobile={false}
                        />
                    ))}
                </div>
                <div id="right-col" className="hidden md:flex flex-col w-1/2 pl-5">
                    {projects.filter((_, index) => index % 2 !== 0).map((project: any) => (
                        <Project
                            key={project.id}
                            title={project.name}
                            created_at={project.fork && project.parent?.created_at ? project.parent.created_at : project.created_at}
                            description={project.description || "Pas de description"}
                            imageSrc={`https://raw.githubusercontent.com/FPrud/${project.name}/main/thumbnail.png`}
                            githubUrl={project.html_url}
                            demoUrl={project.homepage || project.html_url}
                            isLeft={false}
                            isMobile={false}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}