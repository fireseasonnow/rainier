import NavigationItem from "./NavigationItem";
import MobileNavButton from "./MobileNavButton";
import logo from "./../../assets/logo.svg"; // TODO: Replace with a final logo
import Image from "next/image";

const navigationItems = ["ABOUT", "BOOKS", "AUTHORS", "CONTACT"];

export default () => {
  return (
    <header className="top-0 sticky z-10 bg-white">
      <nav className="h-24 flex text-orange-600 text-md shadow-sm justify-center">
        <div className="flex gap-6 items-center px-6 max-sm:px-3">
          <div className="flex gap-3 items-center">
            <MobileNavButton />
            <a className="w-32 max-lg:w-20" href="#">
              <Image src={logo} width={100} height={100} alt="Logo" />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
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
