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
                        ? "border-b-2 border-white text-white lg:border-orange-500 lg:text-orange-500"
                        : "hover:scale-110 hover:border-b-2 hover:border-white hover:text-white focus:border-b-2 focus:border-white focus:text-white lg:hover:border-orange-500 lg:hover:text-orange-500 lg:focus:border-orange-500"
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
