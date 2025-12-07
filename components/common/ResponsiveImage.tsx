import Image, { ImageProps } from "next/image";

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  small: string;
  medium: string;
  large: string;
}

export default function ResponsiveImage({
  small,
  medium,
  large,
  alt,
  ...props
}: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={small} />
      <source media="(max-width: 1024px)" srcSet={medium} />
      <Image src={large} alt={alt} {...props} />
    </picture>
  );
}
