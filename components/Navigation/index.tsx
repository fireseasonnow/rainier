"use client";

import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";
import { useState } from "react";

const navigationItems = ["HOME", "ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

// const Navigation = () => {
//     const [isActive, setIsActive] = useState("HOME");
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const handleMobileMenuToggle = () => {
//         setMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <header className="top-0 sticky z-10">
//             <nav className="h-32 flex text-orange-600 text-xl border-b-2 border-orange-600 items-center">
//                 <div className="flex px-6 max-sm:px-3 justify-center w-full h-full">
//                     <MobileNavButton  isOpen={isMobileMenuOpen}
//                         onClick={handleMobileMenuToggle}/>
//                     <div className="hidden lg:flex border-x-2 border-orange-600 px-6">
//                         <ul className="flex items-center gap-24">
//                             {navigationItems.map((item: string) => (
//                                 <NavigationItem
//                                     key={item}
//                                     name={item}
//                                     isActive={isActive === item}
//                                     onClick={()=>setIsActive(item)}
//                                 />
//                             ))}
//                         </ul>
//                     </div>
//                 </div>           
//             </nav>
//         </header>
//     );
// };

// export default Navigation;


const Navigation = () => {
    const [isActive, setIsActive] = useState("HOME");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="top-0 sticky z-10">
            <nav className="h-32 flex text-orange-600 text-xl border-b-2 border-orange-600 items-center">
                <div className="flex px-6 max-sm:px-3 justify-center w-full h-full">
                    <MobileNavButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuToggle} />
                    <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col items-center gap-4 bg-orange-600 text-white w-full h-screen absolute top-0 left-0 pt-10 mt-32">
                            {navigationItems.map((item: string) => (
                                <NavigationItem
                                    key={item}
                                    name={item}
                                    isActive={isActive === item}
                                    onClick={() => setIsActive(item)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:flex border-x-2 border-orange-600 px-6">
                        <ul className="flex items-center gap-24">
                            {navigationItems.map((item: string) => (
                                <NavigationItem
                                    key={item}
                                    name={item}
                                    isActive={isActive === item}
                                    onClick={() => setIsActive(item)}
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
