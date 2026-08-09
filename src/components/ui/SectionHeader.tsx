type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`max-w-[45rem] ${className}`}>
      <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-brand">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-4 font-display text-[clamp(2.25rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.014em] text-foreground"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-[42rem] text-base leading-[1.7] text-foreground-muted sm:text-lg">
        {description}
      </p>
    </header>
  );
}
