"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/data/navigation";

type MobileMenuProps = {
  items: readonly NavigationItem[];
  whatsappUrl: string;
};

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ items, whatsappUrl }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
        className="flex size-11 items-center justify-center rounded-full text-brand-foreground transition-colors duration-160 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
      >
        <Menu aria-hidden="true" size={24} strokeWidth={1.8} />
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50 overflow-y-auto bg-brand text-brand-foreground"
        >
          <div className="mx-auto flex min-h-full w-full max-w-container-main flex-col px-4 min-[375px]:px-5 md:px-8">
            <div className="flex h-16 shrink-0 items-center justify-between md:h-[72px]">
              <Link
                href="/"
                onClick={closeMenu}
                aria-label="Clínica Bellissimo — página inicial"
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Logo variant="header" className="w-[165px] md:w-[185px]" />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
                className="flex size-11 items-center justify-center rounded-full transition-colors duration-160 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <X aria-hidden="true" size={24} strokeWidth={1.8} />
              </button>
            </div>

            <nav aria-label="Navegação mobile" className="flex flex-1 flex-col py-8">
              <ul className="border-t border-white/20">
                {items.map((item) => {
                  const isCurrent = item.href === "/" && pathname === "/";

                  return (
                    <li key={item.href} className="border-b border-white/20">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isCurrent ? "page" : undefined}
                        className="flex min-h-14 items-center text-base font-semibold transition-opacity duration-160 hover:opacity-80 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                      >
                        <span className={isCurrent ? "border-b-2 border-white" : ""}>
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-8 w-full"
              >
                Agendar avaliação
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
