"use client";

import clsx from "clsx";
import Link from "next/link";

type NavigationItem = {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

const NavigationItem = ({ name, isActive, onClick }: NavigationItem) => {
    const navItemLinkClasses = clsx({
        ["block transition duration-150 ease-in-out"]: true,
        ["border-b-2 border-white text-white lg:border-orange-500 lg:text-orange-500"]: isActive,
        ["hover:scale-110 hover:border-b-2 hover:border-white hover:text-white focus:border-b-2 focus:border-white focus:text-white lg:hover:border-orange-500 lg:hover:text-orange-500 lg:focus:border-orange-500"]: !isActive
    });

    return (
        <li>
            <Link
                className={navItemLinkClasses}
                href="#!"
                onClick={onClick}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavigationItem;
