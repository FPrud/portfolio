import Footer from "@/Components/Footer";

export default function notFound() {

    return (
        <div id="page entière" className="flex flex-col flex-1 bg-cloud">
            <article id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Page introuvable</h1>
                <p id="content" className="self-center pb-5">
                    Désolé, la page que vous recherchez n'existe pas.
                </p>
            </article>

            <Footer />
        </div>
    );
};