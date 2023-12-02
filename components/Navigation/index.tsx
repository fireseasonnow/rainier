"use client";

import { useState } from "react";
import clsx from "clsx";
import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";

const navigationItems = ["HOME", "ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

const Navigation = () => {
    const [isActive, setIsActive] = useState("HOME");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavItemClick = (item: string) => {
        setIsActive(item);
    };

    const mappedNavItems = navigationItems.map((item: string) => (
        <NavigationItem
            key={item}
            name={item}
            isActive={isActive === item}
            onClick={() => handleNavItemClick(item)}
        />
    ));

    const mobileNavDropdownClasses = clsx({
        ["lg:hidden"]: true,
        "block": isMobileMenuOpen,
        "hidden": !isMobileMenuOpen
    });

    return (
        <header className="sticky top-0 z-10 lg:m-5">
            <nav className="flex h-[90px] border-b-2 border-orange-600 text-xl">
                <div className="flex h-full w-full justify-end px-6 max-sm:px-3 lg:justify-center">
                    <MobileNavButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuToggle} />

                    <div className={mobileNavDropdownClasses}>
                        <ul className="absolute left-0 top-0 mt-32 flex h-screen w-full flex-col items-center gap-4 bg-orange-600 pt-10 text-orange-100">
                            {mappedNavItems}
                        </ul>
                    </div>

                    <div className="hidden border-x-2 border-orange-600 px-6 lg:flex">
                        <ul className="flex items-center gap-24">
                            {mappedNavItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
