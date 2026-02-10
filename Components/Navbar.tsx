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
        <div id="navBar" className="flex border-b-3 overflow-auto text-xl">
            <Link href="/" className="p-5">
                    <h3>
                        <span className="Horizon">Félix</span>
                        <span className="HorizonOutlined font-black">Prudhomme</span>
                    </h3>
            </Link>
            <Link href="/curriculum"  className="p-5 border-l-3">
                    <h3 className="Horizon">Curriculum</h3>
            </Link>
            <Link href="/projets" className="p-5 border-l-3">
                    <h3 className="Horizon">Projets</h3>
            </Link>
            <Link href="/hobbies" className="p-5 border-l-3">
                    <h3 className="Horizon">Loisirs</h3>
            </Link>
            <Link href="/blog" className="p-5 border-l-3">
                    <h3 className="Horizon">Blog</h3>
            </Link>
        </div>
    );
};