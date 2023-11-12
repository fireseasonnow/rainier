"use client";

import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";
import { useState } from "react";

const navigationItems = ["HOME", "ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

const Navigation = () => {
    const [isActive, setIsActive] = useState("HOME");

    return (
        <header className="top-0 sticky z-10">
            <nav className="h-32 flex text-orange-600 text-xl border-b-2 border-orange-600 items-center">
                <div className="flex px-6 max-sm:px-3 justify-center w-full h-full">
                    <MobileNavButton />
                    <div className="hidden lg:flex border-x-2 border-orange-600 px-6">
                        <ul className="flex items-center gap-24">
                            {navigationItems.map((item: string) => (
                                <NavigationItem
                                    key={item}
                                    name={item}
                                    isActive={isActive === item}
                                    onClick={()=>setIsActive(item)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>           
            </nav>
        </header>
    );
};

export default Navigation;