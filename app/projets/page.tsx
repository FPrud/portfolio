import Footer from "@/Components/Footer";
import Project from "@/Components/Project";
import { getProjects } from "@/Actions/getProjects";

export default async function projectsPage() {
    const projects = await getProjects();

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud-2 overflow-auto">
            <div id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Projets</h1>
                <p id="content" className="self-center pb-5">
                    Voici une sélection des projets que j'ai réalisé, ou auxquels j'ai participé. J'essaye, dans la mesure du possible, de déployer et maintenir ces projets pour conserver leur trace le plus longtemps possible. N'hésitez pas à y faire un tour et essayer les outils.
                </p>
            </div>
            <div id="projects-container" className="flex flex-col items-start">
                {projects.map((project: any) => (
                    <Project
                        key={project.id}
                        title={project.name}
                        description={project.description || "Pas de description"}
                        imageSrc="/images/placeholder.png"
                        githubUrl={project.html_url}
                        demoUrl={project.homepage || project.html_url}
                    />
                ))}
            </div>
            <Footer />
        </main>
    );
}