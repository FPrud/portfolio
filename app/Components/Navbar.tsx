"use client";

import Link from "next/link";
import { useEffect } from "react";

export const Navbar = () => {

    useEffect(() => {
        const element = document.querySelector("#navBanner") as HTMLElement;

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
        <div id="navBanner" className="flex border-b-3 overflow-auto">
            <Link href="/">
                <div className="p-5">
                    <h2 className="Horizon">Félix&nbsp;Prudhomme</h2>
                </div>
            </Link>
            <Link href="/CV-liens">
                <div className="p-5 border-l-3">
                    <h2 className="Horizon">CV&nbsp;+&nbsp;Liens</h2>
                </div>
            </Link>
            <Link href="/projets">
                <div className="p-5 border-l-3">
                    <h2 className="Horizon">Mes&nbsp;projets</h2>
                </div>
            </Link>
            <Link href="/hobbies">
                <div className="p-5 border-l-3">
                    <h2 className="Horizon">hobbies</h2>
                </div>
            </Link>
        </div>
    );
};