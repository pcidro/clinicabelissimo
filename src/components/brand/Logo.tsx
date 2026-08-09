import Image from "next/image";
import { brandImages } from "@/data/brand";

type LogoVariant = keyof typeof brandImages.logo;

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

const dimensions: Record<LogoVariant, { width: number; height: number }> = {
  header: { width: 875, height: 308 },
  footer: { width: 875, height: 308 },
  footerDark: { width: 875, height: 308 },
  mark: { width: 1024, height: 1024 },
  badge: { width: 1024, height: 1024 },
};

export function Logo({
  variant = "header",
  className = "",
  priority = false,
}: LogoProps) {
  const size = dimensions[variant];

  return (
    <Image
      src={brandImages.logo[variant]}
      alt="Clínica Bellissimo"
      width={size.width}
      height={size.height}
      priority={priority}
      className={`h-auto object-contain ${className}`}
      sizes={
        variant === "header"
          ? "(min-width: 1280px) 210px, 165px"
          : variant === "footerDark"
            ? "(min-width: 1280px) 330px, 260px"
            : undefined
      }
    />
  );
}
