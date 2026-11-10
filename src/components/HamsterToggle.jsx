import React, { useRef, useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/**
 * HamsterToggle Component
 * Uses: https://lottie.host/c86abb35-1979-459b-83dd-d40b17cc9290/0hVwm1lkab.lottie
 * - Forward (plays 0 -> 45 frames) for Dark Mode
 * - Backward (plays in reverse 45 -> 0 frames) for Light Mode
 */
export default function HamsterToggle({ isDark, onToggle }) {
  const [dotLottie, setDotLottie] = useState(null);
  const isFirstRender = useRef(true);

  // Set the correct frame when the animation loads
  useEffect(() => {
    if (!dotLottie) return;

    const setupInitialFrame = () => {
      dotLottie.setLoop(false);
      if (isFirstRender.current) {
        isFirstRender.current = false;
        dotLottie.setFrame(isDark ? 44 : 0);
      }
    };

    dotLottie.addEventListener('load', setupInitialFrame);
    if (dotLottie.isLoaded) {
      setupInitialFrame();
    }

    return () => {
      dotLottie.removeEventListener('load', setupInitialFrame);
    };
  }, [dotLottie, isDark]);

  // Handle toggling forward (Dark) and backward (Light)
  useEffect(() => {
    if (!dotLottie || isFirstRender.current) return;

    try {
      dotLottie.setLoop(false);
      dotLottie.setSpeed(1.4);

      if (isDark) {
        // Forward for dark mode
        dotLottie.setMode('forward');
        dotLottie.setSegment(0, 45);
        dotLottie.play();
      } else {
        // Backward for light mode
        dotLottie.setMode('reverse');
        dotLottie.setSegment(0, 45);
        dotLottie.play();
      }
    } catch {
      dotLottie.setFrame(isDark ? 44 : 0);
    }
  }, [isDark, dotLottie]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Hamster toggle dark mode (Forward for dark, Backward for light)"
      title={isDark ? "Switch backward for Light Mode" : "Switch forward for Dark Mode"}
      onClick={onToggle}
      className="relative w-[58px] sm:w-[72px] h-[30px] sm:h-[36px] flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 cursor-pointer shrink-0 drop-shadow-sm select-none"
    >
      <div className="w-full h-full pointer-events-none flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/c86abb35-1979-459b-83dd-d40b17cc9290/0hVwm1lkab.lottie"
          loop={false}
          autoplay={false}
          dotLottieRefCallback={setDotLottie}
        />
      </div>
    </button>
  );
}
