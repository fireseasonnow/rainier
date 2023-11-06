import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";
import logo from "./../../assets/logo.svg"; // TODO: Replace with a final logo
import Image from "next/image";

const navigationItems = ["ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

const Navigation = () => {
    return (
        <header className="top-0 sticky z-10 bg-white">
            <nav className="h-32 flex text-orange-600 text-xl border-b-2 border-orange-500 items-center">
                <a className="w-16 mx-4 max-lg:w-20" href="#">
                    <Image src={logo} width={100} height={100} alt="Logo" />
                </a>
                <div className="flex px-6 max-sm:px-3 justify-center w-full h-full">
                    <MobileNavButton />
                    <div className="hidden lg:flex border-x-2 border-orange-500 px-6">
                        <ul className="flex items-center gap-24">
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