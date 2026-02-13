import Link from "next/link";

type ProjectProps = {
    title: string;
    description: string;
    imageSrc: string;
    githubUrl: string;
    demoUrl: string;
};

export default function Project({
    title,
    description,
    imageSrc,
    githubUrl,
    demoUrl,
}: ProjectProps) {
    return (
        <div id="project" className="flex flex-col w-3/5 border-2 mb-5 p-5 bg-(--color-background)">
            <h2 id="project-title" className="text-center Horizon text-xl pb-5">{title}</h2>
            <p id="project-content">{description}</p>
            <img id="project-image" src={imageSrc} alt={title} />
            <Link id="github-link" href={githubUrl} target="_blank">
                GitHub
            </Link>
            <Link id="demo-link" href={demoUrl} target="_blank">
                Demo
            </Link>
        </div>
    );
}