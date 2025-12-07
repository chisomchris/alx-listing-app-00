import { Logo } from "../../public/assets/icons";

export interface IconProps {
  className?: string;
  size?: number; // in pixels
}

export default function ALXLogo({
  className = '',
  size = 24,
}: IconProps) {
  return <Logo width={size} className={`py-2 ${className}`} />;
}
