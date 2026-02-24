interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, align = "center", light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <p className={`font-body text-xs md:text-sm tracking-[0.25em] uppercase mb-3 ${light ? "text-primary-foreground/60" : "text-primary"}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base md:text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
