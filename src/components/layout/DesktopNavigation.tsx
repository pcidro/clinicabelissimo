"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/data/navigation";

type DesktopNavigationProps = {
  items: readonly NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-6 2xl:gap-8">
        {items.map((item) => {
          const isCurrent = item.href === "/" && pathname === "/";

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className="group relative flex min-h-11 items-center text-[14px] font-semibold leading-none tracking-[0.005em] text-brand-foreground transition-opacity duration-160 hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-1/2 bottom-1 h-0.5 translate-x-1/2 bg-white transition-[width] duration-160 motion-reduce:transition-none ${
                    isCurrent ? "w-5" : "w-0 group-hover:w-5"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
