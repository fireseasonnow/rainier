const MobileNavButton = () => {
  
    return (
        <button
            className="border-0 bg-transparent py-2 leading-none transition-shadow duration-150 ease-in-out hover:text-black focus:text-black lg:hidden"
            aria-label="Navigation"
        >
            <span className="[&>svg]:w-24 max-lg:[&>svg]:w-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </span>
        </button>
    );
};

export default MobileNavButton;
