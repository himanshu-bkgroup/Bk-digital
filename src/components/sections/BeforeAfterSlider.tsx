import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80 select-none">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Transformation Benchmark
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            WEBSITE REDESIGN & MODERNIZATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Drag the interactive slider to compare legacy outdated websites against high-conversion BK-DIGITAL digital engineering.
          </p>
        </div>

        {/* Comparison Details Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-4 text-xs">
            <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
              <AlertCircle className="h-4 w-4" />
              <span>Legacy Outdated Website</span>
            </div>
            <p className="text-neutral-400">
              Slow mobile load times, broken layouts, generic templates, lack of CRM or WhatsApp integration, weak conversion intent.
            </p>
          </div>

          <div className="rounded-xl border border-[#D4AF37]/30 bg-[#16130A] p-4 text-xs">
            <div className="flex items-center gap-2 text-[#E5C158] font-bold mb-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>BK-DIGITAL Modernized System</span>
            </div>
            <p className="text-neutral-300">
              Sub-second speed, dark luxury UX, clear conversion paths, contextual WhatsApp capture, Supabase database synchronization.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
          className="relative mx-auto max-w-4xl h-[400px] sm:h-[480px] rounded-2xl border border-neutral-700/80 overflow-hidden bg-neutral-900 shadow-2xl cursor-ew-resize"
        >
          {/* AFTER (BK-DIGITAL REDESIGN) - Layered on Base */}
          <div className="absolute inset-0 bg-[#090C14] flex flex-col justify-between p-6 sm:p-10">
            {/* Mockup modern UI */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <span className="font-display text-lg font-bold text-white tracking-wider">
                  LUXE<span className="text-[#D4AF37]">SYSTEMS</span>
                </span>
                <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
                  <span>Solutions</span>
                  <span>Architecture</span>
                  <span>Results</span>
                  <span className="rounded bg-[#D4AF37] px-3 py-1 text-black font-semibold">Book Demo</span>
                </div>
              </div>

              <div className="max-w-md">
                <span className="inline-block text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                  Engineered Performance
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Accelerate Inbound Pipeline with Automation.
                </h4>
                <p className="mt-3 text-xs text-neutral-300">
                  Sub-second loading times, instant WhatsApp inquiry triage, and structured CRM integration.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black">
                    Start Your Project
                  </div>
                  <div className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs text-neutral-300">
                    Live Demo
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-neutral-800 pt-3">
              <span className="text-[#3DD68C]">● Lighthouse Score: 98/100</span>
              <span className="text-white font-semibold">BK-DIGITAL REDESIGN</span>
            </div>
          </div>

          {/* BEFORE (OLD OUTDATED WEBSITE) - Clipped by Slider */}
          <div
            className="absolute inset-0 bg-[#E2E8F0] text-slate-800 flex flex-col justify-between p-6 sm:p-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-300 pb-3 mb-4 bg-white/70 p-2">
                <span className="font-serif text-lg font-bold text-blue-900">
                  WELCOME TO OUR OLD COMPANY
                </span>
                <span className="text-[10px] text-slate-500">Under Construction</span>
              </div>

              <div className="max-w-md">
                <span className="text-xs bg-yellow-200 text-yellow-900 px-1">Best Quality Since 2012</span>
                <h4 className="font-serif text-xl sm:text-2xl text-slate-900 mt-2">
                  We Offer Many Business Services For You
                </h4>
                <p className="mt-2 text-xs text-slate-600">
                  Click here to contact us or call our landline during business hours between 10am and 4pm.
                </p>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-3 py-1.5 text-xs">
                    Click Here (No Mobile Form)
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-sans text-slate-500 border-t border-slate-300 pt-3 bg-white/50 p-2">
              <span className="text-red-600">● Lighthouse Score: 38/100 (Unresponsive)</span>
              <span className="font-bold text-slate-700">OUTDATED LEGACY</span>
            </div>
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
          >
            <div className="h-10 w-10 rounded-full border-2 border-white bg-[#0A0C13] flex items-center justify-center text-[#D4AF37] shadow-xl">
              <span className="text-[10px] font-bold">⇄</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
