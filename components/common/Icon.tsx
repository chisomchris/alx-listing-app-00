import * as Icons from "../../public/assets/icons";

export interface IconProps {
  name: keyof typeof Icons;
  active?: boolean;
  className?: string;
  size?: number; // in pixels
}

export default function Icon({
  name,
  active,
  className,
  size = 24,
}: IconProps) {
  const SvgIcon = Icons[name];

  return (
    <SvgIcon
      width={size}
      height={size}
      className={`
        ${active ? "stroke-[#222222]" : "stroke-[#616161]"}
        ${className}
      `}
    />
  );
}
