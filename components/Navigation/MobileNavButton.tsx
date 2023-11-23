type MobileNavButton = {
    isOpen: boolean;
    onClick: () => void;
}

const MobileNavButton = ({ isOpen, onClick }: MobileNavButton) => (
    <button
        className="border-0 bg-transparent py-2 leading-none transition-shadow duration-150 ease-in-out hover:text-orange-500 lg:hidden"
        aria-label="Navigation"
        onClick={onClick}
    >
        <span className="[&>svg]:w-24 max-lg:[&>svg]:w-12">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 transition-transform duration-150 ease-in-out hover:scale-110"
            >
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
        </span>
    </button>
);

export default MobileNavButton;
