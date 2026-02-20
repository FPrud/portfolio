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

        // Pour chaque fork, récupérer les détails complets incluant le parent
        const reposWithParentInfo = await Promise.all(
            repos.map(async (repo: any) => {
                if (repo.fork) {
                    try {
                        const detailResponse = await fetch(repo.url, {
                            headers: {
                                Accept: "application/vnd.github.v3+json",
                            },
                            next: { revalidate: 3600 },
                        });
                        if (detailResponse.ok) {
                            return await detailResponse.json();
                        }
                    } catch (error) {
                        console.error(`Erreur pour ${repo.name}:`, error);
                    }
                }
                return repo;
            })
        );

        // Trier par date de création (plus récent en premier)
        const sortedRepos = reposWithParentInfo.sort((a: any, b: any) => {
            const dateA = a.fork && a.parent?.created_at ? a.parent.created_at : a.created_at;
            const dateB = b.fork && b.parent?.created_at ? b.parent.created_at : b.created_at;
            
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        });

        return sortedRepos;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        return [];
    }
}