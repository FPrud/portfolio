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
            <Link href="/">
                <div className="p-5">
                    <h3>
                        <span className="Horizon">Félix</span>
                        <span className="HorizonOutlined font-black">Prudhomme</span>
                    </h3>
                </div>
            </Link>
            <Link href="/curriculum">
                <div className="p-5 border-l-3">
                    <h3 className="Horizon">Curriculum</h3>
                </div>
            </Link>
            <Link href="/projets">
                <div className="p-5 border-l-3">
                    <h3 className="Horizon">Mes&nbsp;projets</h3>
                </div>
            </Link>
            <Link href="/hobbies">
                <div className="p-5 border-l-3">
                    <h3 className="Horizon">hobbies</h3>
                </div>
            </Link>
        </div>
    );
};