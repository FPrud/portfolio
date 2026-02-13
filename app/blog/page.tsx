import Footer from "@/Components/Footer";

export default function blogPage() {

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="article" className="flex flex-col">
                <h1 id="title" className="text-center Horizon text-3xl pb-5">Blog</h1>
                <p id="content" className="self-center pb-5">
                    Cette section arrive vite !
                </p>
            </div>
            <Footer />
        </main >
    );
}