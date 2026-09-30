import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'expand' | 'complete'>('initial');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('expand'), 400);
    const t2 = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050608] transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          {/* Subtle glowing ring */}
          <div className="absolute h-24 w-24 animate-ping rounded-full border border-[#D4AF37]/20 opacity-75" />
          
          <div className="relative flex items-center gap-1 font-display font-extrabold tracking-wider text-2xl text-white">
            <span className="text-metallic-gold">BK</span>
            <div
              className={`overflow-hidden transition-all duration-500 ease-out flex items-center ${
                phase === 'expand' ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              <span className="text-neutral-500">-</span>
              <span className="text-metallic-silver tracking-widest pl-1">DIGITAL</span>
            </div>
          </div>
        </div>

        <div className="mt-4 h-[1px] w-28 overflow-hidden bg-neutral-800">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-[shimmer_1s_infinite]" />
        </div>
      </div>
    </div>
  );
};
