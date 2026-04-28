type CondorMarkProps = {
  className?: string;
};

export function CondorMark({ className = "" }: CondorMarkProps) {
  return (
    <svg
      viewBox="0 0 420 420"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="condor-gradient" x1="70" y1="40" x2="320" y2="330" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D7B792" />
          <stop offset="0.58" stopColor="#1E6876" />
          <stop offset="1" stopColor="#103941" />
        </linearGradient>
      </defs>
      <path
        d="M72 320c30-72 78-126 142-160 28-14 56-23 86-28-34 22-60 47-78 78 46 2 87 14 126 38-58-9-110-3-158 20-42 20-79 53-118 101Z"
        stroke="url(#condor-gradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M114 266c-26-58-22-128 18-194 2 48 17 92 49 130-24-3-46-1-67 7Z"
        stroke="#D7B792"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.94"
      />
      <path
        d="M116 214c-18-42-18-86 4-132 8 35 25 67 52 95-20-2-39 0-56 7"
        stroke="#6BA2AE"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.76"
      />
      <path
        d="M125 165c-11-28-11-57 4-88 6 24 18 46 36 65-14-1-28 1-40 5"
        stroke="#2E7380"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.72"
      />
    </svg>
  );
}
