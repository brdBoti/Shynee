import React from 'react';

export default function CarWasherGuy() {
  return (
    <>
      <style>{`
        .washer-arm {
          transform-origin: 90px 70px;
          animation: arm-wave 2.5s infinite ease-in-out;
        }
        .bubbles {
          animation: bubbles-rise 3.5s infinite ease-out;
          opacity: 0.8;
        }
        .water-spray {
          animation: spray-pulse 1.5s infinite ease-in-out;
          opacity: 0.6;
        }
        @keyframes arm-wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes bubbles-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
        }
        @keyframes spray-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <svg
        width="240"
        height="280"
        viewBox="0 0 120 140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Detailed animated car washer guy"
      >
        {/* --- Head --- */}
        <circle cx="60" cy="35" r="18" fill="#f5c29f" stroke="#4a3b2a" strokeWidth="1.5" />
        {/* Hair */}
        <path
          d="M42 27 Q50 10 70 20 Q75 35 55 40 Q50 30 42 27Z"
          fill="#6b4b3a"
          stroke="#4a3b2a"
          strokeWidth="1"
        />
        {/* Face shadow */}
        <ellipse cx="60" cy="38" rx="12" ry="10" fill="rgba(0,0,0,0.07)" />

        {/* Eyes */}
        <ellipse cx="50" cy="34" rx="4" ry="6" fill="#fff" />
        <ellipse cx="70" cy="34" rx="4" ry="6" fill="#fff" />
        <circle cx="50" cy="34" r="2" fill="#3a2c1a" />
        <circle cx="70" cy="34" r="2" fill="#3a2c1a" />
        {/* Eyebrows */}
        <path d="M46 27 Q50 23 54 27" stroke="#4a3b2a" strokeWidth="1.3" fill="none" />
        <path d="M66 27 Q70 23 74 27" stroke="#4a3b2a" strokeWidth="1.3" fill="none" />
        {/* Nose */}
        <path d="M60 38 Q59 44 62 44" stroke="#4a3b2a" strokeWidth="1" fill="none" />
        {/* Mouth */}
        <path
          d="M52 50 Q60 60 68 50"
          stroke="#832c0c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Cheeks blush */}
        <circle cx="44" cy="45" r="4" fill="rgba(235, 90, 90, 0.25)" />
        <circle cx="76" cy="45" r="4" fill="rgba(235, 90, 90, 0.25)" />

        {/* --- Neck --- */}
        <rect x="53" y="52" width="14" height="10" fill="#f5c29f" />

        {/* --- Body --- */}
        <rect
          x="35"
          y="62"
          width="50"
          height="55"
          rx="15"
          ry="15"
          fill="url(#bodyGradient)"
          stroke="#3a3a3a"
          strokeWidth="1.7"
        />

        <defs>
          <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b7ddd" />
            <stop offset="100%" stopColor="#1f356a" />
          </linearGradient>
          <radialGradient id="highlight" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Body highlight */}
        <ellipse
          cx="60"
          cy="80"
          rx="20"
          ry="40"
          fill="url(#highlight)"
          pointerEvents="none"
        />

        {/* Shirt details */}
        <line x1="60" y1="62" x2="60" y2="117" stroke="#183966" strokeWidth="3" />
        <circle cx="60" cy="75" r="3" fill="#1b4d91" />
        <circle cx="60" cy="90" r="3" fill="#1b4d91" />
        <circle cx="60" cy="105" r="3" fill="#1b4d91" />

        {/* --- Left Arm --- */}
        <g className="left-arm" transform="translate(15, 65)">
          <rect
            x="0"
            y="0"
            width="18"
            height="10"
            rx="4"
            ry="4"
            fill="#f5c29f"
            stroke="#4a3b2a"
            strokeWidth="1.5"
          />
          {/* Glove */}
          <rect
            x="14"
            y="0"
            width="10"
            height="12"
            rx="3"
            ry="3"
            fill="#2b4b7c"
            stroke="#1a2d4d"
            strokeWidth="1"
          />
          <ellipse cx="20" cy="6" rx="5" ry="6" fill="#6a89b6" />
        </g>

        {/* --- Right Arm (animated) with sponge --- */}
        <g className="washer-arm" transform="translate(70, 65)">
          <rect
            x="0"
            y="0"
            width="18"
            height="12"
            rx="5"
            ry="5"
            fill="#f5c29f"
            stroke="#4a3b2a"
            strokeWidth="1.5"
          />
          {/* Sponge */}
          <rect
            x="12"
            y="-4"
            width="28"
            height="14"
            rx="6"
            ry="6"
            fill="#f7d358"
            stroke="#c49e18"
            strokeWidth="1.7"
          />
          {/* Sponge bubbles */}
          <circle className="bubbles" cx="26" cy="-10" r="5" fill="#a9d0f5" />
          <circle className="bubbles" cx="40" cy="-12" r="4" fill="#c3daf9" />
          <circle className="bubbles" cx="20" cy="-15" r="3" fill="#c3daf9" />
          {/* Sponge texture dots */}
          {[8, 20, 30].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="2"
              r="1"
              fill="#d9b720"
              opacity="0.7"
            />
          ))}
        </g>

        {/* --- Legs --- */}
        <g className="legs" transform="translate(45, 117)">
          <rect
            x="0"
            y="0"
            width="14"
            height="22"
            rx="6"
            ry="6"
            fill="#2e2e2e"
            stroke="#000"
            strokeWidth="0.9"
          />
          <rect
            x="22"
            y="0"
            width="14"
            height="22"
            rx="6"
            ry="6"
            fill="#2e2e2e"
            stroke="#000"
            strokeWidth="0.9"
          />
          {/* Shoes */}
          <ellipse
            cx="7"
            cy="24"
            rx="14"
            ry="6"
            fill="#0d0d0d"
            stroke="#000"
            strokeWidth="0.7"
          />
          <ellipse
            cx="29"
            cy="24"
            rx="14"
            ry="6"
            fill="#0d0d0d"
            stroke="#000"
            strokeWidth="0.7"
          />
        </g>

        {/* --- Water spray (animated) --- */}
        <g className="water-spray" transform="translate(105, 60)">
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={i * 6}
              cy={-i * 8}
              r={2 + (i % 2)}
              fill="#74c0ff"
              opacity="0.5"
            />
          ))}
        </g>
      </svg>
    </>
  );
}
