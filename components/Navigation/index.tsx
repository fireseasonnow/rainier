import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";
import logo from "./../../assets/logo.svg"; // TODO: Replace with a final logo
import Image from "next/image";

const navigationItems = ["ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

const Navigation = () => {
    return (
        <header className="top-0 sticky z-10 bg-white">
            <nav className="h-24 flex text-orange-600 text-md border-b-2 border-orange-500 items-center">
                <a className="w-16 mx-4 max-lg:w-20" href="#">
                    <Image src={logo} width={100} height={100} alt="Logo" />
                </a>
                <div className="flex gap-11 px-6 max-sm:px-3 justify-center w-full">
                    <MobileNavButton />
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-11">
                            {navigationItems.map((item: string) => (
                                <NavigationItem
                                    key={item}
                                    name={item}
                                    onClick={() => `clicked ${item}`}
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