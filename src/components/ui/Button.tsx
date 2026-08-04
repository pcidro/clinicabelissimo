import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
};

const variantClasses = {
  primary:
    "border border-brand bg-brand text-brand-foreground hover:border-brand-hover hover:bg-brand-hover active:border-brand-active active:bg-brand-active",
  secondary:
    "border border-border-strong bg-surface/85 text-foreground hover:border-brand hover:bg-surface active:bg-surface-muted",
  light:
    "border border-white bg-white text-brand hover:bg-surface active:bg-surface-muted",
} as const;

export function Button({
  children,
  className = "",
  href,
  variant = "light",
  ...props
}: ButtonProps) {
  const classNames = `inline-flex min-h-12 items-center justify-center rounded-md px-6 text-[15px] font-bold leading-none tracking-[0.01em] whitespace-nowrap transition-[background-color,border-color,box-shadow,transform] duration-160 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${variantClasses[variant]} ${className}`;

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classNames}
      {...props}
    >
      {children}
    </a>
  );
}
