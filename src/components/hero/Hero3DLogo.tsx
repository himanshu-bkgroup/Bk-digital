import React, { useRef, useState, useEffect } from 'react';

export const Hero3DLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // Smooth tilt limits
      const rotY = Math.max(Math.min((x / rect.width) * 25, 20), -20);
      const rotX = Math.max(Math.min((-y / rect.height) * 25, 20), -20);
      setRotation({ x: rotX, y: rotY });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[340px] w-full max-w-[420px] items-center justify-center [perspective:1000px] select-none"
    >
      {/* Ambient Backlight Aura */}
      <div
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl transition-opacity duration-700"
        style={{ opacity: isHovered ? 0.35 : 0.2 }}
      />
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Orbiting Digital Ring */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full border border-neutral-800/80 animate-[spin_30s_linear_infinite]" />
      <div className="pointer-events-none absolute h-88 w-88 rounded-full border border-dashed border-[#D4AF37]/20 animate-[spin_45s_linear_infinite_reverse]" />

      {/* 3D Floating BK Emblem Structure */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${isHovered ? 30 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Dark Obsidian Glass Base */}
        <div className="relative flex h-52 w-52 items-center justify-center rounded-2xl border border-neutral-700/60 bg-gradient-to-br from-[#121620] via-[#090C12] to-[#040507] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.12)]">
          {/* Subtle circuit lines on base */}
          <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" viewBox="0 0 200 200">
            <path d="M 20 20 L 70 20 L 90 40" stroke="#D4AF37" strokeWidth="1" fill="none" />
            <path d="M 180 180 L 130 180 L 110 160" stroke="#D4AF37" strokeWidth="1" fill="none" />
            <circle cx="90" cy="40" r="2" fill="#D4AF37" />
            <circle cx="110" cy="160" r="2" fill="#D4AF37" />
          </svg>

          {/* Central Logo Typography Badge */}
          <div className="relative flex flex-col items-center justify-center text-center">
            {/* The BK Monogram */}
            <div className="relative flex items-center justify-center">
              <span className="font-display text-6xl font-black tracking-tight text-metallic-gold drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                BK
              </span>
            </div>

            {/* DIGITAL Sub-plate */}
            <div className="mt-2 flex items-center gap-1.5 border-t border-neutral-800/80 pt-2">
              <div className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              <span className="font-display text-xs font-bold tracking-[0.35em] text-metallic-silver">
                DIGITAL
              </span>
              <div className="h-1 w-1 rounded-full bg-[#D4AF37]" />
            </div>

            <span className="mt-2 text-[9px] tracking-widest uppercase text-neutral-500 font-mono">
              Systems Studio
            </span>
          </div>

          {/* Light sweep reflection overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60"
            style={{
              transform: `translate(${rotation.y * 2}px, ${-rotation.x * 2}px)`,
            }}
          />
        </div>

        {/* Orbiting Micro Nodes */}
        <div
          className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#0B0E14] text-[9px] font-mono font-bold text-[#E5C158] shadow-[0_0_12px_rgba(212,175,55,0.25)]"
          style={{ transform: 'translateZ(40px)' }}
        >
          AI
        </div>
        <div
          className="absolute -bottom-3 -left-3 flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-700 bg-[#0B0E14] text-[9px] font-mono font-bold text-neutral-300 shadow-md"
          style={{ transform: 'translateZ(30px)' }}
        >
          CRM
        </div>
      </div>
    </div>
  );
};
