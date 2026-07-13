import Image from "next/image";

type CondorMarkProps = {
  className?: string;
  priority?: boolean;
};

export function CondorMark({ className = "", priority = false }: CondorMarkProps) {
  return (
    <Image
      src="/brand/cq-logo-dossier.png"
      alt="CQ Condor Quality"
      width={587}
      height={246}
      className={className}
      priority={priority}
    />
  );
}
