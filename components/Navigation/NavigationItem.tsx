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
                    isActive ? "underline" : "hover:underline focus:text-underline"
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
