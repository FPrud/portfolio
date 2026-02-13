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
        <div id="project" className="pb-5">
            <h2 id="project-title">{title}</h2>
            <p id="project-content">{description}</p>
            <img id="project-image" src={imageSrc} alt={title} />
            <Link id="github-link" href={githubUrl}>
                GitHub
            </Link>
            <Link id="demo-link" href={demoUrl}>
                Demo
            </Link>
        </div>
    );
}