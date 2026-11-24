import type { Picture as PictureData } from "~/content/types";

interface Props {
  picture: PictureData;
  alt: string;
  /** Tells the browser how wide the image will be shown, so it downloads the right size. */
  sizes: string;
  className?: string;
  priority?: boolean;
}

export function Picture({ picture, alt, sizes, className, priority }: Props) {
  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
