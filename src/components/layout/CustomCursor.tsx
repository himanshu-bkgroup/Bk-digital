import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('button, a, input, select, textarea, [data-cursor]');
      setIsPointer(!!clickable);

      const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      setCursorText(customText || '');
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: -16,
        top: -16,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? 'h-16 w-16 bg-[#D4AF37]/90 text-[10px] font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            : isPointer
            ? 'h-10 w-10 border border-[#D4AF37] bg-[#D4AF37]/10 backdrop-blur-xs'
            : 'h-6 w-6 border border-neutral-500/40 bg-white/5'
        }`}
      >
        {cursorText ? (
          <span>{cursorText}</span>
        ) : (
          <div
            className={`rounded-full bg-[#D4AF37] transition-all duration-200 ${
              isPointer ? 'h-2 w-2 opacity-100' : 'h-1 w-1 opacity-60'
            }`}
          />
        )}
      </div>
    </div>
  );
};
