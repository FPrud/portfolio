import Link from "next/link";
import { formatDate } from "@/actions/formatDate";

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

    return (
        <div id="project-card" className="relative border-2 mb-5 p-5 bg-(--color-background) rounded-md last:mb-0">

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


            <div id="project-presentation">

                <h2 id="project-title" className="Horizon text-xl">
                    <Link id="github-link" href={githubUrl} target="_blank">{title}</Link>
                </h2>
                <p id="created_at" className="text-gray-600">{formatDate(created_at)}</p>
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

            {/* Mobile junction */}
            {isMobile && (
                <div id="junction-line" className="absolute top-1/2 -left-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}

            {/* Desktop junctions */}
            {!isMobile && isLeft && (
                <div id="junction-line-left" className="absolute top-1/2 -right-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}
            {!isMobile && !isLeft && isLeft !== undefined && (
                <div id="junction-line-right" className="absolute top-1/2 -left-5.25 w-5.25 h-0.5 bg-(--color-primary)"></div>
            )}
        </div>
    );
}