"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type KeyboardEvent, useCallback, useRef, useState } from "react";
import type { ClinicalResult } from "@/data/results";

type ResultsSliderProps = {
  results: readonly ClinicalResult[];
};

export function ResultsSlider({ results }: ResultsSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveSlide = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const nearestIndex = slideRefs.current.reduce(
      (nearest, slide, index) => {
        if (!slide) return nearest;

        const currentDistance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
        const nearestSlide = slideRefs.current[nearest];
        const nearestDistance = nearestSlide
          ? Math.abs(nearestSlide.offsetLeft - viewport.scrollLeft)
          : Number.POSITIVE_INFINITY;

        return currentDistance < nearestDistance ? index : nearest;
      },
      0,
    );

    setActiveIndex(nearestIndex);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      const nextIndex = Math.max(0, Math.min(index, results.length - 1));
      const slide = slideRefs.current[nextIndex];

      if (!viewport || !slide || window.matchMedia("(min-width: 768px)").matches) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      viewport.scrollTo({
        left: slide.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(nextIndex);
    },
    [results.length],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  return (
    <div
      className="mt-10 md:mt-12"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Casos clínicos"
    >
      <div
        id="results-slider"
        ref={viewportRef}
        tabIndex={0}
        onScroll={updateActiveSlide}
        onKeyDown={handleKeyDown}
        className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth outline-none [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:overflow-visible lg:grid-cols-3 lg:gap-y-12"
      >
        <ul className="flex gap-4 md:contents">
          {results.map((result, index) => {
            const isActive = activeIndex === index;

            return (
              <li
                key={result.id}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className="min-w-full snap-start md:min-w-0"
              >
                <article className="h-full">
                  <div className="relative aspect-square overflow-hidden rounded-[18px] border border-border bg-surface-muted">
                    <Image
                      src={result.image}
                      alt={result.alt}
                      fill
                      sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 128px) / 3), (min-width: 768px) calc((100vw - 88px) / 2), (min-width: 375px) calc(100vw - 40px), calc(100vw - 32px)"
                      style={{
                        objectFit: result.objectFit,
                        objectPosition: result.objectPosition,
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => goToSlide(activeIndex - 1)}
                      disabled={activeIndex === 0}
                      tabIndex={isActive ? 0 : -1}
                      aria-label="Ver resultado anterior"
                      aria-controls="results-slider"
                      className="absolute left-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-surface/95 text-foreground shadow-soft transition-[background-color,border-color,color] duration-160 hover:border-brand hover:bg-surface hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none md:hidden"
                    >
                      <ArrowLeft size={22} strokeWidth={1.8} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide(activeIndex + 1)}
                      disabled={activeIndex === results.length - 1}
                      tabIndex={isActive ? 0 : -1}
                      aria-label="Ver próximo resultado"
                      aria-controls="results-slider"
                      className="absolute right-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-surface/95 text-foreground shadow-soft transition-[background-color,border-color,color] duration-160 hover:border-brand hover:bg-surface hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none md:hidden"
                    >
                      <ArrowRight size={22} strokeWidth={1.8} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-[clamp(1.375rem,2vw,1.625rem)] font-semibold leading-[1.15] tracking-[-0.006em] text-foreground">
                      {result.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-foreground-muted sm:text-base">
                      {result.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {results[activeIndex]?.title}
      </p>
    </div>
  );
}
