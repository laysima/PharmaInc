import { Children } from "react";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

export default function Marquee({ children, className = "" }: MarqueeProps) {
  const items = Children.toArray(children);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-6">
        {items.map((child, i) => (
          <div key={`a-${i}`}>{child}</div>
        ))}
        {items.map((child, i) => (
          <div key={`b-${i}`}>{child}</div>
        ))}
      </div>
    </div>
  );
}
