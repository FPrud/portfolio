"use client";

import Link from "next/link";
import { useEffect } from "react";

export const Navbar = () => {

    useEffect(() => {
        const element = document.querySelector("#navBar") as HTMLElement;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();

            element.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
            });
        };

        element?.addEventListener('wheel', handleWheel);

        return () => {
            element?.removeEventListener('wheel', handleWheel);
        };
    }, []);


    return (
        <div id="navBar" className="flex border-b-2 overflow-auto text-xl">
            <Link href="/" className="px-5 py-2">
                <h3>
                    <span className="Horizon">Félix</span>
                    <span className="HorizonOutlined font-black">Prudhomme</span>
                </h3>
            </Link>
            <Link href="/curriculum" className="px-5 py-2 border-l-2">
                <h3 className="Horizon">Curriculum</h3>
            </Link>
            
            <Link href="/projets" className="px-5 py-2 border-l-2">
                <h3 className="Horizon">Projets</h3>
            </Link>
            {/* <Link href="/blog" className="px-5 py-2 border-l-2">
                    <h3 className="Horizon">Blog</h3>
            </Link>
            <Link href="/loisirs" className="px-5 py-2 border-l-2">
                    <h3 className="Horizon">Loisirs</h3>
            </Link> */}

            <div className="px-5 py-2 border-l-2 cursor-not-allowed">
                <h3 className="Horizon">Blog</h3>
            </div>
            <div className="px-5 py-2 border-l-2 cursor-not-allowed">
                <h3 className="Horizon">Loisirs</h3>
            </div>
            
        </div>
    );
};