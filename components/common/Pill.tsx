import { cn } from "../../utils";

interface PillProps {
  children: React.ReactNode;
  bg?: string; // tailwind bg class (optional)
  border?: string; // tailwind border class (optional)
  className?: string; // extra classes
  onClick?: () => void; // if it's clickable
}

export default function Pill({
  children,
  bg,
  border,
  className,
  onClick,
}: PillProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-sm inline-flex items-center gap-2 select-none rounded-full",
        bg,
        border,
        className
      )}
    >
      {children}
    </div>
  );
}
