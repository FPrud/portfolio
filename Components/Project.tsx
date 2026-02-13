import Link from "next/link";

type ProjectProps = {
    title: string;
    created_at: string;
    description: string;
    imageSrc: string;
    githubUrl: string;
    demoUrl: string;
    isLeft?: boolean;
};

export default function Project({
    title,
    created_at,
    description,
    imageSrc,
    githubUrl,
    demoUrl,
    isLeft,
}: ProjectProps) {
    // Formater la date au format jj/mm/aaaa
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div id="project" className="relative flex flex-col border-2 mb-5 p-5 bg-(--color-background) rounded-md">
            {/* Ligne de jonction */}
            {isLeft && (
                <div id="junction-left" className="absolute top-1/2 -right-5 w-5 h-0.5 bg-(--color-primary)"></div>
            )}
            {!isLeft && isLeft !== undefined && (
                <div id="junction-right" className="absolute top-1/2 -left-5 w-5 h-0.5 bg-(--color-primary)"></div>
            )}
            
            <h2 id="project-title" className="text-center Horizon text-xl pb-5"><Link id="github-link" href={githubUrl} target="_blank">{title}</Link></h2>
            <p id="created_at">{formatDate(created_at)}</p>
            <p id="project-content">{description}</p>
            <img id="project-image" src={imageSrc} alt={title} />
            <Link id="github-link" href={githubUrl} target="_blank" className="font-bold">
                GitHub
            </Link>
            <Link id="demo-link" href={demoUrl} target="_blank" className="font-bold">
                Demo
            </Link>
        </div>
    );
}