import Link from "next/link";

type ProjectProps = {
    title: string;
    created_at: string;
    description: string;
    imageSrc: string;
    githubUrl: string;
    demoUrl: string;
    isLeft?: boolean;
    isMobile?: boolean;
};

export default function Project({
    title,
    created_at,
    description,
    imageSrc,
    githubUrl,
    demoUrl,
    isLeft,
    isMobile = false,
}: ProjectProps) {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div id="project-card" className="relative border-2 mb-5 p-5 bg-(--color-background) rounded-md">

            <div id="project-image-links">
                <div id="project-image-container" className="w-48 h-32 shrink-0 mr-3 mb-3 overflow-hidden rounded border float-start">
                    <Link id="demo-link" href={demoUrl} target="_blank" className="font-bold">
                        <img
                            id="project-image"
                            className="w-full h-full object-cover object-top"
                            src={imageSrc}
                            alt={title}
                        />
                    </Link>
                </div>
            </div>


            <div id="project-presentation" className="">

                <h2 id="project-title" className="Horizon text-xl">
                    <Link id="github-link" href={githubUrl} target="_blank">{title}</Link>
                </h2>
                <p id="created_at">{formatDate(created_at)}</p>
                <div id="links" className="flex gap-5">
                    <Link id="github-link" href={githubUrl} target="_blank" className="font-bold">
                        GitHub
                    </Link>
                    <Link id="demo-link" href={demoUrl} target="_blank" className="font-bold">
                        Demo
                    </Link>
                </div>
                <br />
                <p id="project-description">{description}</p>
            </div>

            {/* Junction pour mobile */}
            {isMobile && (
                <div id="junction-mobile" className="absolute top-1/2 -left-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}

            {/* Junctions pour desktop */}
            {!isMobile && isLeft && (
                <div id="junction-left" className="absolute top-1/2 -right-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}
            {!isMobile && !isLeft && isLeft !== undefined && (
                <div id="junction-right" className="absolute top-1/2 -left-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}
        </div>
    );
}