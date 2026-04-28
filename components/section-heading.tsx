type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl space-y-4">
      <p className="cq-overline">{eyebrow}</p>
      <h2 className="cq-title">{title}</h2>
      <p className="cq-copy max-w-3xl">{description}</p>
    </div>
  );
}
