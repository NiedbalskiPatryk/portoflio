import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout - pass through to locale layout
// The actual html/body is rendered in [locale]/layout.tsx
export default function RootLayout({ children }: Props) {
  return children;
}
