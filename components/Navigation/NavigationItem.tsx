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
                        ? "border-b-2 border-orange-500 text-orange-500"
                        : "hover:border-b-2 hover:border-orange-500 focus:border-b-2 focus:border-orange-500 hover:scale-110 hover:text-orange-500"
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
