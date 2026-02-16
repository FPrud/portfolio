"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

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

    const getLinkClassName = (href: string) => {
        const isActive = pathname === href;
        return `px-5 py-2 border-l-2 border-(--color-primary) ${isActive ? 'bg-(--color-primary) text-(--color-background)' : ''}`;
    };

    return (
        <div id="navBar" className="flex border-b-2 overflow-auto text-xl">
            <Link href="/" className={`px-5 py-2 ${pathname === '/' ? 'bg-(--color-primary) text-(--color-background)' : ''}`}>
                <h3>
                    <span className="Horizon">Félix</span>
                    <span className="HorizonOutlined font-black">Prudhomme</span>
                </h3>
            </Link>
            <Link href="/curriculum" className={getLinkClassName('/curriculum')}>
                <h3 className="Horizon">Curriculum</h3>
            </Link>

            <Link href="/projets" className={getLinkClassName('/projets')}>
                <h3 className="Horizon">Projets</h3>
            </Link>

            <Link href="/blog" className={getLinkClassName('/blog')}>
                <h3 className="Horizon">Blog</h3>
            </Link>

            <Link href="/hobbies" className={getLinkClassName('/hobbies')}>
                <h3 className="Horizon">Hobbies</h3>
            </Link>

        </div>
    );
};