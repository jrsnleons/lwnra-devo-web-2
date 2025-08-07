interface BookLogoProps {
    className?: string;
    size?: number;
}

export function BookLogo({ className = "", size = 24 }: BookLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Book cover */}
            <path
                d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
                fill="url(#bookGradient)"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Book spine */}
            <path
                d="M8 4V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* Pages/lines */}
            <path
                d="M11 8H16M11 10H16M11 12H16M11 14H14"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
            />

            {/* Book bookmark */}
            <path
                d="M6 4V8L7 7L8 8V4"
                fill="url(#bookmarkGradient)"
                stroke="currentColor"
                strokeWidth="0.5"
            />

            <defs>
                {/* Book gradient */}
                <linearGradient
                    id="bookGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* Bookmark gradient */}
                <linearGradient
                    id="bookmarkGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
            </defs>
        </svg>
    );
}
