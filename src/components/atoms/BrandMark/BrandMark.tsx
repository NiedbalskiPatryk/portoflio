// ITPapi brand mark: a browser window with a </> tag.
// Plain SVG (no MUI, no hooks) so it also renders inside next/og ImageResponse.

interface BrandMarkProps {
  size: number;
  tile?: string;
  ink?: string;
  rounded?: boolean;
}

export default function BrandMark({
  size,
  tile = "#0a0a0a",
  ink = "#ffffff",
  rounded = true,
}: BrandMarkProps) {
  const background = rounded ? (
    <rect x="2" y="2" width="60" height="60" rx="4" fill={tile} />
  ) : (
    <rect width="64" height="64" fill={tile} />
  );

  // Favicon size: drop the dots and slash, thicken the strokes.
  if (size < 24) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        {background}
        <line x1="2" y1="16" x2="62" y2="16" stroke={ink} strokeWidth="5" />
        <path
          d="M25 28 L15 39 L25 50 M39 28 L49 39 L39 50"
          fill="none"
          stroke={ink}
          strokeWidth="7"
          strokeLinecap="square"
        />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      {background}
      <line x1="2" y1="16" x2="62" y2="16" stroke={ink} strokeWidth="3" />
      <circle cx="10" cy="9" r="2.2" fill={ink} />
      <circle cx="17" cy="9" r="2.2" fill={ink} />
      <path
        d="M24 28 L16 37 L24 46 M40 28 L48 37 L40 46 M35 25 L29 49"
        fill="none"
        stroke={ink}
        strokeWidth="5.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
