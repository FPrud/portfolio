"use server";

export async function getProjects() {
    try {
        const response = await fetch("https://api.github.com/users/FPrud/repos", {
            headers: {
                Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 }, // Cache pendant 1 heure
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        console.log("Projets récupérés:", repos);

        return repos;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        return [];
    }
}