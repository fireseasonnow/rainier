"use client";

interface Props {
  name: string;
  isActive: boolean
  onClick: () => void
}

const NavigationItem = (props: Props) => {
    const { name, isActive, onClick } = props;
 

    return (
        <li>
            <a
                className={`block transition duration-150 ease-in-out ${
                    isActive
                        ? "border-b-2 md:border-orange-500 md:text-orange-500 border-white text-white"
                        : "hover:border-b-2 md:hover:border-orange-500 focus:border-b-2 md:focus:border-orange-500 hover:scale-110 md:hover:text-orange-500 hover:text-white focus:text-white hover:border-white focus:border-white"
                }`}
                href="#!"
                onClick={onClick}
            >
                {name}
            </a>
        </li>
    );
};

export default NavigationItem;
