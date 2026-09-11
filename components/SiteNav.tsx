"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { navItems } from "@/components/siteConfig";

/**
 * The item that was highlighted on the page we navigated away from. Every page
 * renders its own header, so the nav remounts on each route change; remembering
 * the last item lets the pill start where it was and travel to the new one
 * instead of simply appearing there.
 */
let previousActiveHref: string | null = null;

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Shared so the pill and the white labels it carries move as one. */
const slideTransition =
  "duration-[420ms] ease-nav-pill motion-reduce:transition-none";

type Box = { left: number; top: number; width: number; height: number };

type NavLayout = {
  /** One box per nav item, measured from the rendered links. */
  boxes: Box[];
  /** Item the pill currently sits on — the origin while a slide is starting. */
  pillIndex: number;
  sliding: boolean;
};

type SiteNavProps = {
  /** Nav item to mark as the current page. Omit on pages that are not in the nav. */
  activeHref?: string;
};

export function SiteNav({ activeHref }: SiteNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const originHref = useRef<string | null>(null);
  const originCaptured = useRef(false);
  const [layout, setLayout] = useState<NavLayout | null>(null);

  const activeIndex = navItems.findIndex((item) => item.href === activeHref);

  const measureBoxes = useCallback((): Box[] | null => {
    const boxes = itemRefs.current.slice(0, navItems.length).map((el) =>
      el
        ? {
            left: el.offsetLeft,
            top: el.offsetTop,
            width: el.offsetWidth,
            height: el.offsetHeight,
          }
        : null,
    );
    return boxes.every((box) => box !== null) ? (boxes as Box[]) : null;
  }, []);

  // Position the pill before paint: on the active item, or on the item we came
  // from so it has somewhere to travel from.
  useIsomorphicLayoutEffect(() => {
    if (activeIndex === -1) {
      setLayout(null);
      return;
    }

    const boxes = measureBoxes();
    if (!boxes) return;

    // Captured once per instance so a repeat run of this effect (React Strict
    // Mode in development) still knows which item the pill is travelling from.
    if (!originCaptured.current) {
      originCaptured.current = true;
      originHref.current = previousActiveHref;
    }
    previousActiveHref = navItems[activeIndex].href;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fromIndex = navItems.findIndex(
      (item) => item.href === originHref.current,
    );

    if (reducedMotion || fromIndex === -1 || fromIndex === activeIndex) {
      setLayout({ boxes, pillIndex: activeIndex, sliding: false });
      return;
    }

    setLayout({ boxes, pillIndex: fromIndex, sliding: false });

    let innerFrame = 0;
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        setLayout({ boxes, pillIndex: activeIndex, sliding: true });
      });
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
    };
  }, [activeIndex, measureBoxes]);

  // Keep the pill on the active item when the nav is re-laid out.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || activeIndex === -1) return;

    let initialCallback = true;
    const observer = new ResizeObserver(() => {
      if (initialCallback) {
        initialCallback = false;
        return;
      }
      const boxes = measureBoxes();
      if (!boxes) return;
      setLayout({ boxes, pillIndex: activeIndex, sliding: false });
    });

    observer.observe(nav);
    return () => observer.disconnect();
  }, [activeIndex, measureBoxes]);

  const pill = layout ? layout.boxes[layout.pillIndex] : null;
  const firstBox = layout?.boxes[0];
  const lastBox = layout?.boxes[layout.boxes.length - 1];

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="relative order-3 mx-auto flex h-[62px] w-[212px] items-center rounded-figma-pill bg-portfolio-paper p-[12px] text-[16px] sm:order-none sm:mt-0 lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
    >
      {layout && pill && firstBox && lastBox ? (
        <span
          aria-hidden
          className={`pointer-events-none absolute left-0 top-0 z-10 overflow-hidden rounded-figma-pill bg-portfolio-navy ${
            layout.sliding ? `transition-[transform,width] ${slideTransition}` : ""
          }`}
          style={{
            width: pill.width,
            height: pill.height,
            transform: `translate3d(${pill.left}px, ${pill.top}px, 0)`,
          }}
        >
          {/* A copy of the labels in white, revealed only through the pill, so
              each word turns white exactly as the pill covers it. Its offset is
              the inverse of the pill's, keeping the words still while it moves. */}
          <span
            className={`absolute left-0 top-0 block text-white ${
              layout.sliding ? `transition-transform ${slideTransition}` : ""
            }`}
            style={{
              width: lastBox.left + lastBox.width - firstBox.left,
              height: pill.height,
              transform: `translate3d(${firstBox.left - pill.left}px, 0, 0)`,
            }}
          >
            {navItems.map((item, index) => (
              <span
                key={item.href}
                className="absolute top-0 flex h-full items-center justify-center"
                style={{
                  left: layout.boxes[index].left - firstBox.left,
                  width: layout.boxes[index].width,
                }}
              >
                {item.label}
              </span>
            ))}
          </span>
        </span>
      ) : null}

      {navItems.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            aria-current={isActive ? "page" : undefined}
            className={`relative flex h-[38px] flex-1 items-center justify-center rounded-figma-pill transition-[background-color,scale] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-navy motion-reduce:transition-none ${
              isActive
                ? ""
                : "hover:bg-portfolio-navy/[0.06] active:scale-[0.96]"
            }`}
          >
            {/* Until the pill is measured on the client, the active link paints
                its own background so the highlight is there on first paint. */}
            {isActive && !layout ? (
              <span
                aria-hidden
                className="absolute inset-0 rounded-figma-pill bg-portfolio-navy"
              />
            ) : null}
            <span
              className={`relative ${
                isActive && !layout ? "text-white" : "text-black"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
